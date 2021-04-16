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

export function filterCourse(category, price) {
  if(category && !price){
    return httpService.get(`${filterCourses}/${category}`);
  }
  if(!category && price){
    return httpService.get(`${filterCourses}?price=${price}`);
  }
  if(category && price)
  {
    return httpService.get(`${filterCourses}/${category}?price=${price}`);
  }
  httpService.get(`${filterCourses}`);
}

export function postCourse(data) {
  return httpService.post(createCourse, JSON.stringify(data));
}

export function deleteCours(uuid) {
  return httpService.post(`${deleteCourse}/${uuid}`);
}

export function getCatagory(count , from)
{
    if(!count && !from) return httpService.get(getCategories)
    else{
      return httpService.get(
          `${getCategories}?count=${count}&from=${from}`
      );
    }
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