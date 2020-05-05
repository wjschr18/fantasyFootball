const mongoose = require('mongoose');

const Team = new mongoose.Schema({
  name: {type: String, maxlength: 24, required: true},
  score: Number,
  owner: String
});

module.exports = mongoose.model('Team', Team);
