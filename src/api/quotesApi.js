class quotes {
    static qod() {
        return fetch('https://quotes.rest/qod')
            .then((response) => response.json())
            .then((json) => json)
            .catch((ex) => ex)
    }
}

export default quotes