import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/index.css'

import App from './App'

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<App />, node1);
}