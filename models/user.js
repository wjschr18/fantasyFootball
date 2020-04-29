const mongoose = require('mongoose');
const Team = require('./models/team')

const User = new mongoose.Schema({
  _id: String,
  teams: [Team]
});

module.exports = mongoose.model('User', User);
