import express from "express";
import MovieController from "../controllers/movieController.js";

const routes = express.Router();

routes.get("/movies", MovieController.getAllMovies);
routes.post("/movies", MovieController.createMovie);
export default routes;
