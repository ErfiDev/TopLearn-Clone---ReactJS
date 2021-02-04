import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

class FooterMain extends React.Component
{
    render()
    {
        return(
            <div className="footer-main">
                <div className="left-main-footer">
                    <div className="social-telegram">
                        <TelegramIcon />
                    </div>
                    <div className="social-instagram">
                        <InstagramIcon color='inherit' />
                    </div>
                </div>

                <div className="right-main-footer">
                    <ul>
                        <li>لرن بای</li>
                        <li>موتور جستجو</li>
                        <li>گت ورک و کسب درآمد</li>
                        <li>سفارش پروژه</li>
                        <li>قالب رایگان</li>
                        <li>آموزش گاه برنامه نویسان</li>
                        <li className="f">مرجع تخصصی برنامه نویسان</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FooterMain;