import React from 'react';
import {Route , Switch , withRouter} from 'react-router-dom';
import ContextApi from '../../Context/Context';
import HeaderFirst from './header-first';
import LayoutCenterLast from './Layout-Center-Last';
import About from '../../Common/about';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Compiled/header.css';

class Header extends React.Component 
{
    static contextType = ContextApi;

    render()
    {
        let Api = this.context;
        let {location} = this.props;
        let {pathname} = location;

        return(
            <div className="header-container" onLoad={this.load}>
                <img className="img-background" src="./img/header.jpg" alt="header"/>
                <HeaderFirst />

                {pathname === "/about" || pathname === "/" ? <LayoutCenterLast /> : ""}
                
                <Switch>
                    <Route path="/about" component={About} />
                </Switch>

                {Api.ToggleToast ? <ToastContainer /> : ""}
            </div>
        );
    }
};

export default withRouter(Header);