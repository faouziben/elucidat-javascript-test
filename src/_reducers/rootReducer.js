import bookReducer from './bookReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    bookReducer,
    router: routerReducer
});
