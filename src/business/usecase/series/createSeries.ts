import { v4 } from "uuid";
import { Series } from "../../entities/series";

export class CreateSeriesUC {
  constructor(private db: SeriesDB) {}

  public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput>{
      const id = v4()

      const series = new Series(
          id,
          input.title,
          input.date,
          input.synopsis,
          input.picture
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
}

export interface CreateSeriesUCOutput {
  message: string;
}
