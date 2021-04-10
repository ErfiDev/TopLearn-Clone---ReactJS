import React,{Fragment} from 'react';

import HeaderCenter from './header-center';
import HeaderLast from './header-last';

const LayoutCenterLast = ()=>{
    return(
        <Fragment>
            <HeaderCenter />
            <HeaderLast />
        </Fragment>
    );
};

export default LayoutCenterLast;