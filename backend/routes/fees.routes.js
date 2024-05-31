const express = require('express');
const { getFees } = require('../controllers/fees.controller');
const router = express.Router();

// Fees Routes
router.get('/', getFees);

module.exports = router;
