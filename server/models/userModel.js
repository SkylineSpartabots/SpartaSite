const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isBoard: {
    type: Boolean,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },

  grade: {
    type: Number,
    required: true,
  },
  isAdvisor: {
    type: Boolean,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
});

userSchema.statics.signup = async function (user) {
  console.log(user);
  let username = user.username;
  let password = user.password;
  if (
    !username ||
    !password ||
    user.grade === null ||
    user.isAdvisor === null ||
    user.isBoard === null
  ) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ username: username });

  if (exists) {
    throw error("Username already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const u = await this.create({ ...user, password: hash });

  return u;
};

userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ username: username });

  if (!user) {
    throw Error("Incorrect username");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
