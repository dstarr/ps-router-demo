import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css'

import AppContainer from './AppContainer2'

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<AppContainer />, node1);
}