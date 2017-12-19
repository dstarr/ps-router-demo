import React from 'react';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch} from 'react-router-dom'
import People from "../components2/People";
import Home from "../components2/Home";
import Places from "../components2/Places";
import PersonProfile from "../components2/PersonProfile";

class AppContainer extends React.Component {

    render = () => {

        const linkStyle = {
            fontSize: 20
        };

        const linkContainerStyle = {
            padding: 20,
            position: 'fixed',
            height: 1000,
            width: 200,
            backgroundColor: '#f0f0f0',
            top: 0
        };

        const contentStyle = {
            flex: 1,
            position: 'fixed',
            marginLeft: 210,
            width: 800

        };



        return (
            <BrowserRouter>
                <div>
                    <div style={linkContainerStyle}>
                        <nav>
                            <div><Link style={linkStyle} to={'/'}>Home</Link></div>
                            <div><Link style={linkStyle} to={'/people'}>People</Link></div>
                            <div><Link style={linkStyle} to={'/places'}>Places</Link></div>
                            <div><NavLink style={linkStyle} to={'/places'}>Nope</NavLink></div>

                        </nav>
                    </div>

                    <div style={contentStyle}>
                        <Switch>
                            <Route path={'/places'} component={Places}/>
                            <Route path={'/people'} component={People} />
                            <Route path={'/people/:userId'} component={PersonProfile}/>
                            <Route path={'/'} component={Home}/>
                        </Switch>


                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




