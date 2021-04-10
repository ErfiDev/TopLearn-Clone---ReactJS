import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

class HeaderFirst extends React.Component
{
    render()
    {
        return(
            <div className="header-center">
                <div className="h3-container">
                    <h3 className="h3-header-first">
                        خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن
                        <br />
                        با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر
                    </h3>
                </div>

                <div className="search-box-container">
                    <div className="search-box">
                        <div className="icon-container">
                            <Link>
                                <SearchIcon fontSize="large" color="inherit" />
                            </Link>
                        </div>

                        <input type="text" className="search-input" placeholder="چی میخوای یاد بگیری ؟ " />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderFirst;