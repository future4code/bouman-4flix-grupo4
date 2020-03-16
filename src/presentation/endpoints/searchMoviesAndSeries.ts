import { Request, Response } from "express";
import { SearchMoviesAndSeriesUC } from "../../business/usecase/searchMoviesAndSeries";
import { MovieDB } from "../../data/movieDB";
import { SeriesDB } from "../../data/seriesDB";

export const searchMoviesAndSeriesEndpoint = async (req: Request, res: Response) => {
  try {
    const searchMoviesAndSeriesUC = new SearchMoviesAndSeriesUC(new MovieDB(), new SeriesDB());
    const result = await searchMoviesAndSeriesUC.execute({
      query: req.body.query
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};