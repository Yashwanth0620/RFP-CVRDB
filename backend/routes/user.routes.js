const express = require("express");
const { validateToken } = require("../middleware/validateToken");

const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
