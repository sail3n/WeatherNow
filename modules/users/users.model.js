const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const UsersSchema = mongoose.Schema({
  user_id: { type: ObjectId },
  name: { type: String, required: true },
  email: { type: String },
  location: { type: String }
});

module.exports = mongoose.model("Users", UsersSchema);
