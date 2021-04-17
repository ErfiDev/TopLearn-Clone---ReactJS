const CourseModel = require('../Models/CourseModel');
const CategoryModel = require('../Models/courseCategoryModel');
const {
    createCourseValidation,
    createCategoryValidation ,
    getCourseValidation,
    getCategoriesValidation,
    filterCoursesValidation,
    getCourseWithTitleValidation
} = require('../validations/courseValidator');

async function getCourse(req , res)
{
    let {count , from} = req.params;
    if(!count && !from)
    {
        return res.json({
            msg: 'Enter at least one item',
            status: 406
        })
    }
    else{
        let errors = [];
        const {error} = await getCourseValidation(req.params);
        if(error)
        {
            let {details} = error;
            details.forEach(item => errors.push(item.message));
            return res.json({status: 406 , msg: errors});
        }
        else
        {
            if(count && !from)
            {
                try{
                    let find = await CourseModel.find({}).limit(parseInt(count));
                    return res.json({status: 200 , data: find});
                }catch(err){res.json({msg: err , status: 500})}
            }

            try{
                let find = await CourseModel.find()
                .limit(parseInt(count)).skip(parseInt(from));
                return res.json({status: 200 , data: find});
            }catch(err){res.json({msg:err , status: 500})}
        }
    }
}

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
        try{
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
        }catch(err){res.json({msg: err , status: 500})}
    }
}

async function filterCourses(req , res)
{
    let {category} = req.params;
    let {price} = req.query;
    if(!category && !price)
    {
        return res.json({
            msg: 'Enter at least one item',
            status: 406
        });
    }
    else{
        let defaultPriceOption = ['lowPrice' , 'highPrice'];
        let errors = [];
        let {error} = filterCoursesValidation({category,price});
        if(error)
        {
            let {details} = error;
            details.forEach(item => errors.push(item.message));
            return res.json({status: 406 , msg: errors});
        }
        if(category && !price)
        {
            let all = [];
            let findAll = await CourseModel.find(
                {},{courseCategory: 1,uuid: 1,_id: 0}
            );  
            findAll.forEach(item => {
                if(item.courseCategory.includes(category))
                {
                    return all.push(item.uuid);
                }else null
            });

            if(all.length <= 0){
                return res.json({
                    msg: 'No courses were found for this category' ,
                    status: 404
                });
            }
            let findByUuids = await CourseModel.find({
                uuid: {$in: all}
            });
            return res.json({
                data: findByUuids,
                status: 200
            })
        }
        if(price && !category)
        {
            if(!defaultPriceOption.includes(price))
            {
                return res.json({
                    msg: 'Not defined this price type',
                    status: 406
                });
            }
            if(price === 'lowPrice')
            {
                let findLowPrice = await CourseModel.find({}).sort({price: 1});
                return res.json({
                    data: findLowPrice,
                    status: 200
                })
            }
            let findHighPrice = await CourseModel.find({}).sort({price: -1});
            res.json({
                data: findHighPrice,
                status: 200
            })
        }
        if(price && category)
        {
            let all = [];
            let findAll = await CourseModel.find({},{courseCategory: 1,uuid: 1,_id: 0});  
            findAll.forEach(item => {
                if(item.courseCategory.includes(category))
                {
                    return all.push(item.uuid);
                }else null
            });

            if(all.length <= 0){
                return res.json({
                    msg: 'No courses were found for this category' ,
                    status: 404
                });
            }
            if(!defaultPriceOption.includes(price))
            {
                return res.json({
                    msg: 'Not defined this price type',
                    status: 406
                })
            }
            else{
                if(price === 'lowPrice')
                {
                    let find = await CourseModel.find({
                        uuid: {$in: all}
                    }).sort({price: 1});
                    return res.json({
                        data: find,
                        status: 200
                    });
                }
                let find = await CourseModel.find({
                    uuid: {$in: all}
                }).sort({price: -1});
                res.json({
                    data: find,
                    status: 200
                });
            }
        }
    }
}

async function getCourseWithTitle(req , res)
{
    let errors = [];
    let {error} = await getCourseWithTitleValidation(req.params);
    if(error){
        let {details} = error;
        details.forEach(item => errors.push(item.message));
        return res.json({
            msg: errors,
            status: 406
        });
    }
    
    let {title} = req.params;
    let findByTitle = await CourseModel.find(
        {title : {$regex : `.*${title}.*` , $options: 'i'}}
    );
    res.json({
        data: findByTitle,
        status: 200
    });
}

async function getCategories(req , res)
{
    if(req.url === '/categories')
    {
        let findAll = await CategoryModel.find();
        return res.json({
            data: findAll,
            status: 200
        });
    }
    else{
        let errors = [];
        let {count , from} = req.query;
        let {error} = getCategoriesValidation(req.query);
        if(error)
        {
            let {details} = error;
            details.forEach(item => errors.push(item.message));
            return res.json({status: 406 , msg: errors});
        }
        if(count && !from)
        {
            let find = await CategoryModel.find().limit(parseInt(count));
            return res.json({
                data: find,
                status: 200
            });
        }

        let find = await CategoryModel.find()
        .limit(parseInt(count)).skip(parseInt(from));
        res.json({
            data: find,
            status: 200
        })
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

async function deleteCategory(req , res)
{
    let {title} = req.params;
    if(!title) 
    {
        return res.json({
            msg: 'Please provide required parameter',
            status: 406
        })
    }

    let findByTitle = await CategoryModel.findOne({title});
    if(findByTitle === null)
    {
        return res.json({
            msg: 'Not found category!',
            status: 404
        })
    }
    else
    {
        let findAndDelete = await CategoryModel.findOneAndDelete({title});
        res.json({
            msg: findAndDelete,
            status: 200
        });
    }
}

module.exports = {
    postCourse,
    postCategory,
    deleteCourse,
    deleteCategory,
    getCourse,
    getCategories,
    filterCourses,
    getCourseWithTitle
}