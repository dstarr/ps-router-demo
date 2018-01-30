import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

const LetterList = (props) => {

    const spanStyle = {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 20
    };

    let letters = [];
    let letterLinks = props.languages.map((lang, index) => {

        let letter = lang.item.name.substring(0, 1).toUpperCase();
        if (!letters.includes(letter)) {
            letters.push(letter);

            const linkUri = `${props.match.url}/languages/${letter}?name=${props.name}&occupation=${props.occupation}`;

            return (<span style={spanStyle} key={index}>
                        <Link to={linkUri}>{letter}</Link>
                    </span>);
        }
    });

    return (
        <div>
            {letterLinks}
        </div>
    );

};

LetterList.propTypes = {
    languages: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired
};

export default withRouter(LetterList);