const mongoose  = require('mongoose');
const schema = mongoose.Schema;
const {v4: uuidv4} = require('uuid');

const courseCategoryModel = new schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        default: ()=> uuidv4()
    }
});

module.exports = mongoose.model('categorie' , courseCategoryModel);