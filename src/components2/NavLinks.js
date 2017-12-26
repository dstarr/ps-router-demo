import React from 'react';
import {NavLink} from "react-router-dom";


const NavLinks = () => {

    return (
        <ul>
            <li className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/'} exact>Home</NavLink>
            </li>
            <li className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/people'}>People</NavLink>
            </li>
            <li className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/places'}>Places</NavLink>
            </li>
            <li className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/foo'}>Nope</NavLink>
            </li>
            <li className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={'/protected'}>Protected</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;