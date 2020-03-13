import { Series } from "../entities/series";

export interface SeriesGateway{
    getSerieById(id: string): Promise<Series | undefined>
}

