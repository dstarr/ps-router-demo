import React from 'react';

const ColorSwatch = (props) => {

    let style={
        backgroundColor: props.color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid'
    };

    return (
        <div style={style}>
            <h2>{props.text}</h2>
        </div>
    );

};

export default ColorSwatch;