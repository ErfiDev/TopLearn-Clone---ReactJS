import React from 'react';
import {withRouter} from 'react-router-dom';
import HeaderFirst from './header-first';
import LayoutCenterLast from './Layout-Center-Last';

const Header = (props)=>{

    let {location} = props;
    let {pathname} = location;

    return(
        <div className="header-container">
            <img className="img-background" src="./img/header.jpg" alt="header"/>
            <HeaderFirst />
            {pathname === "/" ? <LayoutCenterLast /> : ''}
        </div>
    );
}


export default withRouter(Header);