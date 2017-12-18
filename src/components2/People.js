import React from 'react';
import {Button, Table} from "react-bootstrap";

class People extends React.Component {

    constructor(props) {
        super(props);

        let people = [
            { id:1, name: 'David Starr', occupation: 'Technical Learning Director'},
            { id:2, name: 'Scott Allen', occupation: 'Web Developer'},
            { id:3, name: 'Matt Milner', occupation: 'Programmer'},
            { id:4, name: 'Ben Day', occupation: 'Pluralsight Author & Consultant'}
        ];

        this.state = {
            people: people,
            newName: '',
            newOccupation: ''
        };
    }

    render = () => {

        let people = this.state.people.map((person, index) => (
            <tr key={index}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.occupation}</td>
                <td>
                    <Button onClick={(e) => this.onDeletePerson(e, person.id)}>Delete</Button>
                </td>
            </tr>
        ));

        return (
            <div>
                <h1>People</h1>
                <Table bordered={false} responsive={true} striped={true}>
                    <thead>
                    <tr>
                        <td><strong>ID</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Occupation</strong></td>
                        <td>&nbsp;</td>
                    </tr>
                    </thead>
                    <tbody>
                    {people}
                    </tbody>
                </Table>
                <div>
                    <input onChange={this.onNameChange} placeholder={'Name'} value={this.state.newName}/>
                    {' '}
                    <input onChange={this.onOccupationChange} placeholder={'Occupation'} value={this.state.newOccupation}/>
                    {' '}
                    <Button onClick={this.onAddNewPerson}>Add</Button>
                </div>
            </div>
        );
    };

    onAddNewPerson = () => {

        if( this.state.newName === '' ||
            this.state.newOccupation === '') {
            return;
        }

        const person = {
            id: this.getId(),
            name: this.state.newName,
            occupation: this.state.newOccupation
        };

        this.setState({
            people: this.state.people.concat(person),
            newName: '',
            newOccupation: ''
        });

    };

    onOccupationChange = (e) => {
        this.setState({
            newOccupation: e.target.value
        });
    };

    onNameChange = (e) => {
        this.setState({
            newName: e.target.value
        });
    };

    onDeletePerson(e, id) {
        let people = this.state.people.filter(person => (id !== person.id));

        this.setState({
            people: people
        });
    };

    getId() {

        let currentId = 0;

        for (let i = 0; i < this.state.people.length; i++) {

            if (this.state.people[i].id > currentId)
                currentId = this.state.people[i].id;
        }

        return currentId + 1;
    };
}

export default People;

