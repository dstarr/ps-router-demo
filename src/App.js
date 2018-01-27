import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <h1>Hello RR4</h1>

                </div>
            </div>
        </Router>
    );
};


export default App;