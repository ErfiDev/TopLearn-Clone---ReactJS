export const Login = (state = "" , action)=>{
    switch(action.type)
    {
        case "INIT_LOGIN":
            return action.payload;
        
        default: return state;
    }
}


export const emailLogin = (state = "" , action)=>{
    switch(action.type)
    {
        case "EMAIL_LOGIN":
            return action.payload;

        case "RES_EMAIL_LOGIN":
            return state = "";

        default: return state;
    }
}


export const passLogin = (state = "" , action)=>{
    switch(action.type)
    {
        case "PASS_LOGIN":
            return action.payload;

        case "RES_PASS_LOGIN":
            return state = "";

        default: return state;
    }
}