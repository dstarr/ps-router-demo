import React from 'react';
import {NavLink} from "react-router-dom";


const NavLinks = () => {


    const links = [
        { name: 'Home', url: '/'},
        { name: 'Colors', url: '/colors'},
        { name: 'People', url: '/people'},
        { name: 'Nope', url: '/404'},
        { name: 'Protected', url: '/protected'},
        { name: 'Articles', url: '/articles'}
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={link.url}>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <ul>
            {linksComponents}
        </ul>
    );
};

export default NavLinks;