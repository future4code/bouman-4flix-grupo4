import { BaseDB } from "./baseDB";
import { Movie } from "../business/entities/movie";

export class MovieDB extends BaseDB {
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

  private mapDbUserToUser(input?: any): Movie | undefined {
    return (
      input &&
      new Movie(
        input.id,
        input.title,
        input.length,
        this.mapDbDateToDate(input.date),//todo: verificar esse erro 
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
}
