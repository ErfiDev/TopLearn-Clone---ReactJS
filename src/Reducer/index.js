import {combineReducers} from 'redux';
import toggleToastReducer from './toggleToastReducer';
import courseMakerReducer from './courseMakerReducer';

const Reducers = combineReducers({
    toggleToast: toggleToastReducer,
    course: courseMakerReducer
});

export default Reducers;