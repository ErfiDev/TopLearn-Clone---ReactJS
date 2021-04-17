import React from 'react';
import {Link} from 'react-router-dom';

const RightChild = () => {
    return (  
        <div className="right-child-nav">
            <ul className="nav-ul">
                <li className="option-nav">
                    <Link to="/filterCourse">
                        گرافیک
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse">
                        سیستم عامل
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse">
                        بانک های اطلاعاتی
                    </Link>     
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse">
                        برنامه نویسی وب
                    </Link>
                </li>

                <li className="option-nav">
                    <Link to="/filterCourse">
                        برنامه نویسی موبایل
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default RightChild;