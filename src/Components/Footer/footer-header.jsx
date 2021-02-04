import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';

class FooterHeader extends React.Component
{
    render()
    {
        return(
            <div className="footer-header">
                <div className="enmad-div">
                    <div>
                        <img src="./img/emad2.png" alt="emad" />
                    </div>
                    <div>
                        <img src="./img/emad1.png" alt="emad" />
                    </div>
                </div>

                <div className="sendEmail-div">
                    <div>
                        <button>
                            عضویت در خبرنامه
                        </button>

                        <div className="email-div">
                            <input type="text" placeholder="پست الکترونیکی شما" />
                            <span>
                                <EmailIcon color='inherit' fontSize='small' />
                            </span>
                        </div>

                        <div className="number-div">
                            <input type="text" placeholder="شماره موبایل شما" />
                            <span className="phone-span">
                                <PhoneAndroidIcon color='inherit' fontSize='small' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterHeader;