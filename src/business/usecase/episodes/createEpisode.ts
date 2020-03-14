import { EpisodesGateway } from "../../gateways/episodesGateway";
import { v4 } from "uuid";
import { Episode } from "../../entities/episode";

export class CreateEpisodeUC {
  constructor(private episodesGateway: EpisodesGateway) { }

  public async execute(input: CreateEpisodeUCInput): Promise<void> {
    const id = v4();

    const episode = new Episode(
      id,
      input.title,
      input.length,
      input.link,
      input.picture,
      input.synopsis,
    );

    await this.episodesGateway.createEpisode(episode, id);
  }
}

export interface CreateEpisodeUCInput {
  title: string;
  length: number;
  link: string;
  picture: string;
  synopsis: string;
  series_id: string;
}