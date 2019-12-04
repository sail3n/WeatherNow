const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const UsersSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  location: { type: String },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Users", UsersSchema);
