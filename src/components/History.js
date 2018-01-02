import React from 'react';

class History extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: props.history
        };
    }

    goForward = () => {
        this.state.history.goForward();
    };

    goBack = () => {
        this.state.history.goBack();
    };

    pushColors = () => {

        let url = {
            pathname: '/colors',
            search: '?the=query',
            state: { some: 'state' }
        }

        this.state.history.push(url)
        // "/colors?the=query"
    };

    render = () => {


        return (
            <div>
                <h2>History Operations</h2>
                <h4>
                    <a href='#' onClick={this.goBack}>Go Back</a>
                    {' | '}
                    <a href='#' onClick={this.goForward}>Go Forward</a>
                    {' | '}
                    Push: <a href='#' onClick={this.pushColors}>/colors into your history.</a>

                </h4>

                <h3>Location: {`${this.props.location.pathname}${this.props.location.search}${this.props.location.hash}`}</h3>

                <p>Time Stamp: {Date.now()}</p>



            </div>
        );
    }
}

export default History