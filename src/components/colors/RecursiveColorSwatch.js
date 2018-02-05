import React from 'react';
import {withRouter} from "react-router-dom";

const RecursiveColorSwatch = () => {

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
            <h3>RecursiveColorSwatch</h3>
        </div>
    );

};

export default withRouter(RecursiveColorSwatch);