import * as TYPES from '../actions/actionTypes';

function peopleReducer(state = [], action) {

    switch (action.type) {

        case TYPES.ADD_PERSON:
            console.log('Reducer fired: ' + TYPES.ADD_PERSON);

            const person = {
                firstName: action.first,
                lastName: action.last,
                occupation: action.occupation
            };

            return state.concat(person);

        case TYPES.DELETE_PERSON:

            return state.filter(person => (person.firstName !== action.first || person.lastName !== action.last));

        default:
            return state;
    }
}

export default peopleReducer