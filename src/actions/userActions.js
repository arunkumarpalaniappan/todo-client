import * as types from './actionTypes';
import userApi from '../api/userApi';

export function login(user) {
    return function(dispatch) {
        return userApi.login(user)
            .then(response => {
                if(response.token)
                    dispatch(loginSuccess(response.token))
                else
                    dispatch(loginFailure())
            })
            .catch(err => {
                throw(err);
            })
    }
}

export function get(token) {
    return function(dispatch) {
        return userApi.get(token)
        .then(response => {
            dispatch(getTodoSuccess(response))
        })
        .catch(err => {
            throw(err);
        })
    }
}

export function loginSuccess(token) {
    return {type: types.LOGIN_SUCCESS, token};
}

export function loginFailure() {
    return {type: types.LOGIN_FAILED};
}

export function getTodoSuccess(todos) {
    return {type: types.GET_TODO, todos};
}