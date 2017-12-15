import {combineReducers} from 'redux';
import countReducer from './countReducer';
import peopleReducer from "./peopleReducer";
import placesReducer from "./placesReducer";


const rootReducer = combineReducers({
    people: peopleReducer,
    places: placesReducer,
    count: countReducer
});

export default rootReducer;