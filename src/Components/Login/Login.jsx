import React,{useState} from 'react';
import {withRouter , Link} from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Checkbox from '@material-ui/core/Checkbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {userLogin} from '../../Services/userService';
import {toast} from 'react-toastify';
import Helmet from 'react-helmet';

import "./login.css";

const Login = ({history})=>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const submitForm = async (e)=>{
        e.preventDefault();
        const User = {
            email,
            password
        };
        
        try{
            const {status , data} = await userLogin(User);
            if(status === 200)
            {
                toast.success("welcome back." , {
                    position: "bottom-left" ,
                    closeButton: true
                });
                localStorage.setItem("token" , data.token);
                history.replace("/");
                reset();
            }
            
        }catch(error){
            toast.error("not found please try again" , {
                position: "bottom-left",
                closeButton: true
            });
        }
    };

    const reset = ()=>{
        setEmail("");
        setPassword("");
    }

    return(
        <div className="login-div">

            <Helmet>
                <title>Toplearn / Login</title>
            </Helmet>

            <h2 className="login-title">ورود به سایت</h2>
            <form onSubmit={submitForm}>

                <div id="user-div" className="input-div">
                    <input 
                        type="email" 
                        id="username-input" 
                        autoFocus 
                        autoComplete="off" 
                        placeholder="ایمیل" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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