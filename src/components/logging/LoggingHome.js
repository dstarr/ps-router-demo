import React from 'react';
import {Link, Route} from 'react-router-dom';
import LoggingDefaultMessage from './LoggingDefaultMessage';

const LoggingHome = ({match}) => {

    return (
        <div>
            <h1>Logging Home</h1>
            <h4>
                <Link to={`${match.url}/lorem/7fd2a0f4-29ea-4650-803a-67418b597090`}>Link 1</Link>
                {' | '}
                <Link to={`${match.url}/lorem/1842a9f0-449d-499f-bd19-36106da591fa`}>Link 2</Link>
            </h4>

            <Route path={`${match.url}`} component={LoggingDefaultMessage} exact />
        </div>
    );

};

export default LoggingHome;