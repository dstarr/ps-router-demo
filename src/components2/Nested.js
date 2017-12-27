import React from 'react';
import Lorem from "./Lorem";
import {NavLink, Route, Switch} from "react-router-dom";

const Nested = () => {
    return (
        <div>
            <div className={'leftNavNested'}>
                <ul>
                    <li className={'nav'}>
                        <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/nested/A'}>Option A</NavLink>
                    </li>
                    <li className={'nav'}>
                        <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/nested/B'}>Option B</NavLink>
                    </li>
                    <li className={'nav'}>
                        <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/nested/C'}>Option C</NavLink>
                    </li>
                    <li className={'nav'}>
                        <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/nested/D'}>Option D</NavLink>
                    </li>
                </ul>
            </div>

            <div className={'rightNestedContentContainer'}>

                <Switch>

                    <Route path={'/nested/:name'} render={({match}) => {
                        return <Lorem title={'Option ' + match.params.name} />
                    }}/>

                    <Route path={'/nested'} render={() => {
                    return <Lorem title={'Nested Home'} />
                }}/>
                </Switch>

            </div>
        </div>
    );
};

export default Nested