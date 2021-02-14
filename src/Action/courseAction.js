import courseService from '../Services/courseService';

const courseAction = ()=>{
    return async dispatch =>{
        const {data} = await courseService();
        const {courses} = await data;
        const CopyIndex1 = courses[4];
        const CopyIndex2 = courses[3];
        const CopyIndex3 = courses[2];
        const CopyIndex4 = courses[1];
        const CopyIndex5 = courses[6];
        courses.push(CopyIndex1,CopyIndex2,CopyIndex3,CopyIndex4,CopyIndex5);
        await dispatch({type: "INIT" , payload: courses});
    }
}

export default courseAction;