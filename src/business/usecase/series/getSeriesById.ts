import { SeriesGateway } from "../../gateways/seriesGateway";
import { Episode } from "../../entities/episode";

export class GetSeriesByIdUC {
  constructor(private seriesGateWay: SeriesGateway) {}

  public async execute(
    input: GetSeriesByIdUCInput
  ): Promise<GetSeriesByIdUCOutput> {
    const series = await this.seriesGateWay.getSeriesById(input.id);

    if (!series) {
      throw new Error("Series not Found");
    }

    return {
      id: series.getId(),
      title: series.getTitle(),
      date: series.getDate(),
      synopsis: series.getSynopsis(),
      link: series.getLink(),
      picture: series.getPicture(),
      episodes: series.getEpisodes()
    };
  }
}

export interface GetSeriesByIdUCInput {
  id: string;
}

export interface GetSeriesByIdUCOutput {
  id: string;
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: Episode[];
}

export interface GetSeriesUCOutputEpisode {
  title: string;
  length: number;
  link: string;
  picture: string;
  synopsis: string;
  series_id: string;
}
