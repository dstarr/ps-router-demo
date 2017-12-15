import React from 'react';
import PropTypes from 'prop-types';

class LifecycleMethods extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textToRender: this.props.text
        };

        console.log('constructor');
    }

    componentWillMount = () => { console.log('componentWillMount'); };

    componentDidMount = () => { console.log('componentDidMount'); };

    componentWillReceiveProps = () => { console.log('componentWillReceiveProps'); };

    shouldComponentUpdate = () => {
        console.log('shouldComponentUpdate');
        return false;
    };

    componentWillUpdate = () => { console.log('componentWillUpdate'); };

    componentDidUpdate = () => { console.log('componentDidUpdate'); };

    componentWillUnmount = () => { console.log('componentWillUnmount'); };

    componentDidCatch = () => { console.log('componentDidCatch'); };

    render = () => {

        console.log('render');

        return (
            <div>
                <h1>{this.state.textToRender}</h1>
                <button onClick={this.handleUpdatingState}>Update State</button>
                <button onClick={this.nullMe}>Null Me</button>
            </div>
        );
    };

    handleUpdatingState = () => {
        this.setState({
            textToRender: 'Updated the state'
        })
    };

    nullMe = () => {

    }
}

LifecycleMethods.PropTypes = {
    text: PropTypes.string.required
};

export default LifecycleMethods;