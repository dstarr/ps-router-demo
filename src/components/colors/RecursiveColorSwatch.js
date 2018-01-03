import React from 'react';
import {Link, Route, withRouter} from "react-router-dom";

const RecursiveColorSwatch = ({match}) => {

    const color = match.params.color;
    const text = match.params.text;

    console.log(`GOT IT ${color}`);
    console.log(`GOT IT ${text}`);


    if(color === '' ||  text === '')
        return null;

    if(color === undefined ||  text === undefined)
        return null;

    let style={
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

            <h4><Link to={`${match.url}/9BC850/Child`}>Next</Link></h4>

            <Route path={`${match.url}/:color/:text`} component={RecursiveColorSwatch}/>

        </div>
    );

};

export default withRouter(RecursiveColorSwatch);