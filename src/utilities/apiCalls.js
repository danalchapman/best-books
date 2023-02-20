const API_KEY = process.env.REACT_APP_API_KEY

export const getData = () => {
    const url = ` https://api.nytimes.com/svc/books/v3/lists.json?api-key=${API_KEY}`
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status}`)
            } else {
                return response.json()
            }
        })
}

