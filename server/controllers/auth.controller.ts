const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dbConnection = require('../connections/db.connections');

exports.signin = (req, res) => {
  const { username, password } = req.body;

  console.log(req.body);

  res.redirect('/');
};

exports.signup = (req, res) => {
  const { username, password, email } = req.body;

  const addUserQuery = `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`;

  dbConnection.query(addUserQuery, (error, results) => {
    if (error) {
      res.send('user with this email or username alreay exist!');
      res.redirect('/register-form');
      return console.error(error);
    } else {
      console.log('user added successfully!');
      res.redirect('/login-form');
    }
  });

  dbConnection.end();
};