import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import Global from './Global';
import App from './App';
import {Provider} from 'react-redux';
import Store from './Store/index';

render(
    <Provider store={Store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

, document.getElementById("root"));