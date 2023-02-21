const bookContainer = document.getElementById('bookContainer');
const api = "http://localhost:3000/api";

function fetchResource(resource) {
    const path = api + '/' + resource;

    return new Promise((resolve, reject) => {
        fetch(path)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => {
                errorCard('There was an error by getting the ressource, please try later', bookContainer);
                reject(error);
            });
    });
}

fetchResource('books').then(response => {
    return response;
})
    .then((all) =>{
        injectInto(bookContainer, all);
    })
.catch(err => { throw err });
