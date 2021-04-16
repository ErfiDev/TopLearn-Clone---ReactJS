import {combineReducers} from 'redux';
import courses from './course';
import User from './user';
import filterCourses from './filterCourses';
import Categories from './categories';

const Reducers = combineReducers({
    courses,
    User,
    filterCourses,
    Categories
});

export default Reducers;