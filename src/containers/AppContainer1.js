import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import ComponentB from "../components1/ComponentB";
import ColorSwatch from "../components1/ColorSwatch";
import Home from "../components1/Home";

class AppContainer extends React.Component {

    render = () => {

        const linkStyle = {
            fontSize: 24
        };

        const linkContainerStyle = {
            textAlign: 'center',
            display: 'block-inline',
            margin: 20
        };

        return (
            <BrowserRouter>
                <div>
                    <div style={linkContainerStyle}>
                        <nav>
                            <Link className="btn btn-primary" style={linkStyle} to={'/'}>Home</Link>
                            {' '}
                            <Link className="btn btn-primary" style={linkStyle} to={'/routeA'}>Route A</Link>
                            {' '}
                            <Link className="btn btn-primary" style={linkStyle} to={'/routeB'}>Route B</Link>
                        </nav>
                    </div>

                    <div>
                        <Route path={'/'} component={Home} exact />
                        <Route path={'/routeA'} render={() => <ColorSwatch color='red' text='Component A' />} />
                        <Route path={'/routeB'} component={ComponentB} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




