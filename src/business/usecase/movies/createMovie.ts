import { v4 } from "uuid";
import { Movie } from "../../entities/movie";

export class CreateMovieUC {
  constructor(private db: MovieDB) {}

  public async execute(
    input: CreateMovieUCInput
  ): Promise<CreateMovieUCOutput> {
    const id = v4();

    const movie = new Movie(
      id,
      input.title,
      input.date,
      input.length,
      input.synopsis,
      input.link,
      input.picture
    );

    await this.db.createMovie(movie)

    return{
        message: "Movie created Successfully"
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
