import React from 'react';
import ColorSwatch from "./ColorSwatch";
import {Link, Route, Switch} from "react-router-dom";
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
                <Link to={'/colors/child/foo'}>/child/foo</Link>
                {' | '}
                <Link to={'/colors/childA'}>/childA</Link>
                {' | '}
                <Link to={'/colors/child1/'}>/child1</Link>
                {' | '}
                <Link to={'/colors/child/00ff00/Green Component'}>/child/:color/:text</Link>
                {' | '}
                <Link to={'/colors/404/404/404/404/'}>/404</Link>


            </h3>


            <div>

                <Switch>
                    <Route path={`${match.url}/child/:color/:text`}
                           render={() => <SmartColorSwatch/>}/>

                    <Route path={`${match.url}/child`} exact={true}
                           render={() => <ColorSwatch color='#F6817D' text='Component 1'/>}/>

                    <Route path={`${match.url}/child/*`}
                           render={() => <ColorSwatch color='#8FABF6' text='Component 2'/>}/>

                    <Route path={`${match.url}/:child`} exact={true}
                           render={() => <ColorSwatch color='#cfcfcf' text='Component 3'/>}/>

                    <Route render={() => <ColorSwatch color='red' text='Component 404'/>}/>
                </Switch>


            </div>
        </div>

    );

};

export default Colors;