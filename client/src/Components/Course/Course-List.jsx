import React from 'react';
import DivCourseList from './divCourseList';
import {useSelector} from 'react-redux';

const CourseList = () => {

    const Selector = useSelector(state => state.courses);

    return (  
        <div className="course-list">
            
            {Selector.map(item=>{
                return <DivCourseList 
                    imgSrc={item.imgSrc}
                    title={item.title}
                    key={item.uuid}
                    courseTime={item.courseTime}
                    teacher={item.teacher}
                    price={item.price}
                />
            })}

        </div>
    );
}
 
export default CourseList;
