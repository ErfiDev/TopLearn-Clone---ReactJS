import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import {ToastContainer} from 'react-toastify';
import Helmet from 'react-helmet';
import {useSelector , useDispatch} from 'react-redux';
import {emailRegis,familyRegis,fullnameRegis,nameRegis,pass1Regis,pass2Regis,RegisterSend} from '../../Action/RegisterAction';

import "./register.css";

const Register = ()=>{

    const name = useSelector(state => state.nameRegis);
    const fullname = useSelector(state => state.fullnameRegis);
    const family = useSelector(state => state.familyRegis);
    const email = useSelector(state => state.emailRegis);
    const pass1 = useSelector(state => state.pass1Regis);
    const pass2 = useSelector(state => state.pass2Regis);

    const dis = useDispatch();

    return(
        <div className="register-div" style={{fontFamily: "Poppins"}} >
            <Helmet>
                <title>Toplearn / Register</title>
            </Helmet>

            <form onSubmit={e => dis(RegisterSend(e))}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationDefault01">First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="First name" 
                            value={name}
                            onChange={e => dis(nameRegis(e))}
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
                            onChange={e => dis(familyRegis(e))}
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
                                onChange={e => dis(emailRegis(e))}
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
                            onChange={e => dis(fullnameRegis(e))}
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
                            value={pass1}
                            onChange={e => dis(pass1Regis(e))}
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
                            value={pass2}
                            onChange={e => dis(pass2Regis(e))}
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

export default Register;