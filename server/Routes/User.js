const express = require('express');
const Route = express.Router();
const { registerUser,loginUser,logoutUser } = require('../Controllers/userController');

Route.post('/register' , registerUser);
Route.post('/login' , loginUser);
Route.post('/logout' , logoutUser);

module.exports = Route;