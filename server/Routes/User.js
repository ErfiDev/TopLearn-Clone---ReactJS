const express = require('express');
const Route = express.Router();
const { registerUser,loginUser,logoutUser,changePass } = require('../Controllers/userController');

Route.post('/register' , registerUser);
Route.post('/login' , loginUser);
Route.post('/logout' , logoutUser);
Route.put('/update/password' , changePass);//with req.query

module.exports = Route;