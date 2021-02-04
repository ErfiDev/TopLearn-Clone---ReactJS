import React,{useContext} from 'react';
import DivCourseList from './divCourseList';
import ContextApi from '../../Context/Context';

const CourseList = () => {
    const Context = useContext(ContextApi);
    const {CourseList} = Context;
    const Creative = ()=>{
        let element = [];
        for(let i = 0; i <= 11 ; i++)
        {
            let x = CourseList();
            let {imgSrc , title} = x;
            element.push({i: <DivCourseList imgSrc={imgSrc} courseTitle={title} />});
        }
        return element;
    };
    let x = Creative();

    return (  
        <div className="course-list">
            
            {x.map(item => item.i)}

        </div>
    );
}
 
export default CourseList;
