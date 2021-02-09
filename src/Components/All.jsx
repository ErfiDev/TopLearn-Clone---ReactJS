import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Header from './header/header';
import Nav from './NavBar/nav';
import Ads from './Ads/ads';
import Course from './Course/Course';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import {ToastContainer} from 'react-toastify';
import Helmet from 'react-helmet';


class All extends React.Component
{

    render = ()=>
    {        
        return(
            <div className="all" style={{animation: "renderALL 1.5s ease-in"}}>
                <Helmet>
                    <title>Toplearn Clone</title>
                </Helmet>
                <Header />
                <Nav />
                <Ads />
                <div className="route-div">
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} /> 
                        <Route path="/" exact component={Course} />
                    </Switch>
                </div>
                <Footer /> 

                <ToastContainer />
            </div>
        );
    }
};

export default All;