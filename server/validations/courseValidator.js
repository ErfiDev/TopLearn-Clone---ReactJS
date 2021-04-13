const joi = require('joi');


//Validations
function createCourseValidation(data)
{
    const courseSchema = joi.object({
        title: joi.string().min(8).required(),
        imgSrc: joi.string().required(),
        price: joi.number().required(),
        courseCategory: joi.array(),
        courseTime: joi.string().required(),
        teacher: joi.string().min(5).required()
    });

    return courseSchema.validate(data);
}

function createCategoryValidation(data)
{
    const categorySchema = joi.object({
        title: joi.string().required().alphanum()
    });

    return categorySchema.validate(data);
}

module.exports = {
    createCourseValidation,
    createCategoryValidation
}