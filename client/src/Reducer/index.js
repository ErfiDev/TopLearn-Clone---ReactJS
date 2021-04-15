import {combineReducers} from 'redux';
import toggleToastReducer from './toggleToastReducer';
import courseMakerReducer from './courseMakerReducer';
import {passLogin , emailLogin} from './login';
import User from './user';

const Reducers = combineReducers({
    toggleToast: toggleToastReducer,
    course: courseMakerReducer,
    emailLogin,
    passLogin,
    User
});

export default Reducers;