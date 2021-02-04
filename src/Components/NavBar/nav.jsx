import React from 'react';

import ContextApi from '../../Context/Context';
import LeftChild from './leftChild';
import RightChild from './rightChild';
import './Compiled/nav.css';

class Nav extends React.Component
{
    static contextType = ContextApi;

    render()
    {
        return(
            <nav className="navbar">
                <LeftChild />
                <RightChild />
            </nav>
        );
    }
}

export default Nav;