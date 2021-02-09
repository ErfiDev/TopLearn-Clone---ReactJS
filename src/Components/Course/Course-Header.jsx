import React from 'react';
import {Link} from '@material-ui/core';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftOutlined';

const CourseHeader = () => {
    return (  
        <div className="course-title-container">
            <Link>
                <ArrowLeft style={{color: "rgb(0, 110, 255)"}}/>
                مشاهده همه دوره ها
            </Link>

            <h5>
                آخرین دوره های تاپ لرن
            </h5>
        </div>
    );
}
 
export default CourseHeader;