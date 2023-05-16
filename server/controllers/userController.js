const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const authenticateUser = async (req, res) => {
  const userInfo = req.body;
  try {
    let user;
    if (type == "login") {
      user = await User.login(userInfo);
    } else {
      user = await User.signup(userInfo);
    }
    const token = createToken(user._id);
    res.status(200).json(userInfo, token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { authenticateUser };
