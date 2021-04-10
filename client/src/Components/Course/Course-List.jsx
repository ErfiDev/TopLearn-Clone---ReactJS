import React from 'react';
import DivCourseList from './divCourseList';
import {useSelector} from 'react-redux';

const CourseList = () => {

    const Selector = useSelector(state => state.course);

    return (  
        <div className="course-list">
            
            {Selector.map(item => (
                <DivCourseList 
                    imgSrc={item.imgSrc}
                    courseTitle={item.title}
                />
            ))}

        </div>
    );
}
 
export default CourseList;
