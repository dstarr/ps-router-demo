import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: 'Home', url: '/'},
        {name: 'Color', url: '/color'},
        {name: 'Logging', url: '/logging'},
        {name: 'People', url: '/people'},
        {name: 'Prompt', url: '/prompt'},
        {name: 'Protected', url: '/protected'},
        {name: 'Recursive', url: '/colors/Yellow/FFEC40'},
        {name: 'Transitions', url: '/transitions'},
        {name: 'Smart Color', url: '/color/Green/#00ff00'},
        {name: '404 Error', url: '/404Error'},
    ];

    let linksComponents = links.map((link, index) => {
        return (
            <li key={index} className={'nav'}>
                <NavLink className={'navLink'} activeClassName={'activeNavLink'}
                         to={link.url} exact>{link.name}</NavLink>
            </li>
        );
    });

    return (
        <div className={'leftNavContainer'}>
            <ul>
                {linksComponents}
            </ul>
            <Link to={'/unicorn'}>
                <img src='/assets/unicorn.png' width={100}/>
            </Link>
        </div>
    );
};

export default Sidebar;