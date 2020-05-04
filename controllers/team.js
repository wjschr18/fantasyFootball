const Team = require('../models/team');

module.exports.login = function(request, response, next) {
  Team.findById(request.body.name)
    .then(function(team) {
      if (team) {
        request.session.team = team;
        response.status(200).end();
      } else {
        next();
      }
    }).catch(error => next(error));
};

module.exports.create = function(request, response, next) {
  Team.create(request.body)
    .then(team => response.status(201).send(team.id))
    .catch(error => next(error));
};
