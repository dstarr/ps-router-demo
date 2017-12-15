import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createStore} from 'redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import AppContainer from './AppContainer'
import reducers from '../reducers';

let initialState = {
    count: 0,
    people: [
        {firstName: 'Bart', lastName: 'Simpson', occupation: 'Student'},
        {firstName: 'Otto', lastName: '', occupation: 'Bus Driver'},
        {firstName: 'Homer', lastName: 'Simpson', occupation: 'Dad'},
        {firstName: 'Marge', lastName: 'Simpson', occupation: 'Mom'},
        {firstName: 'Maggie', lastName: 'Simpson', occupation: 'Baby'},
        {firstName: 'Lisa', lastName: 'Simpson', occupation: 'Good Student'}
    ],
    places: [
        {name: 'Moe\'s Tavern'},
        {name: 'Home'},
        {name: 'Springfield Elementary'},
        {name: 'Nuclear Power Plant'}
    ]
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<AppContainer store={store}/>, node1);
}