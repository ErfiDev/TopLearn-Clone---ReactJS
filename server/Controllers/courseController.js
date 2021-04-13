const CourseModel = require('../Models/CourseModel');
const CategoryModel = require('../Models/courseCategoryModel');
const {createCourseValidation , createCategoryValidation} = 
require('../validations/courseValidator');

async function postCourse(req , res)
{
    let errors = [];
    let {error} = createCourseValidation(req.body);
    if(error)
    {
        let {details} = error;
        details.forEach(item => errors.push(item.message));
        return res.json({status: 406 , msg: errors});
    }

    const {title,price,courseCategory,imgSrc,courseTime,teacher} = req.body;
    let findByTitle = await CourseModel.find({title});
    if(findByTitle.length > 0)
    {
        return res.json({
            msg: 'This title has been registerd, please change it',
            status: 406
        });
    }
    else
    {
        let data = await new CourseModel({
            title,
            price,
            courseCategory,
            imgSrc,
            courseTime,
            teacher
        });

        await data.save()
        .then(()=> res.json({status: 201}))
        .catch(err => res.json({status: 500 , msg: err}));
    }
}

async function postCategory(req , res)
{
    let errors = [];
    let {error} = createCategoryValidation(req.body);
    if(error)
    {
        let {details} = error;
        details.forEach(item => errors.push(item.message));
        return res.json({status: 406 , msg: errors});
    }


    let {title} = req.body;
    let data = await new CategoryModel({
        title
    });

    await data.save()
    .then(()=> res.json({status: 201}))
    .catch(err => res.json({msg: err , status: 500}))
}

async function deleteCourse(req , res)
{
    try
    {
        let {uuid} = req.params;
        if(!uuid)
        { 
            return res.json({
                msg: 'Please provide required parameter',
                status: 406
            }); 
        }
        else
        {
            let findByUU = await CourseModel.findOne({uuid});
            if(findByUU === null)
            {
                return res.json({
                    msg: 'Im Sorry. Not found!',
                    status: 404
                })
            }
            else
            {
                let findAndDelete = await CourseModel.findOneAndDelete({uuid});
                res.json({msg: findAndDelete , status: 200});
            }
        }
    }
    catch(err)
    {
        res.json({msg: err , status: 500});
    }
}

module.exports = {
    postCourse,
    postCategory,
    deleteCourse
}