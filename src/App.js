import React,{useState , Fragment} from 'react';

//IMPORT COMPONENTS
import All from './Components/All';
import Backdrop from './Components/BackDrop/backdrop';

//CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ()=>{
    const [getBackdropToggle , setBackdropToggle] = useState(true);
    setTimeout(()=>{
        setBackdropToggle(false);
    } , 1800);

    return(
        <Fragment>
            {getBackdropToggle ? (<Backdrop />) : (<All />)}
        </Fragment>
    );
};


export default App;