import {createStore , applyMiddleware , compose} from 'redux';
import Reducers from '../Reducer/index';
import thunk from 'redux-thunk';

const Store = createStore
(   Reducers , 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
);

export default Store;