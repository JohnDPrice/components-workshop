export function Movie(movieObject) {
    return `<section class="movie-card">
    <h2>${movieObject.title}</h2>
    <h3>${movieObject.director}</h3>
    <img src="${movieObject.image}"/>
      <p>Rank: ${movieObject.rank}</p>
    </section>`
}