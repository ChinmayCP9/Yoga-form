const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  batch: String,
});

const User = mongoose.model("User", userSchema); // Use "User" as the model name

module.exports = User;
