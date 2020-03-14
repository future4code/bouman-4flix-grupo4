import { Series } from "../entities/series";
import { searchUCInput } from "../usecase/searchMoviesOrSeries";

export interface SeriesGateway {
    createSeries(series: Series): Promise<void>
    getSeriesById(id: string): Promise<Series | undefined>
    searchSeries(input: searchUCInput): Promise<Series | undefined>;
}