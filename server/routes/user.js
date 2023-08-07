const express = require("express");

// controller functions
const {
  authenticateUser,
  deleteUser,
  getUsers,
} = require("../controllers/userController");

const router = express.Router();

// authentication
router.post("/authenticate", authenticateUser);
router.delete("/deleteUser", deleteUser);
router.get("/getUsers", getUsers);

module.exports = router;
