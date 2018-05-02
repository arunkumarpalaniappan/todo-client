import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function getQuoteofTheDayReducer(state = initialState.quote, action) {
    switch(action.type) {
        case types.REQUEST_QUOTE_SUCCESS:
            return action.quote;
        default:
            return state;
    }
}