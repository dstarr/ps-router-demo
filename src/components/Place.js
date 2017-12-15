import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'


let Person = ({index, name, handleDelete}) => {

    return (
        <tr key={index}>
            <td>{name}</td>
            <td><Button onClick={e => handleDelete(e, name)}>Delete</Button></td>
        </tr>
    )
};


Person.PropTypes = {
    name: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Person;





