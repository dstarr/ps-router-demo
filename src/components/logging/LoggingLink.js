import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";

class LoggingLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <Link {...this.props}
                  onClick={this.handleClick}
            >{this.props.children}</Link>
        );
    };

    handleClick = () => {

        let urlParts = this.props.to.split('/');
        const eid = urlParts[urlParts.length-1];

        alert('Logging or some other activity would happen here: ' + eid);
    };
}

LoggingLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default withRouter(LoggingLink);