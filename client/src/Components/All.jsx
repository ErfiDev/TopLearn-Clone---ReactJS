import React from 'react';
import decoder from '../utils/decoder';
import {connect} from 'react-redux';
import {Route , Switch} from 'react-router-dom';
import Header from './header/header';
import Nav from './NavBar/nav';
import Ads from './Ads/ads';
import HomeCourse from './Course/home.layout';
import FilterCourse from './Course/filter.layout';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Register from './Register/Register';
import Dashboard from './dashboard';
import {ToastContainer} from 'react-toastify';
import Helmet from 'react-helmet';
import {createUser} from '../Action/userAction';

import 'react-toastify/dist/ReactToastify.css';

class All extends React.PureComponent
{
    componentDidMount()
    {
        let {dispatch} = this.props;
        const Token = localStorage.getItem("token");
        if(Token)
        {
            let {data , exp} = decoder(Token).payload;
            let currentTime = Date.now();
            if(currentTime < exp){
                return dispatch(createUser(data));
            }else{
                localStorage.removeItem('token');
            }
        }
    }

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
                        <Route path="/filterCourse" component={FilterCourse} /> 
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/" exact component={HomeCourse} />
                    </Switch>
                </div>
                <Footer /> 
                <ToastContainer />
            </div>
        );
    }
};

const mapStateToProp = State =>
{
    return {State}
}

export default connect(mapStateToProp)(All);