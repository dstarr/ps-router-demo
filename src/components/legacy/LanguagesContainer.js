import React from 'react';
import request from 'superagent'
import Languages from "../people/Languages";

class LanguagesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: []
        };
    }

    componentDidMount = () => {
        request
            .get('/assets/languageData.json')
            .end((err, res) => {
                if (err) {
                    console.log('ERROR CODE: ' + err.response);
                    return;
                }

                const json = JSON.parse(res.text);

                this.setState({
                    languages: json.itemListElement
                });
            });

    };

    render = () => {

        return (
            <Languages languages={this.state.languages}/>
        );
    }
}

export default LanguagesContainer;