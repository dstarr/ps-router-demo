import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Form, FormGroup, FormControl} from 'react-bootstrap';

class AddPerson extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newFirstName: '',
            newLastName: '',
            newOccupation: ''
        }
    };


    onFirstNameChange = (e) => {
        this.setState({
            newFirstName: e.target.value
        });
    };

    onLastNameChange = (e) => {
        this.setState({
            newLastName: e.target.value
        });
    };

    onOccupationChange = (e) => {
        this.setState({
            newOccupation: e.target.value
        });
    };

    onSubmitNewPerson = (e) => {
        this.props.handleAddPerson(this.state.newFirstName, this.state.newLastName, this.state.newOccupation);
        this.setState({
            newFirstName: '',
            newLastName: '',
            newOccupation: ''
        })
    };

    render = () => {

        let inputStyle = {
            align: 'left',
            width: 200,
            display: 'inline-block'
        };

        return (
            <div align="left">

                <FormGroup>
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="First Name"
                        value={this.state.newFirstName}
                        onChange={this.onFirstNameChange}

                    />
                    {' '}
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="Last Name"
                        value={this.state.newLastName}
                        onChange={this.onLastNameChange}
                    />
                    {' '}
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="Occupation"
                        value={this.state.newOccupation}
                        onChange={this.onOccupationChange}
                    />
                    {' '}
                    <Button onClick={this.onSubmitNewPerson}>Add Person</Button>
                </FormGroup>


            </div>
        );
    }
}

AddPerson.PropTypes = {
    handleAddPerson: PropTypes.func.required
};

export default AddPerson;