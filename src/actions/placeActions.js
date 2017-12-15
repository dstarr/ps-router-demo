import * as TYPES from "./actionTypes";

export function addPlace(placeName) {
    console.log('addPlace Action fired');
    return {
        type: TYPES.ADD_PLACE,
        name: placeName
    }
}

export function deletePlace(placeName) {

    console.log('deletePlace Action fired: ' + placeName);

    return {
        type: TYPES.DELETE_PLACE,
        name: placeName
    }
}

export function editPlace() {
    console.log('editPlace Action fired');
    return {
        type: TYPES.EDIT_PLACE
    }
}

export function updatePlace() {
    console.log('updatePlace Action fired');
    return {
        type: TYPES.UPDATE_PLACE
    }
}