import * as TYPES from "./actionTypes";

export function incrementCount() {
    return {
        type: TYPES.INCREMENT_COUNT
    }
}

export function decrementCount() {
    return {
        type: TYPES.DECREMENT_COUNT
    }
}