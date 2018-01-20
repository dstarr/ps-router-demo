import React from 'react';
import authService from "../../services/authService";
import {Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: authService.isAuthenticated(),
            goToTarget: true
        };
    }

    render = () => {

        const { target } = this.props.location.state || {target: { pathname: '/protected'}};
        console.log(this.props);

        if (this.state.loggedIn) {
            return <Redirect to={target}/>;
        }

        return (
            <div>
                <h1>Sign In</h1>
                <div><input size={40} type={'input'} name={'email'} placeholder={'Email'}/></div>
                <div><input size={40} type={'password'} name={'password'} placeholder={'Password'}/></div>
                <Button className='btn btn-primary' onClick={this.login}>Sign in</Button>
            </div>
        );
    };

    login = () => {
        authService.signIn(() => {
            this.setState({
                loggedIn: authService.isAuthenticated()
            })
        })
    };
}

export default Login