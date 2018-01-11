import React from 'react';
import PropTypes from 'prop-types';
import Link from "react-router-dom/es/Link";
import {withRouter} from "react-router-dom";

const Languages = (props) => {


    let languages = props.languages.map((lang, index) => {
        return (
            <li key={index}><a href={lang.item.id}>{lang.item.name}</a></li>
        );
    });

    let letters = [];
    let letterLinks = props.languages.map((lang, index) => {

        let letter = lang.item.name.substring(0, 1);
        if (!letters.includes(letter.toUpperCase())) {
            letters.push(letter);

            return (<span style={spanStyle} key={index}>
                        <Link to={props.match.url + '/' + letter}>{letter.toUpperCase()}</Link>
                    </span>);
        }
    });

    const spanStyle = {
        marginLeft: 5,
        marginRight: 5
    };

    return (
        <div>
            <h1>Programming Languages</h1>

            <h4>{letterLinks}</h4>

            <ul>
                {languages}
            </ul>
        </div>
    );
};

Languages.PropTypes = {
    languages: PropTypes.array.isRequired
};

export default withRouter(Languages);