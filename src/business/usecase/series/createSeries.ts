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
  episodes: Episode[];
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