import React from 'react';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'
import People from "../components2/People";
import Home from "../components2/Home";
import Places from "../components2/Places";
import PersonProfile from "../components2/PersonProfile";
import PageNotFound from "../components2/PageNotFound";
import NavLinks from "../components2/NavLinks";

class AppContainer extends React.Component {

    render = () => {

        const contentStyle = {
            flex: 1,
            position: 'fixed',
            marginLeft: 210,
            width: 800

        };

        return (
            <BrowserRouter>
                <div>
                    <div className='header'>
                        <div className={'loginLink'}>
                            <Link className='navLink' to="/login">Login</Link>
                        </div>
                    </div>

                    <div className={'leftNavContainer'}>
                        <NavLinks/>
                    </div>

                    <div style={contentStyle}>
                        <Switch>
                            <Route path={'/'} component={Home} exact/>
                            <Route path={'/places'} component={Places}/>
                            <Route path={'/people'} component={People}/>
                            <Route path={'/people/:userId'} component={PersonProfile}/>
                            <Route component={PageNotFound}/>

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




