import { Request, Response } from "express";
import { SearchMoviesOrSeriesUC } from "../../business/usecase/searchMoviesOrSeries";
import { MovieDB } from "../../data/movieDB";
import { SeriesDB } from "../../data/seriesDB";

export const searchMoviesOrSeriesEndpoint = async (req: Request, res: Response) => {
  try {
    const searchMoviesOrSeriesUC = new SearchMoviesOrSeriesUC(new MovieDB(), new SeriesDB());
    const result = await searchMoviesOrSeriesUC.execute({
      query: req.body.query
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};