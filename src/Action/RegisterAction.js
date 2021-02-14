import {userRegister} from '../Services/userService';
import {toast} from 'react-toastify';

export const nameRegis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "NAME_REGIS" , payload: value});
    }
}

export const familyRegis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "FAMILY_REGIS" , payload: value});
    }
}

export const fullnameRegis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "FULLNAME_REGIS" , payload: value});
    }
}

export const pass1Regis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "PASS1_REGIS" , payload: value});
    }
}

export const pass2Regis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "PASS2_REGIS" , payload: value});
    }
}

export const emailRegis = (e)=>{
    return async (dispatch)=>{
        let value = e.target.value;
        await dispatch({type: "EMAIL_REGIS" , payload: value});
    }
}


export const RegisterSend = (e)=>{
    return async (dispatch , getState)=>{
        e.preventDefault();
        let fullname = getState().fullnameRegis;
        let email = getState().emailRegis;
        let pass1 = getState().pass1Regis;
        let pass2 = getState().pass2Regis;

        if(pass1 === pass2)
        {
            const User = {
                fullname,
                password: pass1,
                email
            };
            try{
                const {status} = await userRegister(User);
                console.log(status);
                if(status === 201)
                {
                    toast.success("User Created please login" , {
                        position: "bottom-left",
                        closeButton: true
                    });
                    await dispatch({type: "INIT_REGIS" , payload: "please login"});
                }
            }catch(error){
                console.log(error);
                toast.error("This account has already been created please login" , {
                    position: "bottom-left",
                    closeButton: true
                });
                await dispatch({type: "INIT_REGIS" , payload: "please login"});
            }
        }
    }
}