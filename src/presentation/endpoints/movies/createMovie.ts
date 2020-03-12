import { Request, Response } from "express";
import { CreateMovieUC } from "../../../business/usecase/movies/createMovie";
import { MovieDB } from "../../../data/movieDB";

export const createMovieEndpoint = async (req: Request, res: Response) => {
  try {
    const createMovieUC = new CreateMovieUC(new MovieDB());
    const result = await createMovieUC.execute({
      title: req.body.title,
      length: req.body.length,
      date: req.body.date,
      synopsis: req.body.synopsis,
      link: req.body.link,
      picture: req.body.picture
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message
    });
  }
};
