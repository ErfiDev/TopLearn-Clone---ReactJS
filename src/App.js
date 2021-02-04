import React,{useContext , Fragment} from 'react';

//IMPORT COMPONENTS
import ContextApi from './Context/Context';
import All from './Components/All';
import Backdrop from './Components/BackDrop/backdrop';

//CSS
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ()=>{
    const Context = useContext(ContextApi);
    let {ToggleShowBackdrop} = Context;

    return(
        <Fragment>
            {ToggleShowBackdrop ? (<Backdrop />) : (<All />)}
        </Fragment>
    );
};


export default App;