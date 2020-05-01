const express = require('express');
const Team = require('./models/team')
const User = require('./models/user')
// const teams = require('./controllers/teams');

// Create the router
const router = express.Router();

// // Check for admin status
// const authorize = function(request, response, next) {
//   if (request.session.admin) {
//     next(); // Fulfill the request
//   } else {
//     response.status(401).end();
//   }
// };

router.get('/', function(request, response){
  response.render('index');
});

router.get('/teams/new', function(request, response){
  Team.find().then(teams => response.render('newTeam', {teams: teams}));
});

router.get('/teams', function(request, response){
  User.find().then(users => response.render('viewTeam', {users: users}));
});

router.get('/teams/scores', function(request, response){
  Team.find().then(teams => response.render('leagueScores', {teams: teams}));
});
// POST /teams/new
router.post('/teams/new', function(request, response) {
  const team = request.body;
  const teams = Team.find();
  if (!team.name) {
    response.status(400).send('Missing Name');
  } else if (teams.find(f => f.name === team.name)) {
    response.status(400).send('Duplicate Name');
  } else {
    teams.push(team);
    response.status(201).send(teams);
  }
});

//Handle course requests
// router.get('/teams', teams.index);
// router.get('/teams/:id', teams.retrieve);
// router.post('/teams', authorize, teams.create);
// router.delete('/teams/:id', authorize, teams.delete);
// router.put('/teams/:id', authorize, teams.update);

// Export the router
module.exports = router;
