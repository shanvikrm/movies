const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get user's favorite movies
router.get('/:username/favorites', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).populate('favorites');
    res.json(user.favorites);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching favorites' });
  }
});

// Add a movie to favorites
router.post('/:username/favorites', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    user.favorites.push(req.body.movieId);
    await user.save();
    res.json({ message: 'Movie added to favorites' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding favorite' });
  }
});

module.exports = router;
