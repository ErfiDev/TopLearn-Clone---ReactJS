const CourseModel = require('../Models/CourseModel');
const CategoryModel = require('../Models/courseCategoryModel');

async function postCourse(req , res)
{
    try{
        let {title,imgSrc,price,courseCategoryName,courseTime} = req.body;
        if(!title || !imgSrc || !courseCategoryName || !price || !courseTime)
        {
            return res.json({
                msg: 'Please complete the required items',
                status: 406
            });
        }
        else
        {
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
                    courseCategoryName,
                    imgSrc,
                    courseTime
                });

                await data.save()
                .then(()=> res.json({status: 201}))
                .catch(err => res.json({status: 500 , msg: err}));
            }
        }
    }
    catch(err)
    {
        res.json({
            msg: err,
            status: 500
        });
    };
}

async function postCategory(req , res)
{
    try{
        let {title , id , courses} = req.body;
        if(!title || !id || !courses)
        {
            return res.json({
                msg: 'Please complete the required items',
                status: 406
            })
        }
        let data = await new CategoryModel({
            title,
            id,
            courses
        });

        await data.save()
        .then(()=> res.json({status: 201}))
        .catch(err => res.json({msg: err , status: 500}))
    }
    catch(err){
        res.json({msg: err , status: 500});
    }
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