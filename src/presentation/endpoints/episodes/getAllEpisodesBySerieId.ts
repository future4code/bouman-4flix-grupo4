// import { Request, Response } from "express";
// import { GetAllEpisodesBySerieIdUC } from "../../../business/usecase/episodes/getAllEpisodesBySerieId";
// import { EpisodesDB } from "../../../data/episodesDB";

// export const getAllEpisodesBySerieIdEndPoint = async (req: Request, res: Response) => {
//     try{
//         const getAllEpisodesBySerieIdUC = new GetAllEpisodesBySerieIdUC(new EpisodesDB())
//         const result = await getAllEpisodesBySerieIdUC.execute({

//         })
//     } catch (err) {
//     res.status(400).send({
//       message: err.message,
//       ...err
//     });
//   }
// }