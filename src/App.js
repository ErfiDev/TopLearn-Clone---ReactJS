import React,{useState , Fragment} from 'react';

//IMPORT COMPONENTS
import All from './Components/All';
import Backdrop from './Components/BackDrop/backdrop';

const App = ()=>{
    const [getBackdropToggle , setBackdropToggle] = useState(true);
    setTimeout(()=>{
        setBackdropToggle(false);
    } , 2000);

    return(
        <Fragment>
            {getBackdropToggle ? (<Backdrop />) : (<All />)}
        </Fragment>
    );
};


export default App;