const Team = require('../models/team');

module.exports.login = function(request, response, next) {
  Team.findById(request.body.id)
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
  // }
};

// DELETE /team/:id
module.exports.delete = function(request, response, next) {
  Team.findByIdAndDelete(request.params.id)
    .then(team => team ? response.status(200).end() : next())
    .catch(error => next(error));
};

// module.exports.index = function(request, response) {
//   response.send('GET /teams');
// };

module.exports.retrieve = function(request, response) {
  response.send(`GET /teams/${request.params.id}`);
};
