const express = require("express");

// controller functions
const { authenticateUser } = require("../controllers/userController");

const router = express.Router();

// authentication
router.post("/authenticate", authenticateUser);

module.exports = router;
