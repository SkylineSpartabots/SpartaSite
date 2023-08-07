const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const authenticateUser = async (req, res) => {
  const user = req.body;
  try {
    let u;
    if (user.type == "login") {
      u = await User.login(user.username, user.password);
    } else {
      u = await User.signup(user);
    }
    const token = createToken(u._id);
    res.status(200).json({
      username: user.username,
      token,
      isBoard: u.isBoard,
      isAdmin: u.isAdmin,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { username } = req.body;
  const u = await User.findOneAndDelete({ username });
  if (!u) {
    res.status(404).json("No such user");
  } else {
    res.status(200).json(u);
  }
};

const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ lastName: "asc" });
  res.status(200).json(users);
};

module.exports = { authenticateUser, deleteUser, getUsers };
