import React from 'react';
import {Link} from 'react-router-dom';

const LeftChild = ()=>{

    return(
        <div className="left-child-nav">
            <div className="ear-h4-container">
                <h4 className="nashenavayan"> 
                    <Link>
                        مخصوص ناشنوایان 
                    </Link>
                </h4>
            </div>

            <div className="ear-img-container">
                <img src="./img/Ear.svg" alt="Ear"/>
            </div>
        </div>
    );
};

export default LeftChild;