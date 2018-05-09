import {
    node as api
} from '../config';
const host = `${api.ssl?'https://':'http://'}${api.host}:${api.port}`;
class user {
    static login(userParams) {
        return fetch(`${host}/login`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(userParams)
            })
            .then((response) => response.json())
            .then((json) => json)
            .catch((err) => err);
    }
    static signup(user) {
        return fetch(`${host}/signup`, {
            headers: {
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((json) => json)
        .catch((err) => err);
    }
    static create(todo) {

    }
    static get(token) {
        return fetch(`${host}/todo`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => json)
        .catch((err) => err);
    }
    static update(todo) {

    }
    static delete(todo) {

    }
}

export default user;