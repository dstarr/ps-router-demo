import React from "react";
import {Redirect, Route} from "react-router-dom";
import authService from '../../services/authService';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
           render={(props) => (
               authService.isAuthenticated()
                   ? <Component {...props} />
                   : <Redirect to='/login'/>

           )}/>
);

// : <Redirect to={{
//     pathname: 'login',
//     state: { from: props.location }
// }

export default PrivateRoute;

