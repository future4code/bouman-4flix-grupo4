import { SeriesGateway } from "../../gateways/seriesGateway";
import { EpisodesGateway } from "../../gateways/episodesGateway";
import { v4 } from "uuid";
import { Series } from "../../entities/series";
import { Episode } from "../../entities/episode";

export class CreateSeriesUC {
  constructor(
    private seriesGateway: SeriesGateway,
    private episodesGateway: EpisodesGateway,
  ) { }

  public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput> {
    const id = v4()
    const episodesArray: Episode[] = []

    const series = new Series(
      id,
      input.title,
      new Date(input.date),
      input.synopsis,
      input.link,
      input.picture,
      episodesArray
    )

    await this.seriesGateway.createSeries(series)
    // DÚVIDA: Esse método tem de ser invocado antes do método createEpisode(), da linha 42,
    // para criar a série, que tem o id que será referenciado pela foreign key dos episódios.
    // Isso confere? O endpoint só funcionou depois que eu fiz essa troca de posições.

    for (let ep of input.episodes) {
      const newEpisodeId = v4();
      const episode = new Episode(
        newEpisodeId,
        ep.title,
        ep.length,
        ep.link,
        ep.picture,
        ep.synopsis
      );
      await this.episodesGateway.createEpisode(episode, id);
      episodesArray.push(episode)
    }

    return {
      message: "Series created successfully"
    }
  }
}

export interface CreateSeriesUCInput {
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: CreateEpisodeUCInput[];
}

export interface CreateEpisodeUCInput {
  title: string
  length: number
  link: string
  picture: string
  synopsis: string
}

export interface CreateSeriesUCOutput {
  message: string;
}