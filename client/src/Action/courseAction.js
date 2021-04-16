import {getCourse} from '../Services/courseServices';

const courseAction = ()=>{
    return async dispatch =>{
        let {data} = await getCourse(8 , 0);
        await dispatch({type: 'INIT' , payload: data.data});
    }
}

export default courseAction;