const route = require("express").Router();
const {
  postCourse,
  postCategory,
  deleteCourse,
  deleteCategory,
  getCourse
} = require("../Controllers/courseController");

//course api
route.get('/:count?/:from?' , getCourse)
route.post("/create", postCourse);
route.delete("/delete/:uuid?", deleteCourse);

//category api
route.post("/create/category", postCategory);
route.delete("/delete/category/:title?", deleteCategory);

module.exports = route;
