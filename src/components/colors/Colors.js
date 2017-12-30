import React from 'react';
import ColorSwatch from "./ColorSwatch";
import {Link, Route, Switch, withRouter} from "react-router-dom";

const Colors = (props) => {

    console.log(props.match.url);

    let style = {
        backgroundColor: '#99F689',
        textAlign: 'center',
        padding: 20,
        borderColor: '#000000',
        borderStyle: 'solid',
        marginTop:15
    };

    let match = props.match;

    return (
        <div style={style}>

            <h2>Colors Home</h2>

            <Link to={'/colors/child'}>/child Component</Link>
            {' | '}
            <Link to={'/colors/childB'}>/child Component RegEx</Link>
            {' | '}
            <Link to={'/colors/child1'}>/child1 Component RegEx</Link>

            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#F6817D' text='/child of Home'/>}/>
            <Route path={match.url + '/child*'}
                   render={() => <ColorSwatch color='#8FABF6' text='/child* Wildcard'/>}/>
            <Route path={match.url + '/child\d'}
                   render={() => <ColorSwatch color='#8FABF6' text='Number Regex'/>}/>
            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component'/>}/>
            <Route path={match.url + '/child'}
                   render={() => <ColorSwatch color='#8FABF6' text='Child Component'/>}/>
        </div>

    );
};

export default withRouter(Colors);