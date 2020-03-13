import { Request, Response } from "express";
import { GetMovieByIdUC } from "../../../business/usecase/movies/getMovieById";
import { MovieDB } from "../../../data/movieDB";

export const getMovieByIdEndPoint = async (req: Request, res: Response) => {
  try {
    const getMovieByIdUC = new GetMovieByIdUC(new MovieDB());
    const result = await getMovieByIdUC.execute({
      id: req.params.id
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errCode || 400).send({
      message: err.message
    });
  }
};
