import React,{useState} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import Helmet from 'react-helmet';
import {userRegister} from '../../Services/userService';
import { toast } from 'react-toastify';

const Register = ()=>{

    const [data , setData] = useState({
        name: '',
        email: '',
        fullname: '',
        pass1: '',
        pass2: ''
    });

    async function handleSubmit(e){
        e.preventDefault();
        try{
            let user = {
                fullname: data.fullname,
                password: data.pass1,
                password2: data.pass2,
                email: data.email
            };

            let {data: response} = await userRegister(user);
            let {status , msg} = response;
            if(msg){
                msg.map(item => {
                    return toast.error(item , {
                        position: 'bottom-left',
                        closeOnClick: true
                    })
                });
            }
            if(status === 201){
                clearInputs();
                return toast.success('user created! please login' , {
                    position: 'bottom-left',
                    closeOnClick: true
                })
            }
        }catch(err){console.log(err)}
    }

    function clearInputs()
    {
        setData({
            name: '',
            fullname: '',
            email: '',
            pass1: '',
            pass2: ''
        })
    }

    return(
        <div className="register-div" style={{fontFamily: "Poppins"}} >
            <Helmet>
                <title>Toplearn / Register</title>
            </Helmet>

            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-row">
                    <div className="col-sm">
                        <label for="validationDefault01">First name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="First name"
                            onChange={e => setData({...data , name: e.target.value})} 
                            value={data.name}
                            required 
                        />
                    </div>

                    <div className="col-sm">
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
                                value={data.email}
                                onChange={e => setData({...data , email: e.target.value})} 
                                required 
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="w-100" style={{marginBottom: "15px",marginTop: "15px"}}>
                        <label for="validationDefault01">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="validationDefault01" 
                            placeholder="Full name" 
                            value={data.fullname}
                            onChange={e => setData({...data , fullname: e.target.value})} 
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
                            value={data.pass1}
                            onChange={e => setData({...data , pass1: e.target.value})} 
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
                            value={data.pass2}
                            onChange={e => setData({...data , pass2: e.target.value})} 
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
        </div>
    );
};

export default Register;