import express, { Request, Response } from "express";
import { createMovieEndpoint } from "./endpoints/movies/createMovie"
import { getMovieByIdEndPoint } from "./endpoints/movies/getMovieById"


const app = express();
app.use(express.json());

app.post("/movie", createMovieEndpoint)
app.get("/movie/:id", getMovieByIdEndPoint)

export default app;