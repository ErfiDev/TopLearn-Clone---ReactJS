import httpService from "./httpService";
import {
  getCourses,
  filterCourses,
  createCourse,
  deleteCourse,
  getCategories,
  createCategory,
  deleteCategory,
  getCourseWithTitle
} from "./config.json";

export function getCourse(count, from) {
  return httpService.get(`${getCourses}/${count}/${from}`);
}

export function filterCourse(category, filter) {
  return httpService.get(`${filterCourses}/${category}?price=${filter}`);
}

export function postCourse(data) {
  return httpService.post(createCourse, JSON.stringify(data));
}

export function deleteCours(uuid) {
  return httpService.post(`${deleteCourse}/${uuid}`);
}

export function getCatagory(count , from)
{
    return httpService.get(
        `${getCategories}?count=${count}&from=${from}`
    );
}

export function createCategoryy(data)
{
    return httpService.post(
        createCategory,
        JSON.stringify(data)
    );
}

export function deleteCategories(title)
{
    return httpService.delete(
        `${deleteCategory}/${title}`
    );
}

export function getWithTitle(title)
{
  return httpService.get(`${getCourseWithTitle}/${title}`);
}