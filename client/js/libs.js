function injectInto(container, data) {
    data.forEach((element) => {
        container.innerHTML += `
      <div class="card mb-3 limit-width">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${element.cover}" class="img-fluid rounded-start" alt="Image not found">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.description}</p>
                  <p class="card-text"><small class="text-muted">Date de sortie : ${dateFormat(element.release_date)}</small></p>
                </div>
              </div>
            </div>
        </div>
      `
    })
}

function dateFormat (date) {
  return date.split('T')[0].split('-').reverse().join('/')
}