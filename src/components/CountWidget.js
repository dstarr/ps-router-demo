import React from 'react';
import PropTypes from 'prop-types';

let CountWidget = ({count, handleIncrementClick, handleDecrementClick}) => {

    return (
        <div>
            <p> Count: {count} </p>
            <button onClick={handleIncrementClick}>Increment</button>
            <button onClick={handleDecrementClick}>Decrement</button>
        </div>
    )
};


CountWidget.PropTypes = {
    count: PropTypes.number.isRequired,
    handleIncrementClick: PropTypes.func.isRequired,
    handleDecrementClick: PropTypes.func.isRequired
};

export default CountWidget;