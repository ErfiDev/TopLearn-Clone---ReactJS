import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Global from './Global';
import App from './App';

render(
    <Global>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Global>

, document.getElementById("root"));