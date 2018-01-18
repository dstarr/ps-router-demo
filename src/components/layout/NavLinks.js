import React from 'react';
import {NavLink} from "react-router-dom";


const NavLinks = () => {

    const links = [
        { name: 'Home', url: '/'},
        { name: 'Colors', url: '/colors'},
        { name: 'Prompt', url: '/prompt'},
        { name: 'People', url: '/people'},
        { name: 'Location', url: '/location'},
        { name: 'Protected', url: '/protected'},
        { name: 'Recurse', url: '/recurse/F15B2A/Parent'},
        { name: 'Unicorn', url: '/unicorn'},
        { name: 'Logging Link', url: '/logging'},
        { name: 'Not Found', url: '/404'},
        { name: 'Testing', url: '/testing'}
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