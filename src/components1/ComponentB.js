import React from 'react';
import {Link, Route} from "react-router-dom";
import ColorSwatch from "./ColorSwatch";

const ComponentB = ({match}) => {

    let style = {
        backgroundColor: '#99F689',
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid'
    };

    return (
        <div style={style}>
            <h2>Component B</h2>

            <Link to={'/routeB/child'}>Child Component</Link>
            {' | '}
            <Link to={'/routeB/childB'}>Child ComponentB</Link>

            <Route path={match.url + '/childB'}
                   render={() => <ColorSwatch color='#F6817D' text='Child of ComponentB'/>}/>
            <Route path={match.url + '/child*'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component RegEx'/>}/>
            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component'/>}/>
            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component'/>}/>
            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component'/>}/>
        </div>
    );

};

export default ComponentB;