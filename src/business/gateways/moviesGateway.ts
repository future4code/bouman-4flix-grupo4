import { Movie } from '../entities/movie'
import { searchUCInput } from '../usecase/searchMoviesOrSeries';

export interface MoviesGateway {
    createMovie(movie: Movie): Promise<void>
    getMovieById(id: string): Promise<Movie | undefined>
    searchMovie(input: searchUCInput): Promise<Movie | undefined>;
}