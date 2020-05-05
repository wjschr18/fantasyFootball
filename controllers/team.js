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

// // POST /flowers
// router.post('/', function(request, response) {
//   const flower = request.body;
//   if (!flower.id) {
//     response.status(400).send('Missing ID');
//   } else if (flowers.find(f => f.id === flower.id)) {
//     response.status(400).send('Duplicate ID');
//   } else {
//     flowers.push(flower);
//     response.status(201).send(flowers);
//   }
// });

module.exports.create = function(request, response, next) {
  const teamRequest = request.body;
  if (!teamRequest.name){
    response.status(400).send('Missing Name');
  }else{
  Team.create(request.body)
    .then(team => response.status(201).send(team.name))
    .catch(error => next(error));
  }
};

// module.exports.index = function(request, response) {
//   response.send('GET /teams');
// };

module.exports.retrieve = function(request, response) {
  response.send(`GET /teams/${request.params.name}`);
};
