import { Request, Response } from "express";
import { GetSeriesByIdUC } from "../../../business/usecase/series/getSeriesById";
import { SeriesDB } from "../../../data/seriesDB";


export const getSeriesByIdEndPoint = async (req: Request, res: Response) => {
  try {
    const getSeriesByIdUC = new GetSeriesByIdUC(new SeriesDB());
    const result = await getSeriesByIdUC.execute({
      id: req.params.id
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(err.errCode || 400).send({
      message: err.message
    });
  }
};
