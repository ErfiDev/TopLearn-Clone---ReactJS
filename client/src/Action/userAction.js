import {toast} from 'react-toastify';
let login = 'CREATE_USER';
let logout = 'DELETE_USER';

export const createUser = user=>{
    return async dispatch =>{
        await dispatch({type: login , payload: user});
    }
}

export const deleteUser = ()=>{
    return async dispatch =>{
        toast.dark("Logout Successful!" , {
            position: "bottom-left",
            closeOnClick: true
        });
        localStorage.removeItem("token");
        await dispatch({type: logout});
    }
}