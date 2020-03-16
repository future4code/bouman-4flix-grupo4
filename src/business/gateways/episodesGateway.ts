import { Episode } from "../entities/episode";

export interface EpisodesGateway {
    createEpisode(episode: Episode, id: string): Promise<void>
    getAllEpisodesBySeriesId(series_id: string): Promise<Episode[]>
}