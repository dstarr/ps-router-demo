import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <Link to={'/'}>
                <img src={"/assets/Retro_Pluralsight_White.png"} className={'headerLogo'}/>
            </Link>
        </header>
    );
};

export default Header;

