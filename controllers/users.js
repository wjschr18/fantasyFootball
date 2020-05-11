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
  request.body.user._id = request.session.user._id;
  User.create(request.body)
    .then(user => response.status(201).send(user._id))
    .catch(error => next(error));
};

// DELETE /user/:id
module.exports.delete = function(request, response, next) {
  // if (request.session.user._id === request.params._id){
  User.findByIdAndDelete(request.params._id)
    .then(user => user ? response.status(200).end() : next())
    .catch(error => next(error));
  // } else {
  //   response.status(403).send('Forbidden Access');
  // }
};

// PUT /user/:id (update team/add team to user)
module.exports.update = function(request, response, next) {
  // if (request.session.user._id === request.params._id){
  User.findByIdAndUpdate(request.params._id, request.body)
    .then(user => user ? response.status(200).end() : next())
    .catch(error => next(error));
  // } else {
  //   response.status(403).send('Forbidden Access');
  // }
};
