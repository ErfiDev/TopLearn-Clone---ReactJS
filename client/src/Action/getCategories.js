import {getCatagory} from '../Services/courseServices';
const init = 'INIT_CATEGORIES';

function getCategories() {
    return async dispatch => {
        let {data} = await getCatagory(null , null);
        if(data.data){
            await dispatch({type: init, payload: data.data})
        }
    }
}

export default getCategories;