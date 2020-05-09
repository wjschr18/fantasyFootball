const mongoose = require('mongoose');

const Team = new mongoose.Schema({
  _id: {type: String, maxlength: 24, required: true},
  score: Number,
  owner: String
});

module.exports = mongoose.model('Team', Team);
