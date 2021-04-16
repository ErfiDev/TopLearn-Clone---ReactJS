function filterCourses(state = [] , action)
{
    switch(action.type)
    {
        case 'INIT_FILTER_COURSES':
            return action.payload;

        case 'RESET_FILTER_COURSES':
            return state = [];

        default: return state;
    }
}

export default filterCourses;