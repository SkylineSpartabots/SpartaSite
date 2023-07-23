const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const authenticateUser = async (req, res) => {
  const { username, password, type } = req.body;
  console.log(req.body);
  try {
    let user;
    if (type == "login") {
      user = await User.login(username, password);
    } else {
      user = await User.signup(username, password);
    }
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { authenticateUser };
