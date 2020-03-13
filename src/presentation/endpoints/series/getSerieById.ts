import { Request, Response } from "express";
import { GetSerieByIdUC } from "../../../business/usecase/series/getSerieById";
import { SeriesDB } from "../../../data/seriesDB";


export const getSerieByIdEndPoint = async (req: Request, res: Response) => {
  try {
    const getSerieByIdUC = new GetSerieByIdUC(new SeriesDB());
    const result = await getSerieByIdUC.execute({
      id: req.params.id
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(err.errCode || 400).send({
      message: err.message
    });
  }
};
