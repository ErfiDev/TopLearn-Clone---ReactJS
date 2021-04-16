const courseMakerReducer = (state = [] , action)=>{
    switch(action.type)
    {
        case "INIT": 
            return action.payload;

        case 'CLEAR_COURSES':
            return state = [];
            
        default: return state;
    }
}

export default courseMakerReducer;