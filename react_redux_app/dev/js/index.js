import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';

const logger = createLogger();
export const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

function loadItems() {
    return (dispatch)=> {
    return fetch( 'http://localhost:3001/items', {
        method: 'GET'
    }).then((response) =>{ 
        if(response.status === 200){
        dispatch(fetchloadItemsSuccess(response.json()))
        }
    }) 

    }
    function fetchloadItemsSuccess(payload){
        return {
            type: "LOAD_ITEM",
            payload
        }
    }
    }

function loadAdminUser() {
    return (dispatch)=> {
    return fetch(' http://localhost:3001/Orders')
    .then((response) =>{ 
        if(response.status === 200){
        dispatch(fetchloadAdminUserSuccess(response.json()))
        }
    }) 

    }
    function fetchloadAdminUserSuccess(payload){
        return {
            type: "LOAD_ADMIN_ORDER",
            payload
        }
    }
}


function AddAdminUser() {
    return (dispatch)=> {
    return fetch( 'http://localhost:3001/items', {
        method: 'GET'
    }).then((response) =>{ 
        if(response.status === 200){
        dispatch(fetchItemSuccess(response.json()))
        }
    }) 

    }
    function fetchItemSuccess(payload){
        return {
            type: "LOAD_ITEM",
            payload
        }
    }
    }

store.dispatch(
    loadItems()
);
store.dispatch(
    loadAdminUser()
);
store.dispatch(
    AddAdminUser()
);

    
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
