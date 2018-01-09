import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from "../components/layout/Header";
import Home from "../components/layout/Home";
import PageNotFound from "../components/PageNotFound";
import Colors from "../components/colors/Colors";
import NavLinks from "../components/layout/NavLinks";

import PrivateRoute from "../components/secure/PrivateRoute";
import ProtectedHome from "../components/secure/ProtectedHome";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";

import People from "../components/people/People";
import PersonProfileContainer from "./PersonProfileContainer";
import AddressForm from "../components/AddressForm";
import History from "../components/History";
import RecursiveColorSwatch from "../components/colors/RecursiveColorSwatch";
import Unicorn from "../components/Unicorn";
import ProtectedChild1 from "../components/secure/ProtectedChild1";
import ProtectedChild2 from "../components/secure/ProtectedChild2";

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
                    <div className={'leftNavContainer'}>
                        <NavLinks/>
                    </div>

                    <div className={'rightContentContainer'}>

                        <Switch>

                            <Route path={'/colors'} component={Colors}/>
                            <Route path={'/history'} component={History}/>
                            <Route path={'/prompt'} component={AddressForm}/>

                            <Route path={'/recurse/:color/:text'} component={RecursiveColorSwatch}/>

                            <Route path={'/people/:id'} component={PersonProfileContainer}/>
                            <Route path={'/people'} component={People}/>



                            <Route path={'/login'} component={Login}/>
                            <Route path={'/logout'} component={Logout}/>
                            <PrivateRoute path={'/protected'} component={ProtectedHome}/>

                            <Route path={'/'} component={Home} exact/>

                            <Route component={PageNotFound}/>

                            <Route path={'/unicorn'} children={() => {
                                this.props.match ? <Unicorn /> : <PageNotFound />
                            }} />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




