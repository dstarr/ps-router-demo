import React from 'react';
import {Link} from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    render = () => {

        return (
            <div className='header'>
                <div style={{color: 'white'}} className={'loginLink'}>

                </div>
            </div>
        );
    };
}

export default Header;

