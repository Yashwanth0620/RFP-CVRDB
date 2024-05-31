const asyncHandler = require('express-async-handler');
const courseModel = require('../models/course.model');
const enrollmentModel = require("../models/enrollment.model");

// @desc Get courses based on status (ongoing, upcoming, completed)
// @route GET /api/courses/:status_id
// @access Private
const getCourses = asyncHandler(async (req, res) => {
  const statusId = req.params.status_id;
  const studentId = req.user._id;

  let courses;

  switch (statusId) {
    case 'ongoing':
      courses = await enrollmentModel.find({ student_id: studentId, status: 'ongoing' });
      break;
    case 'upcoming':
      courses = await enrollmentModel.find({ student_id: studentId, status: 'upcoming' });
      break;
    case 'completed':
      courses = await enrollmentModel.find({ student_id: studentId, status: 'completed' });
      break;
    default:
      res.status(400);
      throw new Error('Invalid status ID');
  }

  if (!courses) {
    res.status(404);
    throw new Error('Courses not found');
  }

  res.status(200).json(courses);
});

module.exports = { getCourses };
