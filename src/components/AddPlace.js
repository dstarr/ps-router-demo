import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Form, FormGroup, FormControl} from 'react-bootstrap';

class AddPlace extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newPlaceName: ''
        };
    }

    onAddNameChange = (e) => {
        this.setState({
            newPlaceName: e.target.value
        });
    };

    onSubmitNewPlace = (e) => {
        this.props.handleAddPlace(this.state.newPlaceName);
        this.setState({
            newPlaceName: ''
        })
    };

    render = () => {

        let inputStyle = {
            align: 'left',
            width: 300,
            display: 'inline-block'
        };

        return (
            <div align="left">

                <FormGroup>
                    <FormControl
                        style={inputStyle}
                        type="text"
                        placeholder="New Place Name"
                        value={this.state.newPlaceName}
                        onChange={this.onAddNameChange}
                    />
                    {' '}
                    <Button onClick={this.onSubmitNewPlace}>Add Place</Button>
                </FormGroup>
            </div>
        );
    }
}

AddPlace.PropTypes = {
    handleAddPlace: PropTypes.func.required
};

export default AddPlace;