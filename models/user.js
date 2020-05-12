const mongoose = require('mongoose');

const User = new mongoose.Schema({
  _id: {type: String, maxlength: 24, required: true}
});

module.exports = mongoose.model('User', User);
