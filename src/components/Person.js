import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

let Person = ({id, index, first, last, occupation, handleDelete}) => {

    return (
        <tr key={index}>
            <td>{first + ' ' + last}</td>
            <td>{occupation}</td>
            <td>
                <Button onClick={e => handleDelete(e, first, last)}>Delete</Button>
            </td>
        </tr>
    )
};


Person.PropTypes = {
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Person;





