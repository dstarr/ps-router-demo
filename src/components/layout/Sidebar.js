import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink exact to='/' activeClassName='activeNavLink' className='navLink'>Home</NavLink><br/>
            <NavLink to='/propview' activeClassName='activeNavLink' className='navLink'>Prop Viewer</NavLink><br/>
        </div>
    );
};

export default Sidebar;