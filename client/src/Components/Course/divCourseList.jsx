import React from 'react';
import CommentIcon from '@material-ui/icons/ModeComment';
import PersonIcon from '@material-ui/icons/Person';
import Timer from '@material-ui/icons/Timer';

const DivCourseList = ({imgSrc,title,teacher,price,courseTime,key,className}) => {
    return (  
        <div className={className} key={key}>
                <div className="course-img-container">
                    <img src={imgSrc} alt="course" />
                </div>

                <div className="course-title-info">
                    <h6>
                        {title}
                    </h6>

                    <div className="details">
                        <p className="comments">
                            0
                            &nbsp;
                            <CommentIcon fontSize={'small'} />
                        </p>

                        <p className="teacher-info">
                            {teacher}
                            <PersonIcon fontSize={'small'} />
                        </p>
                    </div>
                </div>

                <div className="course-hr"></div>

                <div className="course-time-container">
                    <p className="course-price">
                        {price}
                        تومان
                    </p>

                    <p classaName="course-time" >
                        <Timer fontSize={'small'} />
                        {courseTime}
                    </p>
                </div>
            </div>
    );
}
 
export default DivCourseList;