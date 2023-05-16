const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  primaryDepartment: {
    type: String,
    required: true,
  },
  isBoard: {
    type: Boolean,
    required: true,
  },
  isAdvisor: {
    type: Boolean,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (userInfo) {
  const hasEmpty = Object.values(userInfo).every((x) => x === null || x === "");
  if (hasEmpty) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ email: userInfo.email });

  if (exists) {
    throw error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(userInfo.password, salt);

  const user = await this.create({ ...userInfo, password: hash });

  return user;
};

userSchema.statics.login = async function (userInfo) {
  const hasEmpty = Object.values(userInfo).every((x) => x === null || x == "");
  if (hasEmpty) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email: userInfo.email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(userInfo.password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
