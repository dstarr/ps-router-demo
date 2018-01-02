import React from 'react';
import ColorSwatch from "./ColorSwatch";
import {Link, Route, Switch} from "react-router-dom";
import SmartColorSwatch from "./SmartColorSwatch";

const Colors = ({match}) => {

    let style = {
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        marginTop: 15
    };

    // 1. Show ColorSwatch and the props it wants
    // 2. Show how to render using home and the home route
    // - Use the Home Page "Welcome to" component
    //
    // 1. add links one at a time, hitting a new route with each link
    // 2. Add routes a at a time to meet the requirements of the links
    // 3. Explain every component match

    return (
        <div style={style}>

            <h2>Colors Home</h2>

            <h4>
                <Link to={'/colors'}>Colors Home</Link>
                {' | '}
                <Link to={'/colors/child'}>/child</Link>
                {' | '}
                <Link to={'/colors/child/foo'}>/child/foo</Link>
                {' | '}
                <Link to={'/colors/childA'}>/childA</Link>
                {' | '}
                <Link to={'/colors/child1/'}>/child1</Link>
                {' | '}
                <Link to={'/colors/child/9BC850/Green Component'}>/child/:color/:text</Link>
            </h4>

            <div>

                <Route path={`${match.url}`} exact={true}
                       render={() => <ColorSwatch color='#F15B2A' text='Welcome to Colors'/>}/>

                <Route path={`${match.url}/child`} exact={true}
                       render={() => <ColorSwatch color='#675BA7' text='Component 1'/>}/>

                <Route path={`${match.url}/child/*`}
                       render={() => <ColorSwatch color='#A62E5C' text='Component 2'/>}/>

                <Route path={`${match.url}/child([1-9+])`} exact={true}
                       render={() => <ColorSwatch color='#675BA7' text='Component 3'/>}/>

                <Route path={`${match.url}/child/:color/:text`}
                       render={() => <SmartColorSwatch/>}/>

                <Route path={`${match.url}/:child`} exact={true}
                       render={() => <ColorSwatch color='#9BC850' text='Component 4'/>}/>

            </div>
        </div>

    );
}

export default Colors;