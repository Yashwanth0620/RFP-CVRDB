const asyncHandler = require('express-async-handler');
const attendanceModel = require('../models/attendance.model');

// @desc Get attendance for the logged-in student
// @route GET /api/attendance
// @access Private
const getAttendance = asyncHandler(async (req, res) => {
  const studentId = req.user._id;
  const attendance = await attendanceModel.findOne({ student_id: studentId });

  if (!attendance) {
    res.status(404);
    throw new Error('Attendance records not found');
  }

  res.status(200).json(attendance);
});

module.exports = { getAttendance };
