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
      input.picture,
      input.episodes
    )

    await this.db.createSeries(series)

    input.episodes.forEach(async episode => { // Por que isso não funciona?
      await this.db.createEpisode(episode, id)
    })

    return {
      message: `${JSON.stringify(input.episodes.map(episode => {return episode}))}` // "Testando" no back
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

export interface CreateSeriesUCOutput {
  message: string;
}