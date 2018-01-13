import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

const FancyColorSwatch = (props) => {

    let style = {
        backgroundColor: props.color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin: 15
    };

    console.log(props);

    return (
        <div style={style}>
            <h2>{props.text}</h2>
            <h3>{props.match.path}</h3>
        </div>
    );

};

FancyColorSwatch.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string
};

export default FancyColorSwatch;