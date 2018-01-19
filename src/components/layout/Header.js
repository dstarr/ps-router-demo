import React from 'react';
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

const Header = () => {

    return (
        <header className='header'>
            <Link to={'/'}>
                <Image src={"/assets/Retro_Pluralsight_White.png"} className={'header-logo'} />
            </Link>

            <div className={'header-text'}>
                React Router
            </div>

        </header>
    );
};

export default Header;

