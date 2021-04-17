import React from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import MenuIcon from '@material-ui/icons/Menu';

class HeaderFirst extends React.Component
{

    render() 
    {
        return(
            <div className="header-first">
                <div className="left-menu">
                    <div className="user-img-container">
                    </div>
                    <Menu />
                </div>

                <div className="right-menu">
                    <div className="header-li-container">
                        <ul id="ul-header">
                            <li>
                                <Link>
                                درباره ما
                                </Link>
                            </li>

                            <li>
                                <Link>
                                تماس باما 
                                </Link>
                            </li>

                            <li>
                                <Link>
                                همکاری با تاپ لرن
                                </Link>
                            </li>

                            <li>
                                <Link>
                                درخواست مشاوره
                                </Link>
                            </li>

                            <li>
                                <Link>
                                پرسش و پاسخ
                                </Link>
                            </li>

                            <li>
                                <Link>
                                بلاگ
                                </Link>
                            </li>

                            <li>
                                <Link>
                                معرفی مدرسین
                                </Link>
                            </li>

                            <li>
                                <Link>
                                آخرین دوره ها
                                </Link>
                            </li>  
                        </ul>
                    
                        <span className="display-off" id="menu-span">
                            <MenuIcon fontSize="large" />
                        </span>

                        <hr className="display-off" id="hr-menu"/>
                    </div>

                    <div className="logo-container">
                        <Link to="/">
                            <img src="./img/logo.svg" alt="logo"/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderFirst;