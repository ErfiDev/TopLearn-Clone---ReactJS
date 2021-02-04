import React,{useContext} from 'react';
import DivCourseList from './divCourseList';
import ContextApi from '../../Context/Context';

const PapularCourse = ()=> {
    const Context = useContext(ContextApi);
    const {CourseList} = Context;
    const Creative = ()=>{
        let element = [];
        for(let i = 0; i <= 7 ; i++)
        {
            let x = CourseList();
            let {imgSrc , title} = x;
            element.push({i: <DivCourseList imgSrc={imgSrc} courseTitle={title} />});
        }
        return element;
    };
    let x = Creative();

    return (  
        <div className="papular-course-container">
            <div className="papular-title">
                <h5>
                    دوره ها محبوب تاپلرن
                </h5>
            </div>
            <div className="papular-course">
                {x.map(item => item.i)}
            </div>
        </div>
    );
}
 
export default PapularCourse;