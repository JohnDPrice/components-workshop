import {useMovie} from "./MovieListDataProvider.js"
import {Movie} from "./Movie.js"

let movieContainer = document.querySelector("#movie-container");

export function MovieCard() {
    const allTheMovies = useMovie()

    let movieListHTMLString= ""
    for(const currentMovieInLoop of allTheMovies) {
        console.log(currentMovieInLoop)
        movieListHTMLString += Movie(currentMovieInLoop)
    }

    console.log(movieListHTMLString)
    movieContainer.innerHTML = `<h1 class="movie-list-heading">List of Movies</h1>${movieListHTMLString}`
}