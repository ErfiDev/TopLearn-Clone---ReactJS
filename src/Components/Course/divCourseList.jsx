import React from 'react';
import CommentIcon from '@material-ui/icons/ModeComment';
import PersonIcon from '@material-ui/icons/Person';
import Timer from '@material-ui/icons/Timer';

const DivCourseList = ({imgSrc , courseTitle}) => {
    return (  
        <div className="course-div">
                <div className="course-img-container">
                    <img src={`./img/${imgSrc}`} alt="course" />
                </div>

                <div className="course-title-info">
                    <h6>
                        {courseTitle}
                    </h6>

                    <div className="details">
                        <p className="comments">
                            25
                            &nbsp;
                            <CommentIcon fontSize={'small'} />
                        </p>

                        <p className="teacher-info">
                            عرفان
                            <PersonIcon fontSize={'small'} />
                        </p>
                    </div>
                </div>

                <div className="course-hr"></div>

                <div className="course-time-container">
                    <p className="course-price">
                        150,000
                        تومان
                    </p>

                    <p classaName="course-time" >
                        <Timer fontSize={'small'} />
                        12:20:00
                    </p>
                </div>
            </div>
    );
}
 
export default DivCourseList;