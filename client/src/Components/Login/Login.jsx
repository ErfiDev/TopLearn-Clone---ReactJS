import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import Checkbox from '@material-ui/core/Checkbox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Helmet from 'react-helmet';
import {userLogin} from '../../Services/userService';
import Decoder from '../../utils/decoder.js';
import {createUser} from '../../Action/userAction';
import {useDispatch} from 'react-redux';

import "./login.css";
import { toast } from 'react-toastify';

const Login = ()=>{
    const dis = useDispatch();
    const [data , setData] = useState({
        email: '',
        pass: ''
    });

    async function handleSubmit(e)
    {
        e.preventDefault();
        try{
            let user = {
                email: data.email,
                password: data.pass
            };

            let {data: response} = await userLogin(user);
            let {status , msg , token} = response;
            //Checking errors
            if(msg){
                return toast.error(msg , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
            //Success
            if(status === 200){
                let {payload} = Decoder(token);
                let {data} = payload;
                localStorage.setItem('token' , token);
                dis(createUser(data));

                return toast.success(`welcome back ${data.fullname}`,{
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
        }
        catch(err){console.log(err)}
    }

    return(
        <div className="login-div">
            <Helmet>
                <title>Toplearn / Login</title>
            </Helmet>

            <h2 className="login-title">ورود به سایت</h2>
            <form onSubmit={e => handleSubmit(e)}>

                <div id="user-div" className="input-div">
                    <input 
                        type="email" 
                        id="username-input" 
                        autoFocus 
                        autoComplete="off" 
                        placeholder="ایمیل" 
                        value={data.email}
                        onChange={(e)=> setData({...data, email: e.target.value})}
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
                        value={data.pass}
                        onChange={(e)=> setData({...data, pass: e.target.value})}
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

export default Login;