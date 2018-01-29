import React from 'react';
import {Route} from "react-router-dom";

const LoggingRoute = ({component: ComponentToRender, ...rest}) => {
    return (
        <Route {...rest}
               render={(props) => {
                   alert('Route is Logging ' + props.match.params.eid);
                   return <ComponentToRender {...props} />
               }}
        />
    );
};


export default LoggingRoute;