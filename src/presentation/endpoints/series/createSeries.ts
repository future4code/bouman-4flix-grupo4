import { Request, Response } from "express";
import { CreateSeriesUC } from "../../../business/usecase/series/createSeries";
import { SeriesDB } from "../../../data/seriesDB";

export const createSeriesEndpoint = async (req: Request, res: Response) => {
  try {
    const createSeriesUC = new CreateSeriesUC(new SeriesDB());
    const result = await createSeriesUC.execute({
      title: req.body.title,
      date: req.body.date,
      synopsis: req.body.synopsis,
      link: req.body.link,
      picture: req.body.picture,
      episodes: req.body.episodes
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};