import React from 'react';
import CommentIcon from '@material-ui/icons/ModeComment';
import PersonIcon from '@material-ui/icons/Person';
import Timer from '@material-ui/icons/Timer';

const DivCourseList = ({imgSrc , courseTitle , Price , key}) => {
    return (  
        <div className="course-div" key={key}>
                <div className="course-img-container">
                    <img src={`https://toplearnapi.ghorbany.dev/${imgSrc}`} alt="course" />
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
                        {Price}
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