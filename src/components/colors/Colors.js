import React from 'react';
import ColorSwatch from "./ColorSwatch";
import {Link, Route} from "react-router-dom";
import SmartColorSwatch from "./SmartColorSwatch";

const Colors = (props) => {

    let style = {
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        marginTop: 15
    };

    let match = props.match;

    return (
        <div style={style}>

            <h2>Colors Home</h2>

            <h3>
                <Link to={'/colors/child'}>/child</Link>
                {' | '}
                <Link to={'/colors/childA'}>/childA</Link>
                {' | '}
                <Link to={'/colors/child1'}>/child1</Link>
                {' | '}
                <Link to={'/colors/00ff00/Smart Component'}>/color/id</Link>

            </h3>


            <div>

                <Route path={`${match.url}/child`}
                       render={() => <ColorSwatch color='#F6817D' text='Component 1'/>}/>

                <Route path={`${match.url}/child*`}
                       render={() => <ColorSwatch color='#8FABF6' text='Component 2'/>}/>

                <Route path={`${match.url}/:color/:text`}
                       render={() => <SmartColorSwatch/>}/>

                <Route path={`${match.url}/:child`}
                       render={() => <ColorSwatch color='#cfcfcf' text='Component 3'/>}/>


                <Route render={() => <ColorSwatch color='red' text='Component 404'/>}/>


            </div>
        </div>

    );

};

export default Colors;