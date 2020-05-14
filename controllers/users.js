const User = require('../models/user');

module.exports.login = function(request, response, next) {
  User.findById(request.body._id)
    .then(function(user) {
      if (user) {
        request.session.user = user;
        response.status(200).end();
      } else {
        next();
      }
    }).catch(error => next(error));
};

module.exports.create = function(request, response, next) {
  User.findById(request.body._id)
    .then(function(user) {
      if (request.body === user._id) {
        response.status(400).end();
    } else {
      next();
    }
  }).catch(error => next(error));
  User.create(request.body)
    .then(user => response.status(201).send(user._id))
    .catch(error => next(error));
};
