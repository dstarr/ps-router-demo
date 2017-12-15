import * as TYPES from '../actions/actionTypes';

function countReducer(state, action) {

    switch (action.type) {

        case TYPES.INCREMENT_COUNT:

            return state + 1;

        case TYPES.DECREMENT_COUNT:

            return state - 1;

        default:

            if(state === undefined)
                return null;

            return state;
    }
}

export default countReducer;