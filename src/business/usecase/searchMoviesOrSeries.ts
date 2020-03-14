import { MoviesGateway } from '../gateways/moviesGateway'
import { SeriesGateway } from '../gateways/seriesGateway'

export class SearchMoviesOrSeriesUC {
  constructor(
    private moviesGateway: MoviesGateway,
    private seriesGateway: SeriesGateway,
  ) { }

  public async execute(input: searchUCInput): Promise<searchUCOutput> {

    if (input.query.length > 0) {
      await this.moviesGateway.searchMovie(input)
      const teste = await this.seriesGateway.searchSeries(input) // Continuar aqui!

      return {
        message: teste
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
  message: string | any; // Mudar aqui!
} 