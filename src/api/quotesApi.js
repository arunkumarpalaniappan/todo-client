const config = require('config');
const host = `${config.quotes.ssl?'https://':'http://'}${config.quotes.host}:${config.quotes.port}/`
class quotes {
    static qod() {
        return fetch(`${host}qod`)
            .then((response) => response.json())
            .then((json) => json)
            .catch((ex) => ex)
    }
}

export default quotes