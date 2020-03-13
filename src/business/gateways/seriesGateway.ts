import { Series } from '../entities/series';
import { Episode } from '../entities/episode';

export interface SeriesGateway {
  createSeries(series: Series): Promise<void>
  createEpisode(episode: Episode, id: string): Promise<void>
}