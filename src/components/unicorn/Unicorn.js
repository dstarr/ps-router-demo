import React from 'react';
import Link from "react-router-dom/es/Link";
import {Route} from "react-router-dom";

const Unicorn = ({match}) => {

    return (
        <div>
            <h1>Unicorn Love</h1>
            <h4>
                <Link to={`${match.url}`}>Left</Link>
                {' | '}
                <Link to={`${match.url}/arg`}>Right</Link>
            </h4>

            <Route path={`${match.url}/arg`} children={({match}) => {

                let face = match ? 'right' : 'left';

                return (<img src={`/assets/unicorn_${face}.png`} width={'400px'}/>)
            }}/>

        </div>
    )
};

export default Unicorn;