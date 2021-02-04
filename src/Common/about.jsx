import React,{useContext} from 'react';
import {Link} from 'react-router-dom';

import ContextApi from '../Context/Context';

import './about.css';

const About = (props)=>{

    const Context = useContext(ContextApi);

    return(
        <div className="about-container">
            <p className="about-title">
                درباره این سایت
            </p>

            <hr className="about-hr" />

            <p className="about-paragraf">
                این اپلیکیشن ری اکت صرفا جهت تمرین ساخته شده است
                لطفا نظرتون رو از طریق این نظرسنجی بهم بگین
            </p>

            <div className="about-btn-container">
                <Link to="/">
                    <button className="good-vote" onClick={Context.ToastifyFunction}>
                            Excellent
                    </button> 
                </Link>

                <Link to="/">
                    <button className="not-vote" onClick={Context.ToastifyFunction}>
                        No idea
                    </button>
                </Link>

                <Link to="/">
                    <button className="bad-vote" onClick={Context.ToastifyFunction}>
                        Too bad
                    </button>
                 </Link>
            </div>
        </div>
    );
};

export default About;