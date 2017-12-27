import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import People from "../components2/People";
import Home from "../components2/Home";
import Places from "../components2/Places";
import PersonProfile from "../components2/PersonProfile";
import PageNotFound from "../components2/PageNotFound";
import NavLinks from "../components2/NavLinks";
import Header from "../components2/Header";
import ProtectedComponent from "../components2/secure/ProtectedComponent";
import PrivateRoute from "../components2/secure/PrivateRoute";
import Login from "../components2/secure/Login";
import Logout from "../components2/secure/Logout";
import Lorem from "../components2/Lorem";



class AppContainer extends React.Component {

    constructor(props){
        super(props);
    }


    render = () => {

        const contentStyle = {
            flex: 1,
            position: 'fixed',
            marginLeft: 210,
            width: 800

        };

        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className={'leftNavContainer'}>
                        <NavLinks/>
                    </div>

                    <div style={contentStyle}>
                        <Switch>
                            <Route path={'/places'} component={Places}/>

                            <Route path={'/people/:userId'} component={PersonProfile} />
                            <Route path={'/people/'} component={People} />


                            <PrivateRoute path={'/protected'} component={ProtectedComponent} />

                            <Route path={'/login'} component={Login} />
                            <Route path={'/logout'} component={Logout} />

                            <Route path={'/'} component={Home} exact/>

                            <Route component={PageNotFound}/>

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




