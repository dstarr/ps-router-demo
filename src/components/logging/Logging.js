import React from 'react';
import LoggingLink from "./LoggingLink";
import {Route, withRouter} from "react-router-dom";
import Lorem from "./Lorem";
import LoggingRoute from "./LoggingRoute";
import Home from "./Home";


const Logging = (props) => {

    return (
        <div>
            <h1>Logging Home</h1>
            <h4>
                <LoggingLink to={`${props.match.url}/lorem/7fd2a0f4-29ea-4650-803a-67418b597090`}>Link 1</LoggingLink>
                {' | '}
                <LoggingLink to={`${props.match.url}/lorem/7842a9f0-449d-499f-bd19-36106da591fa`}>Link 2</LoggingLink>
            </h4>

            <LoggingRoute path={`${props.match.url}/lorem/:eid`} component={Lorem} />
            <Route path={props.match.url} component={Home} exact/>
        </div>
    );

};

export default withRouter(Logging);


{/*<Route path={`${props.match.url}/lorem/:eid`} render={() => {*/}
    {/*return <Lorem/>*/}
{/*}}/>*/}