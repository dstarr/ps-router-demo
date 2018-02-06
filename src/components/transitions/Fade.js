import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import LoremNumber from "./LoremNumber";
import {CSSTransition, TransitionGroup} from 'react-transition-group'


const Fade = ({match, location}) => {

    console.log(match.url);

    return (
        <div>
            <h4>
                <ul style={styles.navBar}>
                    <li style={styles.tab}><Link to={`${match.url}/1`}>Lorem 1</Link></li>
                    <li style={styles.tab}><Link to={`${match.url}/2`}>Lorem 2</Link></li>
                    <li style={styles.tab}><Link to={`${match.url}/3`}>Lorem 3</Link></li>
                </ul>
            </h4>

            <TransitionGroup>
                <CSSTransition key={location.key} classNames={'fade'} timeout={500}>
                    <Switch location={location}>
                        <Route path={`${match.url}`} component={LoremNumber} exact/>
                        <Route path={`${match.url}/:id`} component={LoremNumber}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        </div>
    );
};

let styles = {};

styles.tab = {
    flex: 1,
    listStyleType: 'none',
    padding: '10px',
    textAlign: 'center',
};

styles.navBar = {
    display: 'flex',
    height: '40px',
    margin: 0,
    padding: 0,
    top: 0,
    width: '100%',
};

export default Fade;