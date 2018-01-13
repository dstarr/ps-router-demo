import React from 'react';

const LocationReporter = (props) => {

    console.log(props.location);
    // console.log(props.history);
    // pushes a new entry onto the history stack instead of replacing it

    return (
        <div>
            <h1>Location Reporter</h1>
            <h3>{`${props.location.pathname}${props.location.search}${props.location.hash}`}</h3>
        </div>
    );

};

export default LocationReporter;