import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className='header'>
            <Link to={'/'}>
                <img src={"/assets/Retro_Pluralsight_White.png"} className={'headerLogo'}/>
            </Link>
        </div>
    );

}

export default Header;

