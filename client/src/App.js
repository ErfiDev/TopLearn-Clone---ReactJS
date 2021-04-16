import React,{useState , Fragment} from 'react';
import All from './Components/All';
import Backdrop from './Components/BackDrop/backdrop';
import './styles/Compiled/index.css';

const App = ()=>{
    const [getBackdropToggle , setBackdropToggle] = useState(true);
    setTimeout(()=>{
        setBackdropToggle(false);
    } , 3000);

    return(
        <Fragment>
            {getBackdropToggle ? (<Backdrop />) : (<All />)}
        </Fragment>
    );
};


export default App;