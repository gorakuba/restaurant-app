const controller = require('../controllers/auth.controller');

module.exports = function (app) {
  app.post('/login', controller.signin);

  app.post('/register', controller.signup);
};
