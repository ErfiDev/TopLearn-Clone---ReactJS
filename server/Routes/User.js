const express = require('express');
const Route = express.Router();
const { registerUser,loginUser } = require('../Controllers/userController');

Route.post('/register' , registerUser);
Route.post('/login' , loginUser);

module.exports = Route;