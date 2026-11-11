export function api() {
    const url = 'https://6af2e6e842c6561ced399f46.mockapi.io/api/v1/channels'
    return fetch(url)
    .then(res => res.json())
    .then(data => {console.log(data)
        return data
    })
}