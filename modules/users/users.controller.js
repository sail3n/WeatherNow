const UserModel = require("./users.model");
const crypto = require("../../utils/password");

class Users {
  constructor() {}
  async save(payload) {
    payload.password = await crypto.saltAndHash(payload.password);
    // payload.password.hash.toString("hex");
    // payload.password.salt.toString("hex");
    return UserModel.create(payload);
  }
  async login(payload) {
    let user = await UserModel.findOne({ email: payload.email });
    if (!user) {
      console.log("User not found");
    } else {
      return user;
    }
    // const pass = await crypto.hash(payload.password, user.password.salt);

    // if (pass.hash === user.password.hash) console.log("herere it passsed");
    // else console.log("herere it failed");
    // console.log(pass);
    // return;
  }
}
module.exports = new Users();
