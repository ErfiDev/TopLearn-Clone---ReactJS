import httpService from './httpService';
import {registerUser,loginUser,logoutUser} from './config.json';

export const userRegister = (user)=>{
    return httpService.post(
        registerUser,
        JSON.stringify(user)
    );
};

export const userLogin = (user)=>{
    return httpService.post(
        loginUser ,
        JSON.stringify(user)
    );
};

export const userLogout = (user)=>{
    return httpService.post(
        logoutUser ,
        JSON.stringify(user)
    );
};

