const route = require('express').Router();
const { postCourse,postCategory,deleteCourse } = require('../Controllers/courseController');

route.post('/create' , postCourse);
route.post('/create/category' , postCategory);
route.delete('/delete/:uuid?' , deleteCourse);

module.exports = route;