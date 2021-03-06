import { BaseDB } from "./baseDB";
import { Series } from "../business/entities/series";
import { SeriesGateway } from "../business/gateways/seriesGateway";

export class SeriesDB extends BaseDB implements SeriesGateway {
  private seriesTableName = "SERIES_TABLE";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapDbSeriesToSeries(input?: any): Series | undefined {
    return (
      input &&
      new Series(
        input.id,
        input.title,
        this.mapDbDateToDate(input.date),
        input.synopsis,
        input.link,
        input.picture,
        input.episodes
      )
    );
  }

  public async createSeries(series: Series): Promise<void> {
    let query = series.getPicture()
      ? `INSERT INTO ${this.seriesTableName} (id, title, date, synopsis, link, picture)
      VALUES(
        '${series.getId()}',
        '${series.getTitle()}',
        STR_TO_DATE('${this.mapDateToDbDate(series.getDate())}', '%Y-%m-%d'),
        '${series.getSynopsis()}',
        '${series.getLink()}',
        '${series.getPicture()}'
      );`
      : `INSERT INTO ${this.seriesTableName} (id, title, date, synopsis, link)
      VALUES(
        '${series.getId()}',
        '${series.getTitle()}',
        STR_TO_DATE('${this.mapDateToDbDate(series.getDate())}', '%Y-%m-%d'),
        '${series.getSynopsis()}',
        '${series.getLink()}'
      );`;

    await this.connection.raw(query);
  }

  public async getSeriesById(id: string): Promise<Series | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.seriesTableName} WHERE id='${id}'
    `)
    return this.mapDbSeriesToSeries(result[0][0])
  }

  public async searchSeries(query: string): Promise<Series[] | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.seriesTableName}
      WHERE title LIKE '%${query}%'
      OR synopsis LIKE '%${query}%';
    `)

    return result[0];
  }

}