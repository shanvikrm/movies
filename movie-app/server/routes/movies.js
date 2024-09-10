const express = require('express');
const router = express.Router();
const axios = require('axios');
const Movie = require('../models/Movie');

// Search for movies
router.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.MOVIE_API_KEY,
          query: query,
        },
      }
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
});

module.exports = router;
