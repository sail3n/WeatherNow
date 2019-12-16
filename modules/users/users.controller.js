const UserModel = require("./users.model");
const crypto = require("../../utils/password");
const { ERR } = require("../../utils/error");

class Users {
  constructor() {}
  async save(payload) {
    payload.password = await crypto.saltAndHash(payload.password);
    return UserModel.create(payload);
  }
  async login(payload) {
    let user = await UserModel.findOne({ email: payload.email });
    if (!user) {
      throw ERR.USER_NOEXISTS;
    }
    let newHash = await crypto.hash(payload.password, user.password.salt);
    if (newHash.hash === user.password.hash) return user;
    else throw ERR.PASS_MISMATCH;
  }
  async update(id, payload) {
    var query = { _id: id };
    let user = await UserModel.findOneAndUpdate(query, { location: payload.location });
    return user;
  }
}
module.exports = new Users();
