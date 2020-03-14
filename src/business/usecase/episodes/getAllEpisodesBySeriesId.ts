import { Episode } from "../../entities/episode";
import { EpisodesGateway } from "../../gateways/episodesGateway";

export class GetAllEpisodesBySeriesIdUC {
  constructor(private episodesGateway: EpisodesGateway) { }

  public async execute(
    input: GetAllEpisodesBySeriesIdInput
  ): Promise<GetAllEpisodesBySeriesIdOutput> {
    const episodes = await this.episodesGateway.getAllEpisodesBySeriesId(
      input.series_id
    );
    return {
      episodes: episodes.map(
        (episode: {
          getId: () => any;
          getTitle: () => any;
          getPicture: () => any;
          getSynopsis: () => any;
        }) => ({
          id: episode.getId(),
          title: episode.getTitle(),
          picture: episode.getPicture(),
          synopsis: episode.getSynopsis()
        })
      )
    };
  }
}

export interface GetAllEpisodesBySeriesIdInput {
  series_id: string;
}

export interface GetAllEpisodesBySeriesIdOutput {
  episodes: GetAllEpisodesBySeriesIdOutputEpisode[];
}

export interface GetAllEpisodesBySeriesIdOutputEpisode {
  id: string;
  title: string;
  picture: string;
  synopsis: string;
}
