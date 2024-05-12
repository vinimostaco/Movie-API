import express from "express";
import movies from "./movieRoutes.js";
const routes = (app) => {
  app
    .route("/")
    .get((req, res) => res.status(200).send("Welcome to Movie-API"));

  app.use(express.json(), movies);
};

export default routes;
