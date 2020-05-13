const Team = require('../models/team');

module.exports.create = function(request, response, next) {
  request.body.score = 0;
  request.body.owner = request.session.user._id;
    Team.create(request.body)
      .then(team => response.status(201).send(team._id))
      .catch(error => next(error));
};

// PUT /team/:id (with the changes in the request body)
module.exports.update = function(request, response, next) {
  //Team.sortByScoreAndUpdate(request.team.score)
    //.then(team => team ? response.status(200).end() : next())
  Team.findByIdAndUpdate(request.params.id, request.body)
    .then(team => team ? response.status(200).end() : next())
    .catch(error => next(error));
};

// DELETE /team/:id
module.exports.delete = function(request, response, next) {
  Team.findByIdAndDelete(request.params.id)
    .then(team => team ? response.status(200).end() : next())
    .catch(error => next(error));
};

module.exports.retrieve = function(request, response) {
  response.render('teamScore', {id: request.params.id})
};
