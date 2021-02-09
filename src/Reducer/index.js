import {combineReducers} from 'redux';
import toggleToastReducer from './toggleToastReducer';

const Reducers = combineReducers({
    toggleToast: toggleToastReducer
});

export default Reducers;