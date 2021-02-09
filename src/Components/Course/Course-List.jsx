import React from 'react';
import DivCourseList from './divCourseList';

const CourseList = () => {

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
        for(let i = 0; i <= 11 ; i++)
        {
            let x = CourseListFunction();
            let {imgSrc , title} = x;
            element.push({i: <DivCourseList imgSrc={imgSrc} courseTitle={title} />});
        }
        return element;
    };
    let x = Creative();

    return (  
        <div className="course-list">
            
            {x.map(item => item.i)}

        </div>
    );
}
 
export default CourseList;
