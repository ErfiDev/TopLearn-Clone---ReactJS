export const createUser = user=>{
    return async dispatch =>{
        await dispatch({type: "CREATE_USER" , payload: user});
    }
}

export const deleteUser = ()=>{
    return async dispatch =>{
        window.location.reload();
        localStorage.removeItem("token");
        await dispatch({type: "DELETE_USER" , payload: {}});
    }
}