import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";


const NavLinks = () => {

    const links = [
        {name: 'Home', url: '/'},
        {name: 'Colors', url: '/colors'},
        {name: 'Prompt', url: '/prompt'},
        {name: 'People', url: '/people'},
        {name: 'Location', url: '/location'},
        {name: 'Protected', url: '/protected'},
        {name: 'Recurse', url: '/recurse/F15B2A/Parent'},
        {name: 'Logging Link', url: '/logging'},
        {name: 'Not Found', url: '/404'},
        {name: 'Testing', url: '/testing'}
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'} to={link.url}>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <div>
            <ul>
                {linksComponents}
            </ul>
            <Link to={'/unicorn'}>
                <Image src={'/assets/unicorn.png'} className={'unicorn'}/>
            </Link>
        </div>
    );
};

export default NavLinks;