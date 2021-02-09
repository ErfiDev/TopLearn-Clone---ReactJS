import {toast} from 'react-toastify';

const toggleToastAction = (e)=>{
    return async (dispatch , getState)=>{
        let Target = e.target.innerHTML;
        let Set = true;
        if(Target === "Excellent")
        {
            toast.success("Thank For Your Response" , {
                position: "bottom-left",
                closeButton: true
            });
        }
        if(Target === "No idea")
        {
            toast.dark("Not a Problem" , {
                position: "bottom-left",
                closeButton: true
            });
        }
        if(Target === "Too bad")
        {
            toast.error("Thank You For This Critique" , {
                position: "bottom-left",
                closeButton: true
            });
        }
        await dispatch({type: "TOGGLETOAST" , payload: Set});
    }
}

export default toggleToastAction;