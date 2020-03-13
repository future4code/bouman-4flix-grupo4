import { BaseDB } from "./baseDB";
import { Episode } from "../business/entities/episode";
import { EpisodesGateway } from "../business/gateways/episodesGateway";

export class EpisodesDB extends BaseDB implements EpisodesGateway {
  private episodeTableName = "EPISODES_TABLE";

  private mapDbEpisodeToEpisode(input?: any): Episode | undefined {
    return (
      input &&
      new Episode(
        input.id,
        input.title,
        input.length,
        input.link,
        input.picture,
        input.synopsis,
        input.series_id,
      )
    );
  }

  public async createEpisode(episode: Episode, id: string): Promise<void> {
    let query = episode.getPicture()
      ? `INSERT INTO ${
          this.episodeTableName
        } (id, title, length, link, picture, synopsis, series_id)
            VALUES(
              '${episode.getId()}',
              '${episode.getTitle()}',
              '${episode.getLength()}',
              '${episode.getLink()}',
              '${episode.getPicture()}',
              '${episode.getSynopsis()}',
              '${id}'
            );`
      : `INSERT INTO ${
          this.episodeTableName
        } (id, title, length, link, synopsis, series_id)
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

  public async getAllEpisodesBySerieId(series_id:string): Promise<Episode[]>{
      const result = await this.connection.raw(`
        SELECT * FROM ${this.episodeTableName} WHERE series_id='${series_id}'
      `)

      return result[0].map((res:any) => this.mapDbEpisodeToEpisode(res)!)
  }
}
