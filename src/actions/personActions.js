import * as TYPES from "./actionTypes";

export function addPerson(first, last, occupation) {

    return {
        type: TYPES.ADD_PERSON,
        first: first,
        last: last,
        occupation: occupation
    }
}

export function deletePerson(first, last) {

    return {
        type: TYPES.DELETE_PERSON,
        first: first,
        last: last
    }
}