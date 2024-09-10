const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  // Add other fields as needed
});

module.exports = mongoose.model('User', userSchema);
