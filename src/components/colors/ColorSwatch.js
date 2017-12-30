import React from 'react';
import PropTypes from 'prop-types';

const ColorSwatch = (props) => {

    let style={
        backgroundColor: props.color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        width: props.width,
        margin:15

    };

    return (
        <div style={style}>
            <h2>{props.text}</h2>
        </div>
    );

};

ColorSwatch.PropTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default ColorSwatch;