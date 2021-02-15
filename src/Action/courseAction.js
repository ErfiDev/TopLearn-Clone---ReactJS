const courseAction = ()=>{
    return async dispatch =>{
        let All = [];
        for(var i = 0; i <= 11 ; i++)
        {
            let option = [
                {title: "آموزش طراحی سایت با جنگو" , imgSrc: "course1.jpg"},
                {title: "آموزش سی شارپ پیشرفته" , imgSrc: "course2.png"},
                {title: "آموزش جامع لینوکس" , imgSrc: "course3.png"},
                {title: "آموزش پایتون" , imgSrc: "course4.png"}
            ];
            let Random = Math.floor(Math.random() *option.length);
            All.push(option[Random]);
        }
        await dispatch({type: "INIT" , payload: All});
    }
}

export default courseAction;