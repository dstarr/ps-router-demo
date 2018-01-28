import React from 'react';

const PropViewer = ({match}) => {

    return (
        <h1>
            {match.path}
        </h1>
    );

};

export default PropViewer;
