// import { Request, Response } from "express";
// import { GetAllEpisodesBySeriesIdUC } from "../../../business/usecase/episodes/getAllEpisodesBySeriesId";
// import { EpisodesDB } from "../../../data/episodesDB";

// export const getAllEpisodesBySeriesIdEndPoint = async (req: Request, res: Response) => {
//     try{
//         const getAllEpisodesBySeriesIdUC = new GetAllEpisodesBySeriesIdUC(new EpisodesDB())
//         const result = await getAllEpisodesBySeriesIdUC.execute({

//         })
//     } catch (err) {
//     res.status(400).send({
//       message: err.message,
//       ...err
//     });
//   }
// }