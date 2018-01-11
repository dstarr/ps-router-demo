import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "../components/layout/Header";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Colors from "../components/colors/Colors";

import PrivateRoute from "../components/secure/PrivateRoute";
import ProtectedHome from "../components/secure/ProtectedHome";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";

import People from "../components/people/People";
import PersonProfileContainer from "./PersonProfileContainer";
import AddressForm from "../components/AddressForm";
import History from "../components/History";
import RecursiveColorSwatch from "../components/colors/RecursiveColorSwatch";
import Unicorn from "../components/unicorn/Unicorn";
import Sidebar from "../components/layout/Sidebar";

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    // - build NavLinks when putting in the 3rd link

    render = () => {

        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Sidebar />
                    <div className={'rightContentContainer'}>

                        <Switch>

                            <Route path={'/'} component={Home} exact={true}/>
                            <Route path={'/colors'} component={Colors}/>
                            <Route path={'/history'} component={History}/>

                            <Route path={'/prompt'} component={AddressForm}/>

                            <Route path={'/people/:id'} component={PersonProfileContainer}/>
                            <Route path={'/people'} component={People}/>

                            <Route path={'/recurse/:color/:text'} component={RecursiveColorSwatch}/>

                            <PrivateRoute path={'/protected'} component={ProtectedHome}/>
                            <Route path={'/login'} component={Login}/>
                            <Route path={'/logout'} component={Logout}/>

                            <Route path={'/unicorn'} component={Unicorn}/>

                            <Route component={PageNotFound}/>

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




