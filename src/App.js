import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';
import PropViewer from './components/PropViewer';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/colors/ColorSwatch';
import NameForm from './components/prompt/NameForm';
import LoggingHome from './components/logging/LoggingHome';

const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/propview' component={PropViewer}/>
                        <Route path='/color' render={() => {
                            return <ColorSwatch text='Red' color='#ff0000'/>
                        }}/>
                        <Route path='/prompt' component={NameForm}/>
                        <Route path='/logging' component={LoggingHome}/>

                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;