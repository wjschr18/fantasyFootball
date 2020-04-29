const express = require('express');
const Team = require('./models/team')
// const courses = require('./controllers/stats');

// Create the router
const router = express.Router();

// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};

router.get('/', function(request, response){
  response.render('index');
});

router.get('/teams/new', function(request, response){
  response.render('newTeam');
});

router.get('/teams', function(request, response){
  response.render('viewTeam');
});

router.get('/teams/scores', function(request, response){
  Team.find().then(teams => response.render('leagueScores', {teams: teams}));
});

// Handle course requests
// router.get('/stats', stats.index);
// router.get('/stats/:id', stats.retrieve);
// router.post('/stats', authorize, stats.create);
// router.delete('/stats/:id', authorize, stats.delete);
// router.put('/stats/:id', authorize, stats.update);

// Export the router
module.exports = router;
