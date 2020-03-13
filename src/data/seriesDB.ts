import { BaseDB } from "./baseDB";
import { Series } from "../business/entities/series";
import { Episode } from "../business/entities/episode";
import { SeriesGateway } from "../business/gateways/seriesGateway";

export class SeriesDB extends BaseDB implements SeriesGateway {
  private seriesTableName = "SERIES_TABLE";
  private episodeTableName = "EPISODES_TABLE"

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
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

  public async createEpisode(episode: Episode, id: string): Promise<void> {
    let query = episode.getPicture()
      ? `INSERT INTO ${this.episodeTableName} (id, title, length, link, picture, synopsis, series_id)
        VALUES(
          '${episode.getId()}',
          '${episode.getTitle()}',
          '${episode.getLength()}',
          '${episode.getLink()}',
          '${episode.getPicture()}',
          '${episode.getSynopsis()}',
          '${id}'
        );`
      : `INSERT INTO ${this.episodeTableName} (id, title, length, link, synopsis, series_id)
        VALUES(
          '${episode.getId()}',
          '${episode.getTitle()}',
          '${episode.getLength()}',
          '${episode.getLink()}',
          '${episode.getSynopsis()}',
          '${id}'
        );`;

    await this.connection.raw(query);
  }
}
