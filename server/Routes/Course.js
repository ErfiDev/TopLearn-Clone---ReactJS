const route = require("express").Router();
const {
  postCourse,
  postCategory,
  deleteCourse,
  deleteCategory,
  getCourse,
  getCategories,
  filterCourses,
  getCourseWithTitle
} = require("../Controllers/courseController");

//course api
route.get('/courses/:count?/:from?' , getCourse);
route.get('/filter/courses/:category?' , filterCourses);//With params and query 
route.get('/filter/:title?' , getCourseWithTitle);
route.post("/create", postCourse);
route.delete("/delete/:uuid?", deleteCourse);

//category api
route.get("/categories" , getCategories);//With req.query
route.post("/create/category", postCategory);
route.delete("/delete/category/:title?", deleteCategory);


module.exports = route;