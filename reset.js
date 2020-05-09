const mongoose = require('mongoose');
const connect = require('./db');
const User = require('./models/user');
const Team = require('./models/team');

// Connect to the database
connect();

// Model a collection of courses
const users = [
  new User({
    _id: 'Will',
    teams: ['one', 'two']
  }),
  new User({
    _id: 'Riley',
    teams: []
  }),
  new User({
    _id: 'Matt',
    teams: []
  })
];

const teams = [
  new Team({
    //owner: 'Will',
    id: 'Wills Team',
    score: 0
  }),
  new Team({
    //owner: 'Matt',
    id: 'Matts Team',
    score: 0
  }),
  new Team({
    //owner: 'Riley',
    id: 'Rileys Team',
    score: 0
  })
];

// Reset the database
mongoose.connection.dropDatabase()
  .then(() => Promise.all(users.map(user => user.save())))
  .then(() => Promise.all(teams.map(team => team.save())))
  .then(() => mongoose.connection.close())
  .then(() => console.log('Database is ready.'))
  .catch(error => console.error(error.stack));

module.exports = teams;
