const userReducer = (state = {} , action)=>{
    switch(action.type)
    {
        case "CREATE_USER": 
            return action.payload;

        case "DELETE_USER": 
            return action.payload;
    
        default: return state;
    }
}

export default userReducer;