export const nameRegis = (state = "" , action)=>{
    switch(action.type)
    {
        case "NAME_REGIS":
            return action.payload;

        case "RES_NAME_REGIS":
            return state = "";

        default: return state;
    }
}

export const familyRegis = (state = "" , action)=>{
    switch(action.type)
    {
        case "FAMILY_REGIS":
            return action.payload;

        case "RES_FAMILY_REGIS":
            return state = "";

        default: return state;
    }
}

export const fullnameRegis = (state = "" , action)=>{
    switch(action.type)
    {
        case "FULLNAME_REGIS":
            return action.payload;

        case "RES_FULLNAME_REGIS":
            return state = "";

        default: return state;
    }
}

export const pass1Regis = (state = "" , action)=>{
    switch(action.type)
    {
        case "PASS1_REGIS":
            return action.payload;

        case "RES_PASS1_REGIS":
            return state = "";

        default: return state;
    }
}

export const pass2Regis = (state = "" , action)=>{
    switch(action.type)
    {
        case "PASS2_REGIS":
            return action.payload;

        case "RES_PASS2_REGIS":
            return state = "";

        default: return state;
    }
}

export const emailRegis = (state = "" , action)=>{
    switch(action.type)
    {
        case "EMAIL_REGIS":
            return action.payload;

        case "RES_EMAIL_REGIS":
            return state = "";

        default: return state;
    }
}


export const Register = (state = "" , action)=>{
    switch(action.type)
    {
        case "INIT_REGIS":
            return action.payload;

        default: return state;
    }
} 