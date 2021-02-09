import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import toggleToastAction from '../Action/toggleToastAction';

import './about.css';

const About = ()=>{

    const dis = useDispatch();

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
                    <button 
                        className="good-vote" 
                        onClick={e => dis(toggleToastAction(e))}>
                            Excellent
                    </button> 
                </Link>

                <Link to="/">
                    <button 
                        className="not-vote" 
                        onClick={e => dis(toggleToastAction(e))}>
                        No idea
                    </button>
                </Link>

                <Link to="/">
                    <button 
                        className="bad-vote" 
                        onClick={e => dis(toggleToastAction(e))}>
                        Too bad
                    </button>
                 </Link>
            </div>
        </div>
    );
};

export default About;