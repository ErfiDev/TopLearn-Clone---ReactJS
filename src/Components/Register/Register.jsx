import React,{useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import {toast , ToastContainer} from 'react-toastify';
import {userRegister} from '../../Services/userService';
import {withRouter} from 'react-router-dom';
import Helmet from 'react-helmet';

import "./register.css";

const Register = ({history})=>{

    const [name , setName] = useState("");
    const [family , setFamily] = useState("");
    const [fullname , setFullname] = useState("");
    const [password , setPassword] = useState("");
    const [password2 , setPassword2] = useState("");
    const [email , setEmail] = useState("");

    const submitForm = async (e)=>{
        e.preventDefault();
        if(password === password2)
        {
            const User = {
                fullname,
                password,
                email
            };
            try{
                const {status} = await userRegister(User);
                if(status === 201)
                {
                    toast.success("User Created please login" , {
                        position: "bottom-left",
                        closeButton: true
                    });
                    resetForm();
                    history.push("/login");
                }
            }catch(error){
                console.log(error);
                toast.error("Validation is failed." , {
                    position: "bottom-left",
                    closeButton: true
                });
            }
        }
        else{
            toast.error("password is not match" , {
                position: "bottom-left",
                closeButton: true
            });
        }
    };

    function resetForm()
    {
        setName("");
        setFamily("");
        setFullname("");
        setEmail("");
        setPassword("");
        setPassword2("");
    }

    return(
        <div className="register-div" style={{fontFamily: "Poppins"}} >
            <Helmet>
                <title>Toplearn / Register</title>
            </Helmet>

            <form onSubmit={submitForm}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationDefault01">First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="First name" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="validationDefault02">Last name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault02" 
                            placeholder="Last name" 
                            value={family}
                            onChange={e => setFamily(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label for="validationDefaultUsername">Email</label>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend2">
                                    <EmailIcon fontSize="small" />    
                                </span>
                            </div>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="validationDefaultUsername" 
                                placeholder="Username" 
                                aria-describedby="inputGroupPrepend2" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required 
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="w-100" style={{marginBottom: "15px"}}>
                        <label for="validationDefault01">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="Full name" 
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                            required 
                            minLength="5"
                        />
                    </div>
                </div>

                <div className="form-row" style={{marginBottom: "15px"}}>
                    <div className="col-md mb-2" >
                        <label for="validationDefault01">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="Password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required 
                            minLength="8"
                        />
                    </div>
                    <div className="col-md mb-2" style={{marginBottom: "15px"}}>
                        <label for="validationDefault01">Password Again</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="Password again" 
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            required 
                            minLength="8"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default withRouter(Register);