import React from 'react';
import Lorem from "../testing/Lorem";
import {NavLink, Route, Switch} from "react-router-dom";

const Articles = ({match}) => {


    let nav = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((letter, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/articles/' + letter}>Article {letter}</NavLink>
            </li>)

    });


    return (
        <div>
            <div className={'leftNavNested'}>
                <ul>
                    <li className={'nav'}>
                        <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/articles'}>Home</NavLink>
                    </li>
                    {nav}
                </ul>
            </div>

            <div className={'rightNestedContentContainer'}>
                <Switch>
                    <Route path={`/articles/:letter`} render={({match}) => {
                        return <Lorem match={match} title={'Article ' + match.params.letter}/>
                    }}/>
                    <Route path={'/articles'} component={Lorem}/>
                </Switch>
            </div>
        </div>
    );
};

export default Articles