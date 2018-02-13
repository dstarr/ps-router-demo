import React from "react";
import {Redirect, Route} from "react-router-dom";
import authService from '../../services/authService';

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
           render={(props) => (
               authService.isAuthenticated()
                   ? <Component {...props} />
                   : <Redirect to='/login' />
           )}
    />
);

export default ProtectedRoute;




{/*<Redirect to={*/}
    {/*{*/}
        {/*pathname: '/login',*/}
        {/*state: { target: props.location }*/}
    {/*}*/}
{/*}/>*/}