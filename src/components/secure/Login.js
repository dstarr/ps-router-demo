import React from 'react';
import authService from "../../services/authService";
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import {Redirect} from "react-router-dom";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: authService.isAuthenticated()
        };
    }

    render = () => {

        const {target} = this.props.location.state || {target: {pathname: '/protected'}};

        if (this.state.loggedIn) {
            return <Redirect to={target}/>;
        }

        return (
            <div style={{width: 200}}>
                <h1>Sign In</h1>

                <Form horizontal={true}>
                    <FormGroup>

                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl
                            type="string"
                            placeholder="Email"
                            size={{length: 40}}
                            onChange={this.onHandleLastNameChange}
                        />

                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            placeholder="Password"
                            length={'40px'}
                            onChange={this.onHandleLastNameChange}
                        />

                        <Button className='btn btn-primary' onClick={this.login}>Sign in</Button>
                    </FormGroup>
                </Form>
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

export default Login;