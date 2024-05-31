const express = require('express');
const { getAttendance } = require('../controllers/attendance.controller');

const router = express.Router();

// Attendance Routes
router.get('/', getAttendance);

module.exports = router;
