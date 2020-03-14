import { Series } from "../entities/series";

export interface SeriesGateway {
    createSeries(series: Series): Promise<void>
<<<<<<< HEAD
    createEpisode(episode: Episode, id: string): Promise<void>
    getSerieById(id: string): Promise<Series | undefined>
}
=======
    getSeriesById(id: string): Promise<Series | undefined>
}

>>>>>>> 213ba68b5a10be7d6d4d6a25d120c71e5d8e2ad9
