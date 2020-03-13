import { SeriesGateway } from "../../gateways/seriesGateway";

export class GetSerieByIdUC {
  constructor(private seriesGateWay: SeriesGateway) {}

  public async execute(
    input: GetSerieByIdUCInput
  ): Promise<GetSerieByIdUCOutput> {
    const serie = await this.seriesGateWay.getSerieById(input.id);

    if (!serie) {
      throw new Error("Serie not Found");
    }

    return {
      id: serie.getId(),
      title: serie.getTitle(),
      date: serie.getDate(),
      synopsis: serie.getSynopsis(),
      link: serie.getLink(),
      picture: serie.getPicture(),
      episodes: serie.getEpisodes()
    };
  }
}

export interface GetSerieByIdUCInput {
  id: string;
}

export interface GetSerieByIdUCOutput {
  id: string;
  title: string;
  date: Date;
  synopsis: string;
  link: string;
  picture: string;
  episodes: GetSeriesUCOutputEpisode[];
}

export interface GetSeriesUCOutputEpisode {
  title: string;
  length: number;
  link: string;
  picture: string;
  synopsis: string;
  series_id: string
}
