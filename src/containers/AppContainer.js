import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Colors from "../components/colors/Colors";
import Header from "../components/Header";
import PageNotFound from "../components/PageNotFound";
import People from "../components/People";
import Home from "../components/Home";
import NavLinks from "../components/NavLinks";
import ProtectedComponent from "../components/secure/ProtectedComponent";
import PrivateRoute from "../components/secure/PrivateRoute";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";
import PersonProfileContainer from "./PersonProfileContainer";
import AddressForm from "../components/AddressForm";
import History from "../components/History";

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
                            <Route path={'/history'} component={History}/>
                            <Route path={'/colors'} component={Colors}/>
                            <Route path={'/prompt'} component={AddressForm}/>

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




