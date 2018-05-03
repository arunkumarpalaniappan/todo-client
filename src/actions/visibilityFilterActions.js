import * as types from './actionTypes';

export function visibilityFilter(filter) {
    return function (dispatch) {
        dispatch(visibilityFilterUpdate(filter))
    }
}

export function visibilityFilterUpdate(filter) {
    return {type: types.UPDATE_VISIBILITY_FILTER, filter}
}