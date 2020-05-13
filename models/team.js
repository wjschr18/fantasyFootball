const mongoose = require('mongoose');

const Team = new mongoose.Schema({
  _id: {type: String, maxlength: 24, trim: true, required: true},
  score: {type: Number, required: true},
  owner: {type: String, maxlength: 24, trim: true, required: true}
});

module.exports = mongoose.model('Team', Team);
