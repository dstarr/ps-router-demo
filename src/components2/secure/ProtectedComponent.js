import React from 'react';
import {Link, Route} from "react-router-dom";
import ColorSwatch from '../../components1/ColorSwatch'

const ProtectedComponent = () => {

    const leftDivStyle = {
        display: 'inline'
    };

    return (

        <div>
            <div style={leftDivStyle}>
            <h1>Protected Information.</h1>

           <ul>
               <li><Link to={'/protected/a'}>Protected Document A</Link></li>
               <li></li>
               <li></li>
               <li></li>
           </ul>

            <p><Link className='btn btn-primary' to={'/logout'}>Sign Out</Link></p>
            </div>

            <div>
                <Route to={'/protected/a'} render={() => {
                    return <ColorSwatch color={'#cecece'} text="Protected Document A"/>
                }}/>

                <Route to={'/protected/b'} render={() => {
                    return <ColorSwatch color={'#ffcece'} text="Protected Document B"/>
                }}/>
            </div>
        </div>


    );
};

export default ProtectedComponent