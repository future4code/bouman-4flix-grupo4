import { MoviesGateway } from '../gateways/moviesGateway'
import { SeriesGateway } from '../gateways/seriesGateway'

export class SearchMoviesAndSeriesUC {
  constructor(
    private moviesGateway: MoviesGateway,
    private seriesGateway: SeriesGateway,
  ) { }

  public async execute(input: searchUCInput): Promise<searchUCOutput> {
    const query = input.query

    if (query) {
      const movies = await this.moviesGateway.searchMovies(query)
      const series = await this.seriesGateway.searchSeries(query)

      const moviesList = movies?.map(movie => ({...movie, type: "movie"}))
      const seriesList = series?.map(series => ({...series, type: "series"}))

      return {
        message: [{series: seriesList}, {movies: moviesList}]
        // OBSERVAÇÃO: Não deu pra testar porque eu não conseguia mais me conectar com o banco.
        // Erro: "connect ECONNREFUSED 18.229.236.15:3306"
      }

    } else {
      return {
        message: "Enter a search term"
      }
    }
  }
}

export interface searchUCInput {
  query: string
  minLength?: number,
  maxLength?: number
}

export interface searchUCOutput {
  message: string | object;
  // DÚVIDA: Pode fazer isso?
}