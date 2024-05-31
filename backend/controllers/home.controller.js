const asyncHandler = require('express-async-handler');
const attendanceModel = require('../models/attendance.model');
const feeModel = require('../models/fees.model');
const courseModel = require('../models/course.model');

// @desc Get home page details for the logged-in student
// @route GET /api/home
// @access Private
const getHome = asyncHandler(async (req, res) => {
  const studentId = req.user._id;

  const attendance = await attendanceModel.findOne({ studentId });
  const fee = await feeModel.findOne({ studentId });
  const courses = await courseModel.find({ studentId, status: 'ongoing' }).limit(4);

  if (!attendance || !fee || !courses) {
    res.status(404);
    throw new Error('Home details not found');
  }

  const totalAttendance = attendance.classesAttended + attendance.labsAttended;
  const totalClasses = attendance.totalClasses + attendance.totalLabs;
  const attendancePercentage = (totalAttendance / totalClasses) * 100;

  res.status(200).json({
    totalAttendance,
    attendancePercentage,
    feeDetails: {
      pendingFee: fee.totalFee - fee.amountPaid,
    },
    ongoingCourses: courses.map(course => ({
      name: course.name,
      description: course.description,
      image: course.image,
    })),
  });
});

module.exports = { getHome };
