import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import ProtectedChild1 from "./ProtectedChild1";
import ProtectedChild2 from "./ProtectedChild2";
import ProtectedChildHome from "./ProtectedChildHome";

const ProtectedHome = ({match}) => {

    const leftDivStyle = {
        display: 'inline'
    };

    return (

        <div style={leftDivStyle}>
            <h1>Protected Home</h1>

            <h4>
                <Link to={`${match.url}`}>Child Main</Link>
                {' | '}
                <Link to={`${match.url}/1`}>Child 1</Link>
                {' | '}
                <Link to={`${match.url}/2`}>Child 2</Link>
            </h4>

            <Switch>
                <Route path={`${match.url}/1`} component={ProtectedChild1}/>
                <Route path={`${match.url}/2`} component={ProtectedChild2}/>
                <Route path={`${match.url}`} component={ProtectedChildHome}/>
            </Switch>


            <Link className='btn btn-primary' to={'/logout'}>Sign Out</Link>
        </div>


    );
};

export default ProtectedHome;