const route = require('express').Router();
const { postCourse,postCategory,deleteCourse,deleteCategory } = require('../Controllers/courseController');

route.post('/create' , postCourse);
route.post('/create/category' , postCategory);
route.delete('/delete/:uuid?' , deleteCourse);
route.delete('/delete/category/:title?' , deleteCategory);

module.exports = route;