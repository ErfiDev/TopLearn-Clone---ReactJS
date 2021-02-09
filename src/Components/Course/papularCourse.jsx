import React from 'react';
import DivCourseList from './divCourseList';

const PapularCourse = ()=> {

    const CourseListFunction = ()=>{
        const Arr = [
            {imgSrc: "course-img-1.jpg" , title: "آموزش ری اکت ناتیو"},
            {imgSrc: "course-img.jpg" , title: "آموزش جامع فلاتر"}, 
            {imgSrc: "course-img-2.png" , title: "آموزش فریم ورک Vue"},
            {imgSrc: "course-img-3.png" , title: "اموزش ناکست جی اس"}
        ];
        const RandomNum = Math.floor(Math.random() * Arr.length);
        return Arr[RandomNum];
    };

    const Creative = ()=>{
        let element = [];
        for(let i = 0; i <= 7 ; i++)
        {
            let x = CourseListFunction();
            let {imgSrc , title} = x;
            element.push({i: <DivCourseList imgSrc={imgSrc} courseTitle={title} />});
        }
        return element;
    };
    let x = Creative();

    return (  
        <div className="papular-course-container">
            <div className="papular-title">
                <h5>
                    دوره ها محبوب تاپلرن
                </h5>
            </div>
            <div className="papular-course">
                {x.map(item => item.i)}
            </div>
        </div>
    );
}
 
export default PapularCourse;