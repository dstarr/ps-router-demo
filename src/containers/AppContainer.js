import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Colors from "../components/colors/Colors";
import Header from "../components/layout/Header";
import PageNotFound from "../components/PageNotFound";
import People from "../components/People";
import Home from "../components/layout/Home";
import NavLinks from "../components/layout/NavLinks";
import ProtectedComponent from "../components/secure/ProtectedComponent";
import PrivateRoute from "../components/secure/PrivateRoute";
import Login from "../components/secure/Login";
import Logout from "../components/secure/Logout";
import PersonProfileContainer from "./PersonProfileContainer";
import AddressForm from "../components/AddressForm";
import History from "../components/History";
import RecursiveColorSwatch from "../components/colors/RecursiveColorSwatch";

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


                            <PrivateRoute path={'/protected'} component={ProtectedComponent}/>
                            <Route path={'/login'} component={Login}/>
                            <Route path={'/logout'} component={Logout}/>

                            <Route path={'/'} component={Home} exact/>

                            <Route component={PageNotFound}/>
                            <Route children={() => ( <PageNotFound text={'You have no idea what you are looking for, do you?'} /> )} />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


export default AppContainer;




