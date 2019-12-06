const UserModel = require("./users.model");
const {Secure} = require("../../utils/password");

class Users {
  constructor() {}
  async save(payload) {
    await bcrypt.hash(payload.password, 10).then(function(hash) {
      return (payload.password = hash);
    });
    return UserModel.create(payload);
  }
}
module.exports = new Users();
