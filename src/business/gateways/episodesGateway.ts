import { Episode } from "../entities/episode";

export interface EpisodesGateway {
    createEpisode(episode: Episode, id: string): Promise<void>
    getAllEpisodesBySerieId(series_id: string): Promise<Episode[]>
}