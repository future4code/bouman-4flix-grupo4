import { SeriesDB } from "../../../data/seriesDB";
import { v4 } from "uuid";
import { Series } from "../../entities/series";
import { Episode } from "../../entities/episode";

export class CreateSeriesUC {
  constructor(private db: SeriesDB) { }

  public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput> {
    const id = v4()

    const series = new Series(
      id,
      input.title,
      new Date(input.date),
      input.synopsis,
      input.link,
      input.picture
    )

    await this.db.createSeries(series)

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
      await this.db.createEpisode(episode, id);
    }

    return {
      message: "Series created succesfully"
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