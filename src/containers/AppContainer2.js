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
import Nested from "../components2/Nested";



class AppContainer extends React.Component {

    constructor(props){
        super(props);
    }


    render = () => {

        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className={'leftNavContainer'}>
                        <NavLinks/>
                    </div>

                    <div className={'rightContentContainer'}>
                        <Switch>
                            <Route path={'/nested'} component={Nested}/>

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




