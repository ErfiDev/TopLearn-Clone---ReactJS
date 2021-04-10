import React from 'react';
import Arrow from '@material-ui/icons/KeyboardArrowDownOutlined';


const RightChild = () => {
    return (  
        <div className="right-child-nav">
            <ul className="nav-ul">
                <li className="option-nav">
                    الکترونیک 
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    گرافیک
                </li>

                <li className="option-nav">
                    امنیت
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    سیستم عامل
                </li>

                <li className="option-nav">
                    سئو
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    تحت ویندوز
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    بانک های اطلاعاتی
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    طراحی سایت
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    برنامه نویسی وب
                </li>

                <li className="option-nav drop-down-nav">
                    <Arrow />
                    برنامه نویسی موبایل
                </li>
            </ul>
        </div>
    );
}
 
export default RightChild;