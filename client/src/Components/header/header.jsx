import React from 'react';
import {Route , Switch , withRouter} from 'react-router-dom';
import HeaderFirst from './header-first';
import LayoutCenterLast from './Layout-Center-Last';
import About from '../../Common/about';
import 'react-toastify/dist/ReactToastify.css';
import './Compiled/header.css';
import {useSelector} from 'react-redux';

const Header = (props)=>{

    const Selector = useSelector(state => state.toggleToast);

    let {location} = props;
    let {pathname} = location;

    return(
        <div className="header-container">
            <img className="img-background" src="./img/header.jpg" alt="header"/>
            <HeaderFirst />

            {pathname === "/about" || pathname === "/" ? <LayoutCenterLast /> : ""}
            
            <Switch>
                <Route path="/about" component={About} />
            </Switch>
        </div>
    );
}


export default withRouter(Header);