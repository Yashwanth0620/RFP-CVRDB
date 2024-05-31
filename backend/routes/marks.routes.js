const express = require('express');
const { getMarks } = require('../controllers/marks.controller');
const router = express.Router();

// Marks Routes
router.get('/', getMarks);

module.exports = router;
