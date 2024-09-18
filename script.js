
 
  async function fetchShows() {
    const response = await fetch('https://api.tvmaze.com/shows');
    const shows = await response.json();

    const container = document.getElementById('shows-container');

 
    shows.sort((a, b) => b.rating.average - a.rating.average).slice(0, 5).forEach((show) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <a href="detail.html?id=${show.id}" class="details">
          <div class="left">
            <p class="name">${show.name}</p>
            <div class="date_quality">
              <p class="quality">HD</p>
              <p class="date">${new Date(show.premiered).getFullYear()}</p>
            </div>
            <p class="category">${show.genres.join('/')}</p>
            <div class="info">
              <div class="rate">
                <i class="fa-solid fa-star"></i>
                <p>${show.rating.average ? show.rating.average : 'N/A'}</p>
              </div>
              <div class="time">
                <i class="fa-regular fa-clock"></i>
                <p>${show.runtime ? show.runtime : 'N/A'}min</p>
              </div>
            </div>
          </div>
          <div class="right">
            <i class="fa-solid fa-play"></i>
          </div>
        </a>
        <img src="${show.image ? show.image.medium : 'image-placeholder.jpg'}" alt="${show.name}">
      `;

      container.appendChild(card);
    });
  }


  fetchShows();


  async function fetchMovies(page) {
    const response = await fetch('https://api.tvmaze.com/shows');
    const movies = await response.json();

    const container = document.getElementById('shows-container1');
    
    movies.slice((page-1)*5, page*5).forEach((movie) => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <a href="detail.html?id=${movie.id}" class="details">
          <div class="left">
            <p class="name">${movie.name}</p>
            <div class="date_quality">
              <p class="quality">HD</p>
              <p class="date">${new Date(movie.premiered).getFullYear()}</p>
            </div>
            <p class="category">${movie.genres.join('/')}</p>
            <div class="info">
              <div class="time">
                <i class="fa-regular fa-clock"></i>
                <p>${movie.runtime ? movie.runtime : 'N/A'}min</p>
              </div>
            </div>
          </div>
          <div class="right">
            <i class="fa-solid fa-play"></i>
          </div>
        </a>
        <img src="${movie.image ? movie.image.medium : 'image/placeholder.jpg'}" alt="${movie.name}">
      `;

      container.appendChild(card);
    });
  }


  var page=1;
  fetchMovies(page);


const loadMoreBtn=document.querySelector(".loadBtn")


loadMoreBtn.addEventListener('click',(e)=>{
e.preventDefault();

page++;
fetchMovies(page)
})


