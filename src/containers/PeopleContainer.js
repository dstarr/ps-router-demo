import React from 'react';
import {Table, Jumbotron, Button} from "react-bootstrap";
import Person from "../components/Person";
import * as actions from '../actions/personActions'
import AddPersonContainer from "./AddPersonContainer";

class PeopleContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            people: props.store.getState().people
        }
    }

    componentDidMount = () => {
        this.props.store.subscribe(this.storeChanged);
    };

    storeChanged = () => {
        this.setState({
            people: this.props.store.getState().people
        });

    };

    onHandleDelete = (event, firstName, lastName) => {
        let action = actions.deletePerson(firstName, lastName);
        this.props.store.dispatch(action);

    };

    render = () => {

        const style = {
            backgroundColor: '5897E2',
            margin: 20,
            padding: 20,
            width: 800
        };

        let people = this.state.people.map((person, index) => (
            <Person id={person.id}
                    key={index}
                    first={person.firstName}
                    last={person.lastName}
                    occupation={person.occupation}
                    handleDelete={this.onHandleDelete}
            />

        ));


        return (
            <div style={style}>
                <Table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Occupation</th>
                        <th>&nbsp;</th>
                    </tr>
                    {people}
                    </thead>
                </Table>

                <div>
                    <hr/>
                    <AddPersonContainer store={this.props.store}/>
                </div>
            </div>
        );
    }
}

export default PeopleContainer;