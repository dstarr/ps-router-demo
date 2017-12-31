import React from 'react';
import ColorSwatch from "./ColorSwatch";
import {Link, Route, Switch, withRouter} from "react-router-dom";

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
                <Link to={'/colors/child'}>Link 1: /child</Link>
                {' | '}
                <Link to={'/colors/childA'}>Link 2: /childA</Link>
                {' | '}
                <Link to={'/colors/child1'}>Link 3: /child1</Link>
                {' | '}
                <Link to={'/colors/00ff00/Smart Component'}>Link 4: /child/foo/foo</Link>

            </h3>


            <div>

                <Switch>
                    <Route path={match.url + '/child'}
                           render={() => <ColorSwatch color='#F6817D' text='Component 1'/>}/>

                    <Route path={match.url + '/child*'} exact={true}
                           render={() => <ColorSwatch color='#8FABF6' text='Component 2'/>}/>

                    <Route path={match.url + '/:child'} exact={true}
                           render={() => <ColorSwatch color='#cfcfcf' text='Component 3'/>}/>

                    <Route render={() => <ColorSwatch color='red' text='Component 4'/>}/>
                </Switch>


            </div>
        </div>

    );

};

export default withRouter(Colors);