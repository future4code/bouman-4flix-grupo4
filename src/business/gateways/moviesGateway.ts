import { Movie } from '../entities/movie'

export interface MoviesGateway{
    createMovie(movie: Movie): Promise<void>
}