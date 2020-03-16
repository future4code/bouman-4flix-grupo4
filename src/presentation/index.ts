import express from "express";
import { createMovieEndpoint } from "./endpoints/movies/createMovie"
import { getMovieByIdEndPoint } from "./endpoints/movies/getMovieById"
import { createSeriesEndpoint } from "./endpoints/series/createSeries";
import { getSeriesByIdEndPoint } from "./endpoints/series/getSeriesById"
import { searchMoviesAndSeriesEndpoint } from "./endpoints/searchMoviesAndSeries";
const app = express();
app.use(express.json());

app.post("/movie", createMovieEndpoint)
app.get("/movie/:id", getMovieByIdEndPoint)

app.post("/series", createSeriesEndpoint)
app.get("/series/:id", getSeriesByIdEndPoint)

app.post("/search", searchMoviesAndSeriesEndpoint)


export default app;