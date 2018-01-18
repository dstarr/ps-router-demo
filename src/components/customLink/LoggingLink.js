import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from "react-router-dom";

class LoggingLink extends React.Component {

    constructor(props) {
        super(props);

    }

    handleClick = () => {

        let urlParts = this.props.to.split('/');
        const eid = urlParts[urlParts.length-1];

        alert('Logging: ' + eid);
    };



    render = () => {

        // replace works on the history stack
        return (
            <Link to={this.props.to}
                  replace={this.props.replace}
                  onClick={this.handleClick}
            >{this.props.children}</Link>
        );
    }
}

LoggingLink.propTypes = {
    to: PropTypes.string.isRequired
};

export default withRouter(LoggingLink);