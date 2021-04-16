import {filterCourse , getWithTitle} from '../Services/courseServices';
const init = 'INIT_FILTER_COURSES';
// const reset = 'RESET_FILTER_COURSES';

function filterAction(category , price , title)
{
    return async dispatch => {
        if(!category && !title && price)
        {
            let {data} = await filterCourse(null , price);
            await dispatch({type: init , payload: data.data});
        }
        if(category && !price && !title)
        {
            let {data} = await filterCourse(category , null);
            if(data.data) return await dispatch({type: init , payload: data.data});
        }
        if(category && price && !title)
        {
            let {data} = await filterCourse(category , price);
            if(data.data) return await dispatch({type: init, payload: data.data});
        }
        if(title && !category && !price)
        {
            let {data} = await getWithTitle(title);
            if(data.data) return await dispatch({type: init , payload: data.data});
        }
    };
}

export default filterAction