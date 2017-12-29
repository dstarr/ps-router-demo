import React from 'react';
import request from 'superagent'
import Languages from "../components2/Languages";
import PersonProfile from "../components2/PersonProfile";

class PersonProfileContainer extends React.Component {

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
                if(err) {
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
            <PersonProfile languages={this.state.languages} />
        );
    }
}

export default PersonProfileContainer;