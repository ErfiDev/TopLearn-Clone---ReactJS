import {userLogin} from '../Services/userService';
import {toast} from 'react-toastify';


export const emailLogin = (e)=>{
    return async dispatch=>{
        let value = e.target.value;
        await dispatch({type: "EMAIL_LOGIN" , payload: value});
    }
}

export const passLogin = (e)=>{
    return async dispatch=>{
        let value = e.target.value;
        await dispatch({type: "PASS_LOGIN" , payload: value});
    }
}

export const LoginSend = (e)=>{
    return async (dispatch , getState)=>{
        e.preventDefault();
        let email = getState().emailLogin;
        let password = getState().passLogin;
        const User = {
            email,
            password
        };
        try{
            const {status , data} = await userLogin(User);
            if(status === 200)
            {
                toast.success("welcome back." , {
                    position: "bottom-left" ,
                    closeButton: true
                });
                localStorage.setItem("token" , data.token);
                await dispatch({type: "RES_PASS_LOGIN"});   
                await dispatch({type: "RES_EMAIL_LOGIN"});
                await dispatch({type: "INIT_LOGIN" , payload: "Loged in"})
            }
        }catch(error){
            toast.error("not found please Sign Up" , {
                position: "bottom-left",
                closeButton: true
            });
            await dispatch({type: "INIT_LOGIN" , payload: "please sign up"});
        }
    }
}