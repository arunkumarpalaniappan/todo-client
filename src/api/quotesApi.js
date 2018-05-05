import {quotes as api} from '../config'
class quotes {
    static qod() {
        return fetch(`${api.ssl?'https://':'http://'}${api.host}:${api.port}/qod`)
            .then((response) => response.json())
            .then((json) => json)
            .catch((ex) => ex)
    }
}

export default quotes