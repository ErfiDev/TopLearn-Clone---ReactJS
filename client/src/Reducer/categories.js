function Categories(state = [] , action) {
    switch(action.type) {
        case 'INIT_CATEGORIES':
            return action.payload;
        
        case 'RESET_CATEGORIES':
            return state = [];

        default: return state;
    }
}   

export default Categories;