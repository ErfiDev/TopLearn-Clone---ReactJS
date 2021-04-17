import httpService from './httpService';
import {registerUser,loginUser,logoutUser,updateUser} from './config.json';

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

export function updatePassword(id,pass)
{
    return httpService.put(
        `${updateUser}?id=${id}&pass=${pass}`
    );
}