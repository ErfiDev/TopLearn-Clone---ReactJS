import {combineReducers} from 'redux';
import courses from './course';
import User from './user';

const Reducers = combineReducers({
    courses,
    User
});

export default Reducers;