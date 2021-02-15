import React from 'react';
import DivCourseList from './divCourseList';
import {useSelector} from 'react-redux';

const PapularCourse = ()=> {
    
    let Selector = useSelector(state => state.course);
    return (  
        <div className="papular-course-container">
            <div className="papular-title">
                <h5>
                    دوره ها محبوب تاپلرن
                </h5>
            </div>
            <div className="papular-course">
                {Selector.map(item  => (
                    <DivCourseList 
                        imgSrc={item.imgSrc}
                        courseTitle={item.title}
                    />
                ))}
            </div>
        </div>
    );
}
 
export default PapularCourse;