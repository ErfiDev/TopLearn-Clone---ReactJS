import React from 'react';

import CourseHeader from './Course-Header';
import CourseList from './Course-List';
import PapularCourse from './papularCourse';
import './Compiled/Course.css';

class Course extends React.Component
{
    render()
    {
        return(
            <div className="course-container">
                <CourseHeader />
                <CourseList />
                <PapularCourse />
            </div>
        );
    }
};

export default Course;