import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/hello' component={Hello}/>

                    </Switch>

                </div>
            </div>
        </Router>
    );
};

const Hello = () => <h1>Hello</h1>;

export default App;