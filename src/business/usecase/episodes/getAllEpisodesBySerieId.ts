import { Episode } from "../../entities/episode";
import { EpisodesGateway } from "../../gateways/episodesGateway";

export class GetAllEpisodesBySerieIdUC {
  constructor(private episodesGateway: EpisodesGateway) {}

  public async execute(
    input: GetAllEpisodesBySerieIdInput
  ): Promise<GetAllEpisodesBySerieIdOutput> {
    const episodes = await this.episodesGateway.getAllEpisodesBySerieId(
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

export interface GetAllEpisodesBySerieIdInput {
  series_id: string;
}

export interface GetAllEpisodesBySerieIdOutput {
  episodes: GetAllEpisodesBySerieIdOutputEpisode[];
}

export interface GetAllEpisodesBySerieIdOutputEpisode {
  id: string;
  title: string;
  picture: string;
  synopsis: string;
}
