let sendBook = document.getElementById('submitBook');
let formBook = document.getElementById('addBookForm');


let formData = new FormData(formBook)


sendBook.addEventListener('click', () => {
    fetch(`${window.location.protocol}//${window.location.hostname}:${PORT}/add`, { method: 'POST', body: formData})
});
