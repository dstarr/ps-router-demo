import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = (props) => {

    const style404 = {
        fontSize: 72,
        fontWeight: 'bold'
    };

    let message = 'Page not found';
    if(props.text)
        message = props.text;

    return (
        <div style={{textAlign:'center'}}>
            <h1>{message}</h1>
            <div style={style404}>404</div>
            <img src={'/assets/Black_Hole_Orange.png'} />
        </div>
    );
};

PageNotFound.propTypes = {
    text: PropTypes.string
};

export default PageNotFound;