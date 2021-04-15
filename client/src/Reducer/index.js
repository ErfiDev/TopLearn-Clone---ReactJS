import {combineReducers} from 'redux';
import courseMakerReducer from './courseMakerReducer';
import User from './user';

const Reducers = combineReducers({
    course: courseMakerReducer,
    User
});

export default Reducers;