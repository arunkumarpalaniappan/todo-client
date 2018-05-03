import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function visibilityFilterReducer(state = initalState.filter,action) {
    switch(action.type) {
        case types.UPDATE_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}