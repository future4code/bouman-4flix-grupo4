import { Movie } from '../entities/movie'

export interface MoviesGateway {
    createMovie(movie: Movie): Promise<void>
    getMovieById(id: string): Promise<Movie | undefined>
    searchMovies(query: string): Promise<Movie[] | undefined>;
}