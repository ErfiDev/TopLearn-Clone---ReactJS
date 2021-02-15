import React from 'react';
import {withRouter , Link} from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Checkbox from '@material-ui/core/Checkbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Helmet from 'react-helmet';
import {useDispatch , useSelector} from 'react-redux';
import {emailLogin , passLogin , LoginSend} from '../../Action/LoginAction';

import "./login.css";

const Login = ({history})=>{

    const email = useSelector(state => state.emailLogin);
    const pass = useSelector(state => state.passLogin);
    const Selector = useSelector(state => state.Login);
    const dis = useDispatch();
    if(Selector === "Loged in")
    {
        history.replace("/");
    }

    return(
        <div className="login-div">

            <Helmet>
                <title>Toplearn / Login</title>
            </Helmet>

            <h2 className="login-title">ورود به سایت</h2>
            <form onSubmit={e => dis(LoginSend(e))}>

                <div id="user-div" className="input-div">
                    <input 
                        type="email" 
                        id="username-input" 
                        autoFocus 
                        autoComplete="off" 
                        placeholder="ایمیل" 
                        value={email}
                        onChange={(e)=> dis(emailLogin(e))}
                    />
                    <span className="span-icon">
                        <EmailIcon fontSize='small' color="inherit" />
                    </span>
                </div>

                <div id="pass-div" className="input-div">
                    <input 
                        type="password" 
                        id="pass-input"
                        placeholder="رمز عبور" 
                        value={pass}
                        onChange={e => dis(passLogin(e))}
                        minLength="8"
                    />
                    <span className="span-icon">
                        <LockIcon fontSize='small' color="inherit" />
                    </span>
                </div>
                
                <div id="reminde-me-div">
                    من را به خاطر بسپار 
                    <Checkbox
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>

                <div id="dv">
                    <div className="pass-not">
                        !رمز عبور خود را فراموش کرده ام
                        <span><LockIcon fontSize="small" color="inherit" /></span>
                    </div>

                    <div className="pass-not">
                        <Link to="/register">
                            عضویت در سایت   
                        </Link>
                        <span><PersonAddIcon fontSize="small" color="inherit" /></span>
                    </div>
                </div>

                <div id="submit-div-btn">
                    <button id="submit-btn" type="submit">
                        ورود به سایت
                    </button>
                </div>
            </form>
        </div>
    );
};

export default withRouter(Login);