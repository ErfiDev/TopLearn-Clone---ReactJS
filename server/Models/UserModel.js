const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserModel = new schema({
    fullname: {required: true , type: String},
    password: {required: true , type: String},
    email: {required: true , type: String},
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Users' , UserModel);