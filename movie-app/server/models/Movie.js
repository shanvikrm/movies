const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: Number,
  title: String,
  overview: String,
  releaseDate: String,
  posterPath: String,
  // Add other fields as needed
});

module.exports = mongoose.model('Movie', movieSchema);

