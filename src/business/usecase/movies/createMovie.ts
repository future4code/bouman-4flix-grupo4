import { v4 } from "uuid";
import { Movie } from "../../entities/movie";
import { MoviesGateway } from "../../gateways/moviesGateway"


export class CreateMovieUC {
  constructor(private moviesGateway: MoviesGateway) { }

  public async execute(
    input: CreateMovieUCInput
  ): Promise<CreateMovieUCOutput> {
    const id = v4();

    const movie = new Movie(
      id,
      input.title,
      new Date(input.date),
      input.length,
      input.synopsis,
      input.link,
      input.picture
    );

    await this.moviesGateway.createMovie(movie)

    return {
      message: "Movie created successfully"
    }
  }
}

export interface CreateMovieUCInput {
  title: string;
  date: Date;
  length: number;
  synopsis: string;
  link: string;
  picture: string;
}

export interface CreateMovieUCOutput {
  message: string;
}
