import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ColorSwatch from './components/colors/ColorSwatch';
import NameForm from './components/prompt/NameForm';
import LoggingHome from './components/logging/LoggingHome';
import ProtectedHome from './components/secure/ProtectedHome';
import Login from './components/secure/Login';
import Logout from './components/secure/Logout';
import ProtectedRoute from './components/secure/ProtectedRoute';
import PersonProfileContainer from './containers/PersonProfileContainer';
import People from './components/people/People';
import RecursiveColorSwatch from './components/colors/RecursiveColorSwatch';
import Unicorn from "./components/unicorn/Unicorn";


const App = () => {

    return (
        <Router>
            <div>
                <Header/>
                <Sidebar/>
                <div className={'rightContentContainer'}>

                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/colors/:color/:text' component={RecursiveColorSwatch}/>
                        <Route path='/color' render={() => {
                            return <ColorSwatch text='Red' color='#ff0000'/>
                        }}/>
                        <Route path='/prompt' component={NameForm}/>
                        <Route path='/logging' component={LoggingHome}/>

                        <Route path={'/people/:id'} component={PersonProfileContainer}/>
                        <Route path={'/people'} component={People}/>

                        <ProtectedRoute path={'/protected'} component={ProtectedHome}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/logout'} component={Logout}/>

                        <Route path={'/unicorn'} component={Unicorn} />

                        <Route component={PageNotFound}/>
                    </Switch>

                </div>
            </div>
        </Router>
    );
};

export default App;