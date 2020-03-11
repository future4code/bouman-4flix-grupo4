import { BaseDB } from "./baseDB";
import { Movie } from "../business/entities/movie";

export class MovieDB extends BaseDB{
    private movieTableName = "MOVIES_TABLE"

    public async createMovie(movie: Movie): Promise<void>{
        let query = movie.getPicture()
        ? `
        INSERT INTO ${
          this.movieTableName
        } (id, title, date, length, synopsis, link, picture)
        VALUES(
        '${movie.getId()}',
        '${movie.getTitle()}',
        '${movie.getDate()}',
        '${movie.getLength()}',
        '${movie.getSynopsis()}',
        '${movie.getLink()}',
        '${movie.getPicture()}'
        );`
        : `
        INSERT INTO ${this.movieTableName} (id, title, date, length, synopsis, link)
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