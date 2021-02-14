import React from 'react';
import DivCourseList from './divCourseList';
import {useSelector} from 'react-redux';

const CourseList = () => {

    const Selector = useSelector(state => state.course);

    return (  
        <div className="course-list">
            
            {Selector.map(item => (
                <DivCourseList 
                    key={item._key}
                    Price={item.price}
                    imgSrc={item.imageUrl}
                    courseTitle={item.title}
                />
            ))}

        </div>
    );
}
 
export default CourseList;
