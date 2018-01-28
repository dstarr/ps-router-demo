import React from "react";
import {Link} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <Link to='/' className='navLink'>Home</Link><br/>
            <Link to='/propview' className='navLink'>Prop Viewer</Link><br/>
        </div>
    );
};

export default Sidebar;