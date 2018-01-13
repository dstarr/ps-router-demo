import React from 'react';
import {Button} from "react-bootstrap";

class Places extends React.Component {

    constructor(props) {
        super(props);

        let places = [
            {name: 'Ankara, Turkey'},
            {name: 'Boise Idaho'},
            {name: 'Houston, Texas'},
            {name: 'Marquette, Michigan'},
            {name: 'Seattle, Washington'},
            {name: 'Spokane, Washington'},
            {name: 'Waller, Texas'}
        ];

        this.state = {
            places: places,
            newPlace: ''
        };
    }

    render = () => {

        let places = this.state.places.map((place, index) => (
            <li key={index}>{place.name}</li>
        ));

        return <div>
            <h1>Places I've Lived</h1>
            <ul>
                {places}
            </ul>

            <div>
                <input placeholder={'Place name'} type={'text'} onChange={this.onNewPlaceChange} value={this.state.newPlace}/>
                {' '}
                <Button onClick={this.onSubmitNewPlace}>Add</Button>
            </div>

        </div>;
    };

    onNewPlaceChange = (e) => {
        this.setState({
            newPlace: e.target.value
        })
    };

    onSubmitNewPlace = () => {
        let places = this.state.places;
        places.push({name: this.state.newPlace});
        places.sort((a, b) => {

            let placeA = a.name.toLowerCase();
            let placeB = b.name.toLowerCase();

            if(placeA > placeB)
                return 1;

            if(placeB > placeA)
                return -1;

            return 0;
        });

        this.setState({
            places: places,
            newPlace: ''
        });
    };

}

export default Places