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
  User.create(request.body)
    .then(user => response.status(201).send(user.id))
    .catch(error => next(error));
};

// DELETE /courses/:id
module.exports.delete = function(request, response, next) {
  User.findByIdAndDelete(request.params.id)
    .then(course => course ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /courses/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  Course.findByIdAndUpdate(request.params.id, request.body)
    .then(course => course ? response.status(200).end() : next())
    .catch(error => next(error));
};
