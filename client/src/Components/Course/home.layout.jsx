import React,{Fragment} from 'react';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import CourseHeader from './Course-Header';
import CourseList from './Course-List';

const HomeCourseLayour = () => {

    const courses = useSelector(state => state.courses);

    return (          
        <Fragment>
            {!isEmpty(courses) ? (
                <div className="course-container">
                    <CourseHeader />
                    <CourseList />
                </div>
            ) : (
                <h2 style={{fontFamily: 'Vazir',direction: 'rtl',color: 'gray'}}>
                    لطفا اینترنت خود را چک کنید...
                </h2>
            )}
        </Fragment>
    );
}
 
export default HomeCourseLayour;