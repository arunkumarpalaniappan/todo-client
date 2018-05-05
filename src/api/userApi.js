import {
    node as api
} from '../config';
const host = `${api.ssl?'https://':'http://'}${api.host}:${api.port}`;
class user {
    static login(user) {
        return fetch(`${host}/login`, {
                headers: {
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: user
            })
            .then((response) => response.json())
            .then((json) => json)
            .catch((err) => err);
    }
    static signup(user) {

    }
    static create(todo) {

    }
    static get(todo) {

    }
    static update(todo) {

    }
    static delete(todo) {

    }
}

export default user;