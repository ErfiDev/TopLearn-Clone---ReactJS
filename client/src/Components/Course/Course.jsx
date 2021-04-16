import React from 'react';

import CourseHeader from './Course-Header';
import CourseList from './Course-List';

class Course extends React.Component
{
    render()
    {
        return(
            <div className="course-container">
                <CourseHeader />
                <CourseList />
            </div>
        );
    }
};

export default Course;