import express from "express";
import { createMovieEndpoint } from "./endpoints/movies/createMovie"
import { getMovieByIdEndPoint } from "./endpoints/movies/getMovieById"
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { getSeriesByIdEndPoint } from "./endpoints/series/getSeriesById"
import { searchMoviesOrSeriesEndpoint } from "./endpoints/searchMoviesOrSeries";
const app = express();
app.use(express.json());

app.post("/movie", createMovieEndpoint)
app.get("/movie/:id", getMovieByIdEndPoint)

app.post("/series", createSeriesEndpoint)
app.get("/series/:id", getSeriesByIdEndPoint)

app.post("/search", searchMoviesOrSeriesEndpoint)


export default app;