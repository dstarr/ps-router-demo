import React from 'react';
import {Link, Route} from 'react-router-dom';
import LoggingDefaultMessage from './LoggingDefaultMessage';
import LoggingLink from './LoggingLink';
import LoggingRoute from './LoggingRoute';
import Lorem from './Lorem';

const LoggingHome = ({match}) => {

    return (
        <div>
            <h1>Logging Home</h1>
            <h4>
                <LoggingLink to={`${match.url}/lorem/12d2a0f4-29ea-4650-803a-67418b597090`}>Link 1</LoggingLink>
                {' | '}
                <LoggingLink to={`${match.url}/lorem/7842a9f0-449d-499f-bd19-36106da591fa`}>Link 2</LoggingLink>
            </h4>

            <LoggingRoute path={`${match.url}/lorem/:eid`} component={Lorem} />
            <Route path={`${match.url}`} component={LoggingDefaultMessage} exact />
        </div>
    );

};

export default LoggingHome;