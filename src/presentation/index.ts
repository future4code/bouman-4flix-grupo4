import express, { Request, Response } from "express";
import { createMovieEndpoint } from "./endpoints/movies/createMovie"
import { createSeriesEndpoint } from "./endpoints/series/createSeries";

const app = express();
app.use(express.json());

app.post("/movie", createMovieEndpoint)
app.post("/series", createSeriesEndpoint)

export default app;