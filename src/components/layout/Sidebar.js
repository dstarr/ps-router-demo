import React from "react";
import {NavLink} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <NavLink exact to='/' activeClassName='activeNavLink' className='navLink'>Home</NavLink><br/>
            <NavLink to='/propview' activeClassName='activeNavLink' className='navLink'>Prop Viewer</NavLink><br/>
            <NavLink to='/404Error' activeClassName='activeNavLink' className='navLink'>Page Not Found</NavLink><br/>
        </div>
    );
};

export default Sidebar;