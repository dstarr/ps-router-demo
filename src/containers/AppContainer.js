import React from 'react';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import People from "../components/People";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import NavLinks from "../components/NavLinks";
import Header from "../components/Header";
import ProtectedComponent from "../components/secure/ProtectedComponent";
import PrivateRoute from "../components/secure/PrivateRoute";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";
import Articles from "../components/Articles";
import PersonProfileContainer from "./PersonProfileContainer";
import Colors from "../components/colors/Colors";


class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }


    render = () => {

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className={'leftNavContainer'}>
                        <NavLinks/>
                    </div>

                    <div className={'rightContentContainer'}>
                        <Switch>
                            <Route path={'/colors'} component={Colors}/>

                            <Route path={'/people/:userId'} component={PersonProfileContainer}/>
                            <Route path={'/people/'} component={People}/>

                            <PrivateRoute path={'/protected'} component={ProtectedComponent}/>
                            <Route path={'/login'} component={Login}/>
                            <Route path={'/logout'} component={Logout}/>

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




