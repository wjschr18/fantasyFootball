const express = require('express');
const Team = require('./models/team')
const User = require('./models/user')
const users = require('./controllers/users');
const teams = require('./controllers/team');

// Create the router
const router = express.Router();

router.get('/', function(request, response){
  User.find().then(users => response.render('index', {users: users}));
});

router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

router.get('/teams/new', function(request, response){
  Team.find().then(teams => response.render('newTeam', {teams: teams}, {users: users}));
});

router.get('/teams', function(request, response){
  User.find().then(users => response.render('viewTeam', {users: users}));
});

router.get('/teams/scores', function(request, response){
  Team.find().then(teams => response.render('leagueScores', {teams: teams}));
});

//Handle course requests
// router.get('/teams', teams.index);
// router.get('/teams/:id', teams.retrieve);
router.post('/teams/new', teams.create); // add authorize later
// router.delete('/teams/:id', authorize, teams.delete);
// router.put('/teams/:id', authorize, teams.update);

// Export the router
module.exports = router;
