import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../_reducers/rootReducer';
import { routerMiddleware } from 'react-router-redux';

const history = require('history').createBrowserHistory();
const middlewareHistory = routerMiddleware(history)


export const store = createStore(
  rootReducer, applyMiddleware(middlewareHistory,thunk));