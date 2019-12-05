const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  location: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Users", UsersSchema);
