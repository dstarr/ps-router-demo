import React from 'react';
import LoggingLink from "./LoggingLink";
import {Route, withRouter} from "react-router-dom";
import Lorem from "./Lorem";

const Logging = (props) => {

    return (
        <div>
            <h1>Logging Links</h1>
            <h4>
                <LoggingLink to={`${props.match.url}/lorem/7fd2a0f4-29ea-4650-803a-67418b597090`}>Link 1</LoggingLink>
                {' | '}
                <LoggingLink to={`${props.match.url}/lorem/7842a9f0-449d-499f-bd19-36106da591fa`}>Link 2</LoggingLink>
            </h4>

            <Route path={`${props.match.url}/lorem/:eid`} render={() => {
                return <Lorem/>
            }}/>
        </div>
    );

};

export default withRouter(Logging);


{/*<LoggingLink to={`${props.match.url}/lorem/`} eid='7fd2a0f4-29ea-4650-803a-67418b597090'>Link 1</LoggingLink>*/
}
{/*{' | '}*/
}
{/*<LoggingLink to={`${props.match.url}/lorem/`} eid='7842a9f0-449d-499f-bd19-36106da591fa'>Link 2</LoggingLink>*/
}
