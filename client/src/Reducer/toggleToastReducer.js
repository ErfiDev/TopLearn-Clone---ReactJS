const toggleToastReducer = (state = false , action)=>{
    switch(action.type)
    {
        case "TOGGLETOAST":
            return action.payload;

        default: return state;
    }
}

export default toggleToastReducer;