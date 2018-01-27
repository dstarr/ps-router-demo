import React from "react";
import {Link} from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className={'leftNavContainer'}>
            <Link to='/' className='navLink'>Home</Link>
        </div>
    );
};

export default Sidebar;