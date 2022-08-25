const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);
module.exports = user;
