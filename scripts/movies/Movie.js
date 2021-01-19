export function Movie(movieObject) {
    return `<section class="movie-card">
    <h2 class="movie-title">${movieObject.title}</h2>
    <h3 clas="movie-director">${movieObject.director}</h3>
    <img class="movie-img" src="${movieObject.image}"/>
      <p class="movie-rank">Rank: ${movieObject.rank}</p>
    </section>`
}