import React from 'react';
import querystring from 'query-string';
import {Link} from "react-router-dom";

const Unicorn = ({match, location}) => {

    const qsValues = querystring.parse(location.search);
    let direction = qsValues.direction;

    if (direction === undefined)
        direction = 'left';


    return (
        <div>
            <h1>Unicorn Love</h1>
            <h4>
                <Link to={`${match.url}?direction=left`}>Left</Link>
                {' | '}
                <Link to={`${match.url}?direction=right`}>Right</Link>
            </h4>
            <img src={`/assets/unicorn_${direction}.png`} width={400}/>

        </div>
    );
};

export default Unicorn;