let PORT = 3000;

//Inject the data from the database into the HTML

function injectInto(container, data) {
  data.forEach((element) => {
    container.innerHTML += `
      <div class="card mb-3 limit-width">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${window.location.protocol}//${window.location.hostname}:${PORT}/${element.cover}" class="img-fluid rounded-start" alt="Image not found">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.description}</p>
                  <p class="card-text text-muted">Type : ${element.type}</p>
                  <p class="card-text"><small class="text-muted">Release date : ${dateFormat(element.release_date)}</small></p>
                </div>
              </div>
            </div>
        </div>
      `
  })
}

// Takes the strange date incoming from the database and format it to a readable one
function dateFormat(date) {
  return date.split('T')[0].split('-').reverse().join('/')
}

//Error card to be spawned when there is an error

function errorCard(msg, container){
  container.innerHTML = `
  <div class="card text-white bg-danger mb-3">
    <div class="card-header text-center">Error</div>
    <div class="card-body">
      <p class="card-text">${msg}</p>
    </div>
  </div>
  `
}

// Funtcion to post a book to the backend