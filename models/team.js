const mongoose = require('mongoose');

const Team = new mongoose.Schema({
  name: String,
  score: Number,
});

module.exports = mongoose.model('Team', Team);
