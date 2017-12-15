import React from 'react';
import AddPerson from "../components/AddPerson";
import * as actions from "../actions/personActions";

class AddPersonContainer extends React.Component {

    constructor(props) {
        super(props);

    }

    handleAddNewPerson = (firstName, lastName, occupation) => {
        let action = actions.addPerson(firstName, lastName, occupation);
        this.props.store.dispatch(action);
    };

    render = () => {

        return (
            <AddPerson handleAddPerson={this.handleAddNewPerson}/>
        );
    }
}

export default AddPersonContainer;