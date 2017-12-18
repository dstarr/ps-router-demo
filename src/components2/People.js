import React from 'react';
import {Table} from "react-bootstrap";

class People extends React.Component {

    constructor(props) {
        super(props);

        let people = [
            {name: 'David Starr', occupation: 'Technical Learning Director'},
            {name: 'Scott Allen', occupation: 'Web Developer'},
            {name: 'Matt Milner', occupation: 'Programmer'},
            {name: 'Ben Day', occupation: 'Pluralsight Author & Consultant'}
        ];

        this.state = {
            people: people
        };
    }

    render = () => {

        let people = this.state.people.map((person, index) => (
            <tr key={index}>
                <td>{person.name}</td>
                <td>{person.occupation}</td>
            </tr>
        ));

        return (
            <div>
                <h1>People</h1>
                <Table bordered={false} responsive={true} striped={true}>
                    <thead>
                    <tr>
                        <td><strong>Name</strong></td>
                        <td><strong>Occupation</strong></td>
                    </tr>
                    </thead>
                    <tbody>
                    {people}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default People