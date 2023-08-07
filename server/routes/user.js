const express = require("express");

// controller functions
const {
  authenticateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// authentication
router.post("/authenticate", authenticateUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;
