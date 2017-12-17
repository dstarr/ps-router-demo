import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import People from "../components2/People";
import Home from "../components2/Home";

class AppContainer extends React.Component {

    render = () => {

        const linkStyle = {
            fontSize: 20
        };

        const linkContainerStyle = {
            padding: 20,
            position: 'fixed',
            height: '100%',
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
                            <div><Link style={linkStyle} to={'/routeB'}>Places</Link></div>
                        </nav>
                    </div>

                    <div style={contentStyle}>
                        <Route path={'/'} component={Home} exact/>
                        <Route path={'/people'} component={People}/>
                        {/* <Route path={'/places'} component={Places}/> */}
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




