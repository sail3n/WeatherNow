const UserModel = require("./users.model");

class Users {
  constructor() {}
  async save(payload) {
    return UserModel.create(payload);
  }
}

module.exports = new Users();
