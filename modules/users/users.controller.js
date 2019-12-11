const UserModel = require("./users.model");
const crypto = require("../../utils/password");

class Users {
  constructor() {}
  async save(payload) {
    payload.password = await crypto.saltAndHash(payload.password);
    return UserModel.create(payload);
  }
  async login(payload) {
    try {
      let user = await UserModel.findOne({ email: payload.email });
      let newHash = await crypto.hash(payload.password, user.password.salt);

      if (newHash.hash === user.password.hash) return user;
    } catch (e) {
      return e;
    }
  }
}
module.exports = new Users();
