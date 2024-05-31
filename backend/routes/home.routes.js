const express = require('express');
const { getHome } = require('../controllers/home.controller');
const router = express.Router();

// Home Routes
router.get('/', getHome);

module.exports = router;
