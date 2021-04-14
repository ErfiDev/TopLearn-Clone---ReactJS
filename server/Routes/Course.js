const route = require("express").Router();
const {
  postCourse,
  postCategory,
  deleteCourse,
  deleteCategory,
  getCourse,
  getCategories
} = require("../Controllers/courseController");

//course api
route.get('/courses/:count?/:from?' , getCourse)
route.post("/create", postCourse);
route.delete("/delete/:uuid?", deleteCourse);

//category api
route.get("/categories" , getCategories);
route.post("/create/category", postCategory);
route.delete("/delete/category/:title?", deleteCategory);

module.exports = route;
