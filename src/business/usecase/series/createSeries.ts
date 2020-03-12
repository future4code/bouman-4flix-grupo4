import { v4 } from "uuid";
import { Series } from "../../entities/series";
import { Episode } from "../../entities/episode";

export class CreateSeriesUC {
  constructor(private db: SeriesDB) {}

  public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput>{
      const id = v4()

      const series = new Series(
          id,
          input.title,
          input.date,
          input.synopsis,
          input.picture,
          input.episodes
      )

      await this.db.createSeries(series)

      return{
          message: "Series created Successfully"
      }
  }
}

export interface CreateSeriesUCInput {
  title: string;
  date: Date;
  synopsis: string;
  picture: string;
  episodes: Episode[];
}

export interface CreateSeriesUCOutput {
  message: string;
}
