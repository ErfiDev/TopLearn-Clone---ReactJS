const mongoose  = require('mongoose');
const schema = mongoose.Schema;
const {v4: uuidv4} = require('uuid');

const CourseModel = new schema({
    uuid: {
        type: String,
        default: ()=> uuidv4()
    },
    title: {required: true , type: String},
    imgSrc: {required: true , type: String},
    price: {required: true , type: Number},
    courseCategory: {required: true , type: Array},
    courseTime: {required: true , type: String},
    popular: Boolean
});

module.exports = mongoose.model('course' , CourseModel);