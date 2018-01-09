import React from 'react';
import {NavLink} from "react-router-dom";


const NavLinks = () => {

    const links = [
        { name: 'Home', url: '/'},
        { name: 'Colors', url: '/colors'},
        { name: 'Prompt', url: '/prompt'},
        { name: 'People', url: '/people'},
        { name: 'Protected', url: '/protected'},
        { name: 'Recurse', url: '/recurse/F15B2A/Parent'},
        { name: 'History', url: '/history'},
        { name: 'Unicorn', url: '/unicorn'},
        { name: 'Not Found', url: '/404'}
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