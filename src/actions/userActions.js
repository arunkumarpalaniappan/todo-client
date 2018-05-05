import * as types from './actionTypes';
import userApi from '../api/userApi';

export function login(user) {
    return function(dispatch) {
        return userApi.login(user)
            .then(response => {
                dispatch(loginSuccess(response))
            })
            .catch(err => {
                throw(err);
            })
    }
}

export function loginSuccess(token) {
    return {type: types.LOGIN_SUCCESS, token};
}