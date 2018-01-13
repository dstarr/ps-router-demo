import React from 'react';
import {Redirect} from "react-router-dom";

class Location extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            renderRedirect: false
        }
    }

    render = () => {

        if(this.state.renderRedirect) {

            let url = {
                pathname: `${this.props.match.url}/reporter`,
                search: '?arg1=value&arg2=value',
                hash: 'anchorLink',
                state: { fromHomePage: true }
            };

            return <Redirect to={url}/>
            // return <Redirect push to={url}/> // pushes a new entry onto the history stack instead of replacing it
            // return <Redirect to={`${this.props.match.url}/reporter`} />
        }

        return (

            <div>
                <h2>Location Operations</h2>
                <ul>
                    <li><a onClick={this.goBack}>Go Back</a></li>
                    <li><a onClick={this.renderRedirect}>Redirect Me</a></li>
                </ul>


            </div>
        );
    };

    goBack = () => {
        this.props.history.goBack();
    };

    renderRedirect = () => {
        this.setState({
            renderRedirect: true
        })
    };
}

export default Location;