import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    const links = [
        {name: 'Home', url: '/'},
        {name: 'Prop Viewer', url: '/propview'},
        {name: 'Color', url: '/color'},
        {name: 'Smart Color', url: '/color/Green/#00ff00'},
        {name: 'Prompt', url: '/prompt'},
        {name: 'Logging', url: '/logging'},
        {name: 'Protected', url: '/protected'},
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
        </div>
    );
};

export default Sidebar;