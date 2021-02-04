import React from 'react';

const Context = React.createContext({
    ToggleShowBackdrop: true,
    RenderOpacity: "",
    ToggleToast: false,
    ToastifyFunction: ()=>{},
    CourseList: ()=>{}
});

export default Context;