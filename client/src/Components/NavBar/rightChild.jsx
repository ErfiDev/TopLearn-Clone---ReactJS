import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import filterCourse from '../../Action/filterCourses';

const RightChild = () => {

    const dis = useDispatch();

    function Categories(e)
    {
        let value = e.target.attributes[1].nodeValue;
        dis(filterCourse(value , null , null));
    }

    return (  
        <div className="right-child-nav">
            <ul className="nav-ul">
                <li className="option-nav" onClick={Categories}>
                    <Link to="/filterCourse" e="graphic">
                        گرافیک
                    </Link>
                </li>

                <li className="option-nav" onClick={Categories}>
                    <Link to="/filterCourse" e="system">
                        سیستم عامل
                    </Link>
                </li>

                <li className="option-nav" onClick={Categories}>
                    <Link to="/filterCourse" e="database">
                        بانک های اطلاعاتی
                    </Link>     
                </li>

                <li className="option-nav" onClick={Categories}>
                    <Link to="/filterCourse" e="web">
                        برنامه نویسی وب
                    </Link>
                </li>

                <li className="option-nav" onClick={Categories}>
                    <Link to="/filterCourse" e="mobile">
                        برنامه نویسی موبایل
                    </Link>
                </li>
            </ul>
        </div>
    );
}
 
export default RightChild;