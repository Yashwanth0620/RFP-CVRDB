const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

// @desc register a user
// @route POST /api/auth/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password, isAdmin } = req.body;
  const availableUser = await userModel.findOne({ $or: [{ email }, { _id: username }] });
  if (availableUser) {
    res.status(400);
    throw new Error("Email or Username already in use");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    _id: username,
    name: name,
    email: email,
    password: hashedPassword,
    isAdmin: isAdmin
  });
  if (!user) {
    res.status(400);
    throw new Error("User data invalid");
  }
  res
    .status(201)
    .json({ username: user.id, name: user.name, email: user.email });
});

// @desc login a user
// @route POST /api/auth/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ _id: username });

  if (user && (await bcrypt.compare(password, user.password))) {
    jwt.sign({
      user: user
    }, process.env.SECRET, {expiresIn: "1h"}, (err, token) => {
      if (err) {
        res.status(401);
        throw new Error("Invalid user credentials");
      }
      const role = user.isAdmin === true ? "admin" : "student";
      res.status(200).json({ message: "login successful", token, role, id: user._id, name: user.name });
    });
  } else {
    res.status(401);
    throw new Error("InValid email and password");
  }
  
});

// @desc get current user
// @route GET /api/auth/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error("UnAuthorized user");
  }
  const user = await userModel.findById(req.user.id);
  if (!req.user.currentGroup) {
    res.status(404);
    throw new Error("Not found: user not in any group");
  }
  res.status(200).json(user);
});

module.exports = { loginUser, registerUser, currentUser };
