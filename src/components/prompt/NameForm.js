import React from 'react';
import {Form, FormControl} from 'react-bootstrap';
import Button from 'react-bootstrap/es/Button';
import {Prompt} from 'react-router-dom';

class NameForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            valid: false
        };
    }

    render = () => {
        return (
            <div>
                <Prompt when={this.state.valid !== true}
                        message='Leaving this form will lose your data.'
                />
                <h1>Prompt for Completion</h1>
                <Form horizontal={true} inline={true}>
                    <FormControl
                        type="text"
                        value={this.state.firstName}
                        placeholder="Enter your first name."
                        onChange={this.onHandleFirstNameChange}
                    />

                    <FormControl
                        type="text"
                        value={this.state.lastName}
                        placeholder="Enter your last name."
                        onChange={this.onHandleLastNameChange}
                    />
                    <Button className={'btn btn-primary'} onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>

        );
    };

    onSubmit = () => {

        if (this.state.firstName === '' || this.state.lastName === '') {
            this.setState({
                valid: false
            });
        } else {
            this.setState({
                valid: true
            });
            // take some action
            alert(`Your name is ${this.state.firstName} ${this.state.lastName} `)
        }
    };

    onHandleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        });
    };

    onHandleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        });
    };

}

export default NameForm;