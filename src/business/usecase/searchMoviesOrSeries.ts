import { MoviesGateway } from '../gateways/moviesGateway'
import { SeriesGateway } from '../gateways/seriesGateway'

export class searchMovieOrSeriesUC {
  constructor(
    private moviesGateway: MoviesGateway,
    private seriesGateway: SeriesGateway,
  ) { }

  public async execute(input: searchMovieOrSeriesUCInput): Promise<searchMovieOrSeriesUCOutput> {
    await this.moviesGateway.createMovie(input)
    await this.seriesGateway.createSeries(input)
    return {
      message: "Series created successfully"
    }
  }
}

export interface searchMovieOrSeriesUCInput {
  query: string
  minLength: number,
  maxLength: number
}

export interface searchMovieOrSeriesUCOutput {
  message: string;
} 