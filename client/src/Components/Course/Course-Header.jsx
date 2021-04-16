import React from 'react';
import {Link} from 'react-router-dom';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';

const CourseHeader = () => {
    return (  
        <div className="course-title-container">
            <Link to="/filterCourse">
                <ArrowLeft style={{color: "rgb(0, 110, 255)"}}/>
                مشاهده همه دوره ها
            </Link>

            <h5>
                آخرین دوره ها
            </h5>
        </div>
    );
}
 
export default CourseHeader;