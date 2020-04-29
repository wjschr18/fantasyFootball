const mongoose = require('mongoose');
const Team = require('./team')

const User = new mongoose.Schema({
  _id: String,
  team: String
});

module.exports = mongoose.model('User', User);
