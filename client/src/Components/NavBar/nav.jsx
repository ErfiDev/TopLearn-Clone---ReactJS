import React from 'react';

import LeftChild from './leftChild';
import RightChild from './rightChild';
import './Compiled/nav.css';

class Nav extends React.Component
{

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