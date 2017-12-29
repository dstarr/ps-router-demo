import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class LanguageList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: []
        };
    }

    componentDidMount = () => {

        const letter = this.props.match.params.letter;
        let languages = this.props.languages;
        let knownLanguages = [];

        for (let i = 0; i < languages.length; i++) {
            if (languages[i].item.name.toUpperCase().startsWith(letter)) {
                knownLanguages.push(languages[i].item);
            }
        }
        this.setState({
            languages: knownLanguages
        });

    };

    render = () => {

        let languages = this.state.languages.map((lang, index) => {
            return <li key={index}><a href={lang.id} target={'_blank'}>{lang.name}</a></li>
        });

        return (
            <div>
                <h1>{this.props.match.params.letter}</h1>
                <ul>
                    {languages}
                </ul>
            </div>
        );
    }
}

LanguageList.PropTypes = {
    languages: PropTypes.array.isRequired,
    letter: PropTypes.array.isRequired
};

export default withRouter(LanguageList);