import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";
import Place from "../components/Place";
import * as actions from '../actions/placeActions'
import AddPlaceContainer from "./AddPlaceContainer";


class PlacesContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            places: props.store.getState().places
        }
    }

    componentDidMount = () => {
        this.props.store.subscribe(this.storeChanged);
    };

    storeChanged = () => {
        this.setState({
            places: this.props.store.getState().places
        });

    };

    onHandleDelete = (e, name) => {
        let action = actions.deletePlace(name);
        this.props.store.dispatch(action);
    };


    render = () => {

        const style = {
            margin: 20,
            padding: 20,
            width: 800,
            backgroundColor: 'FF9B45'

        };

        let places = this.state.places.map((place, index) => (
            <Place key={index}
                   name={place.name}
                   handleDelete={this.onHandleDelete}
            />

        ));

        return (
            <div style={style}>
                <h1>Places</h1>
                <Table striped={false} responsive={true} bordered={false}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {places}
                    </tbody>
                </Table>
                <hr/>
                <AddPlaceContainer store={this.props.store}/>
            </div>
        );
    }
}

PlacesContainer.PropTypes = {
    store: PropTypes.object.isRequired
};

export default PlacesContainer;