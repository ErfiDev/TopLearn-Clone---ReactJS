import React from 'react';
import {Link} from 'react-router-dom';

const RightChild = () => {
    return (  
        <div className="right-child-nav">
            <ul className="nav-ul">
                <li className="option-nav">
                    <Link to="/filterCourse/graphic">
                        گرافیک
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse/system">
                        سیستم عامل
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse/database">
                        بانک های اطلاعاتی
                    </Link>     
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse/mobile">
                        برنامه نویسی وب
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse/mobile">
                        برنامه نویسی موبایل
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default RightChild;