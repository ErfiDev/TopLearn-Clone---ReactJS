import React from 'react';
import decoder from '../utils/decoder';
import {connect} from 'react-redux';
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
import {createUser, deleteUser} from '../Action/userAction';
import {toast} from 'react-toastify';


class All extends React.PureComponent
{

    componentDidMount()
    {
        const Token = localStorage.getItem("token");
        const {dispatch} = this.props;
        if(Token)
        {
            const Decode = decoder(Token);
            const DateNow = Date.now() / 1000;
            if(Decode.payload.exp < DateNow)
            {
                localStorage.removeItem("token");
                dispatch(deleteUser());
            }
            else{
                dispatch(createUser(Decode.payload.user));
                setTimeout(()=> {
                    toast.success(`welcome back ${this.props.State.User.fullname}` , {
                        position: "top-center",
                        closeOnClick: true
                    });
                } , 3000);
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
                        <Route path="/" exact component={Course} />
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