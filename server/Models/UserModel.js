const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserModel = schema({
    fullname: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Users' , UserModel);