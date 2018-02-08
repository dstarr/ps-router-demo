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
                        <Route path='/' component={Home}/>
                        <Route path='/' component={Home}/>
                        <Route path='/' component={Home}/>
                        <Route path='/' component={Home}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};


export default App;




/*
    0. npm install react-router-dom
    1. Add HashRounter
    2. Add Route to Home
        - path is the router match.
        - here we are matching on the application root
        - so this is going to be our home page
    3. Look at URL in Browser
    4. Replace with BrowserRouter
        - Look at URL in Browsers
        - No hashtag
    5. Add 4
    6. Remove 4
    7. Add /foo
        - goto foo in Browser
        - show 2 matches
    8. Add Switch
    9. Add Link to Sidebar
 */