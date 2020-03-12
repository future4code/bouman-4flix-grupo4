import express, { Request, Response } from "express";
import { createMovieEndpoint } from "./endpoints/movies/createMovie"

const app = express();
app.use(express.json());

app.post("/movie", createMovieEndpoint)

export default app;