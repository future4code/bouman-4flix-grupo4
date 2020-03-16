import { BaseDB } from "./baseDB";
import { Movie } from "../business/entities/movie";
import { MoviesGateway } from "../business/gateways/moviesGateway";

export class MovieDB extends BaseDB implements MoviesGateway {
  private movieTableName = "MOVIES_TABLE";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapDbMovieToMovie(input?: any): Movie | undefined {
    return (
      input &&
      new Movie(
        input.id,
        input.title,
        this.mapDbDateToDate(input.date),
        input.length,
        input.synopsis,
        input.link,
        input.picture
      )
    );
  }

  public async createMovie(movie: Movie): Promise<void> {
    let query = movie.getPicture()
      ? `
        INSERT INTO ${
      this.movieTableName
      } (id, title, date, length, synopsis, link, picture)
        VALUES(
        '${movie.getId()}',
        '${movie.getTitle()}',
        STR_TO_DATE('${this.mapDateToDbDate(movie.getDate())}', '%Y-%m-%d'),
        '${movie.getLength()}',
        '${movie.getSynopsis()}',
        '${movie.getLink()}',
        '${movie.getPicture()}'
        );`
      : `
        INSERT INTO ${
      this.movieTableName
      } (id, title, date, length, synopsis, link)
        VALUES(
            '${movie.getId()}',
            '${movie.getTitle()}',
            '${movie.getDate()}',
            '${movie.getLength()}',
            '${movie.getSynopsis()}',
            '${movie.getLink()}'
        );`;

    await this.connection.raw(query);
  }

  public async getMovieById(id: string): Promise<Movie | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.movieTableName} WHERE id='${id}'
    `)
    return this.mapDbMovieToMovie(result[0][0])
  }

  public async searchMovies(query: string): Promise<Movie[] | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.movieTableName}
      WHERE title LIKE '%${query}%'
      OR synopsis LIKE '%${query}%';
    `)

    return result[0];
  }
}