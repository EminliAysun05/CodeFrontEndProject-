const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get("id");
const getData = async () => {
  console.log(id);

  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

  const movie = await response.json();

  const output = document.querySelector(".container");

  output.innerHTML = `   <div class="movie-header">
            <img src="${movie.image.original}" alt="${movie.name}" class="movie-poster">
            <div class="movie-info">
                <h1>${movie.name}</h1>
                <div class="tags">
                    <span class="tag">${movie.genres}</span>
                    <span class="tag">${movie.genres}</span>
                    <span class="tag">2023</span>
                    <span class="tag">50:38</span>
                    <span class="tag">8.5</span>
                </div>
                <p class="description">
                  ${movie.summary}
                </p>
                <div class="details">
                    <p><strong>Country:</strong> ${movie.network.country.name}</p>
                    <p><strong>Genre:</strong> Drama, Science Fiction</p>
                    <p><strong>Date Release:</strong> May 05, 2023</p>
                    <p><strong>Production:</strong> AMC Studios</p>
                    <p><strong>Cast:</strong> Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones, David Oyelowo</p>
                </div>
                <button class="favorite-button">+ Add to Favorite</button>
            </div>
        </div>

  `;

  console.log(json);
};

getData();
