export const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => data);
}

export const getComment = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => response.json())
        .then(data => data);
}