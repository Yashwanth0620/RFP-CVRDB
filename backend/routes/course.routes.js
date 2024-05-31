const express = require('express');
const { getCourses } = require('../controllers/course.controller');
const router = express.Router();

// Courses Routes
router.get('/:status_id', getCourses);

module.exports = router;
