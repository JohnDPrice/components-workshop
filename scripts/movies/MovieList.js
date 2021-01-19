import {useMovie} from "./MovieListDataProvider.js"
import {Movie} from "./Movie.js"

let movieContainer = document.querySelector("#movie-container");

export function MovieCard() {
    const allTheMovies = useMovie()

    let movieListHTMLString= ""
    for(const currentMovieInLoop of allTheMovies) {
        movieListHTMLString += Movie(currentMovieInLoop)
    }

    movieContainer.innerHTML = `${movieListHTMLString}`
}