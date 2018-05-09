import initialState from './initialState';
import * as types from '../actions/actionTypes';
export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                auth: action.token,
                login: true
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                signup: true
            };
        case types.LOGIN_FAILED:
            return {
                ...state,
                auth: 'failed',
                login: false
            }
        case types.GET_TODO:
            return {
                ...state,
                todos: action.todos.Item.todos.S
            };
        default:
            return state
    }
}