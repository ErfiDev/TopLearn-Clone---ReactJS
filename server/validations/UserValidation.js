const joi = require('joi');

//Validations
function registerValidation(data) 
{
    //User Register Schema
    const UserRegister = joi.object({
        fullname: joi.string().min(5).max(80).required(),
        email: joi.string().required().email(),
        password: joi.string().min(8).required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
        password2: joi.string().min(8).required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
    });

    return UserRegister.validate(data);
}

function loginValidation(data) 
{
    //User Register Schema
    const UserLogin = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
        .pattern(new RegExp("^[a-zA-Z0-9]+$")),
        isRemember: joi.boolean()
    });

    return UserLogin.validate(data);
}


module.exports = {
    registerValidation,
    loginValidation
};