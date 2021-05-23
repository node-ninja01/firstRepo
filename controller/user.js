const { models } = require('../sequelize');

class User {
  constructor() {}

  async getAll(req, res, next) {
    const users = await models.user.findAll();
    res.status(200).json(users);
  }

  error(error, req, res, next) { 
    console.log(error);
    res.status(error.status).json({ message: error.msg });
  }
}

module.exports = User;
