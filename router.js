const express = require('express');
const Team = require('./models/team')
const User = require('./models/user')
const users = require('./controllers/users');
const teams = require('./controllers/team');

// Create the router
const router = express.Router();

router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

router.get('/', function(request, response){
  User.find().then(users => response.render('index', {users: users}));
});

router.get('/teams/new', function(request, response){
  Team.find().then(teams => response.render('newTeam', {teams: teams}));
});

router.get('/teams/scores', function(request, response){
  Team.find().sort('-score').then(teams => response.render('leagueScores', {teams: teams}));
});

router.get('/teams/manage', function(request, response){
  Team.find().then(teams => response.render('myTeams', {teams: teams}));
});

//add team update get
router.get('/teams/scores/:id', function(request, response){
  Team.find().then(team => response.render('teamScore', {id: request.params.id}));
});
//router.get('/teams/scores/:id', teams.retrieve);

//Handle requests
router.post('/teams', teams.create);
router.delete('/teams/:id', teams.delete);
router.post('/users', users.create, users.login);
router.put('/teams/:id', teams.update);

// Export the router
module.exports = router;
