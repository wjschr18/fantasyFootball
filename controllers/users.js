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

// DELETE /user/:id
module.exports.delete = function(request, response, next) {
  User.findByIdAndDelete(request.params.id)
    .then(user => user ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /user/:id (update team/add team to user)
module.exports.update = function(request, response, next) {
  User.findByIdAndUpdate(request.params.id, request.body)
    .then(course => course ? response.status(200).end() : next())
    .catch(error => next(error));
};
