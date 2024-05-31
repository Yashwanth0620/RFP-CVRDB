const asyncHandler = require('express-async-handler');
const marksModel = require('../models/marks.model');

// @desc Get marks for the logged-in student
// @route GET /api/marks
// @access Private
const getMarks = asyncHandler(async (req, res) => {
  const studentId = req.user._id;
  const marks = await marksModel.findOne({ student_id: studentId });

  if (!marks) {
    res.status(404);
    throw new Error('Marks not found');
  }

  res.status(200).json(marks);
});

module.exports = { getMarks };
