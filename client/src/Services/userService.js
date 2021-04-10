import httpService from './httpService';
import config from './config.json';

export const userRegister = (user)=>{
    return httpService.post(`
        ${config.toplearnapi}/api/register`,
        JSON.stringify(user)
    );
};

export const userLogin = (user)=>{
    return httpService.post(
        `${config.toplearnapi}/api/login` ,
        JSON.stringify(user)
    );
};