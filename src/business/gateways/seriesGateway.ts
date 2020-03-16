import { Series } from "../entities/series";

export interface SeriesGateway {
    createSeries(series: Series): Promise<void>
    getSeriesById(id: string): Promise<Series | undefined>
    searchSeries(query: string): Promise<Series[] | undefined>;
}