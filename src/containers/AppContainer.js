import React from 'react';
import CountWidgetContainer from "./CountWidgetContainer";
import PropTypes from 'prop-types';
import PeopleContainer from "./PeopleContainer";
import PlacesContainer from "./PlacesContainer";


class AppContainer extends React.Component {

    // <PlacesContainer store={this.props.store}/>
    // <PeopleContainer store={this.props.store}/>

    render = () => {

        return (
            <div align={'center'}>
                <CountWidgetContainer store={this.props.store}/>
                <PeopleContainer store={this.props.store}/>
                <PlacesContainer store={this.props.store}/>

            </div>
        );
    }
}


AppContainer.PropTypes = {
  store: PropTypes.object.isRequired
};

export default AppContainer;




