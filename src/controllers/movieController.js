import movie from "../models/Movie.js";

class MovieController {
  static async getAllMovies(req, res) {
    try {
      const listMovies = await movie.find({});
      res.status(200).json(listMovies);
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error trying to list movies - ${err.message}` });
    }
  }

  static async createMovie(req, res) {
    try {
      const newMovie = req.body;
      const movieCreated = await movie.create(newMovie);
      res
        .status(201)
        .json({ message: "successfully created", movie: movieCreated });
    } catch (err) {
      res
        .status(500)
        .json({ message: `Error trying to create movie - ${err.message}` });
    }
  }
}

export default MovieController;
