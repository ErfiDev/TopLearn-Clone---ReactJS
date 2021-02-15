import {createStore , applyMiddleware , compose} from 'redux';
import Reducers from '../Reducer/index';
import thunk from 'redux-thunk';
import courseAction from '../Action/courseAction';

const Store = createStore
(   Reducers , 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )    
);

Store.dispatch(courseAction());   

export default Store;