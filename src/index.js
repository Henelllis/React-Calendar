import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider,  } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';


import dateReducer from './store/reducers/dates';


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const reducer = dateReducer

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)) );
ReactDOM.render( <Provider store={store}>
                    <App />
                 </Provider>
    , document.getElementById('root'));
