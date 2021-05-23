/**
 * load controllers
 *
 *
 */

const User = require('./../controller/user');
const user = new User();

module.exports = (app) => {
  app.get('/v1/users', (req, res, next) => user.getAll(req, res, next));
};
