import React,{useState} from 'react';
import ContextApi from './Context/Context';
import {toast} from 'react-toastify';

const Global = (props) => {

    const [getBackdropToggle , setBackdropToggle] = useState(true);
    let [ToggleToast , setToggleToast] = useState(false);

    setTimeout(()=>{
        setBackdropToggle(false);
    } , 1800);

    const ToastifyFunction = (event)=>{
        let target = event.target.innerHTML;
        setToggleToast(true);
        if(target === "Excellent")
        {
            toast.success("Thank For Your Response" , {
                position: "bottom-left",
                closeButton: true
            });
        }
        if(target === "No idea")
        {
            toast.dark("Not a Problem" , {
                position: "bottom-left",
                closeButton: true
            });
        }
        if(target === "Too bad")
        {
            toast.error("Thank You For This Critique" , {
                position: "bottom-left",
                closeButton: true
            });
        }
    };

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

    return (
        <ContextApi.Provider value={{
            ToggleShowBackdrop: getBackdropToggle,
            ToggleToast: ToggleToast,
            ToastifyFunction: ToastifyFunction,
            CourseList: CourseListFunction
        }}>
            {props.children}
        </ContextApi.Provider>
    );
}
 
export default Global;