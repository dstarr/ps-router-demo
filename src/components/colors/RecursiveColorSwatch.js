import React from 'react';
import {Link, Route, withRouter} from "react-router-dom";

const RecursiveColorSwatch = ({match}) => {

    const color = match.params.color;
    const text = match.params.text;

    // stop the recursion
    if( color === '' ||  text === '' ||
        color === undefined ||  text === undefined)
        return null;

    const style={
        backgroundColor: color,
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin:15

    };

    return (
        <div style={style}>
            <h2>{text}</h2>
            <h3>{match.path}</h3>
            <h4>
                <Link to={`${match.url}/ececec/Child`}>Add Child</Link>
                {' | '}
                <Link to={`${match.url}`}>Close Child</Link>
            </h4>

        </div>
    );

};

export default withRouter(RecursiveColorSwatch);