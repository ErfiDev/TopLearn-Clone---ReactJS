import {combineReducers} from 'redux';
import toggleToastReducer from './toggleToastReducer';
import courseMakerReducer from './courseMakerReducer';
import {passLogin , emailLogin} from './login';
import {Register,emailRegis,familyRegis,fullnameRegis,nameRegis,pass1Regis,pass2Regis} from './register';
import User from './user';

const Reducers = combineReducers({
    toggleToast: toggleToastReducer,
    course: courseMakerReducer,
    emailLogin,
    passLogin,
    Register,
    emailRegis,
    familyRegis,
    fullnameRegis,
    nameRegis,
    pass1Regis,
    pass2Regis,
    User
});

export default Reducers;