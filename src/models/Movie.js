import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    director: { type: String },
    genre: { type: String },
    duration: { type: String },
    synopsis: { type: String },
  },
  { versionKey: false }
);

const movie = mongoose.model("movies", movieSchema);

export default movie;
