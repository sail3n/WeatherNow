const mongoose = require("mongoose");
const crypto = require("crypto");

const UsersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  location: { type: String },
  password: {
    salt: { type: String, required: true },
    hash: { type: String, required: true }
  }
});

// UsersSchema.methods.setPassword = password => {
//   this.salt = crypto.randomBytes(16).toString("hex");
// };
module.exports = mongoose.model("Users", UsersSchema);
