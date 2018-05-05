import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function userReducer(state = initialState.user, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return [
                ...state,
                {
                    auth: action.token
                }
            ]
        default:
            return state
    }
}