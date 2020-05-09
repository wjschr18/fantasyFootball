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

router.post('/signup',  users.create, users.login);


router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

router.get('/teams/new', function(request, response){
  Team.find().then(teams => response.render('newTeam', {teams: teams}));
});

router.get('/teams', function(request, response){
  User.find().then(users => response.render('teamScore', {users: users}));
});

router.get('/teams/scores', function(request, response){
  Team.find().then(teams => response.render('leagueScores', {teams: teams}));
});

router.get('/teams/manage', function(request, response){
  Team.find().then(teams => response.render('myTeams', {teams: teams}));
});

//Handle course requests
// router.get('/teams', teams.index);
// router.get('/teams/:id', teams.retrieve);
router.post('/teams', teams.create);
router.delete('/user/:id', users.delete);
router.delete('/team/:id', teams.delete)
router.put('/user/:id', users.update);

// Export the router
module.exports = router;
