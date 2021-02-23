import {toast} from 'react-toastify';

export const createUser = user=>{
    return async dispatch =>{
        await dispatch({type: "CREATE_USER" , payload: user});
    }
}

export const deleteUser = ()=>{
    return async dispatch =>{
        toast.dark("Logout Successful!" , {
            position: "bottom-left",
            closeOnClick: true
        });
        localStorage.removeItem("token");
        await dispatch({type: "DELETE_USER" , payload: {}});
    }
}