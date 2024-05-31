const asyncHandler = require("express-async-handler");
const courseModel = require("../models/course.model");
const attendanceModel = require("../models/attendance.model");
const feeModel = require("../models/fees.model");
const enrollmentModel = require("../models/enrollment.model");
const marksModel = require("../models/marks.model");

// @desc Add a new course
// @route POST /api/admin/courses
// @access Private (Admin)
const addCourse = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Unauthorized user: not an admin");
  }
  const { name, code, credits, image } = req.body;
  const course = new courseModel({
    name,
    _id: code,
    credits,
    image,
  });
  const createdCourse = await course.save();
  res.status(201).json(createdCourse);
});

// @desc Add a new enrollment for a student
// @route POST /api/admin/enroll
// @access Private (Admin)
const enrollStudent = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Unauthorized user: not an admin");
  }
  const { student_id, course_id, semester } = req.body;
  const enrollment = new enrollmentModel({
    student_id,
    course_id,
    semester,
  });
  const newEnrollment = await enrollment.save();
  res.status(201).json(newEnrollment);
});

// @desc Add marks for a student
// @route POST /api/admin/marks
// @access Private (Admin)
const addMarks = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Unauthorized user: not an admin");
  }
  const { studentId, courseId, score } = req.body;
  let status = "completed";
  if (score < 4) status = "backlog";
  const marks = await enrollmentModel.findOneAndUpdate(
    { student_id: studentId, course_id: courseId },
    {
      status: status,
      marks: score,
    },
    { new: true }
  );
  res.status(201).json(marks);
});

const semesterMarks = asyncHandler(async (req, res) => {
  const { studentId, cgpa, sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8 } =
    req.body;
  let marks = await marksModel.findOne({ student_id: studentId });
  console.log("Found marks:", marks);

  let newMarks;
  if (marks) {
    newMarks = await marksModel.findOneAndUpdate(
      { student_id: studentId },
      req.body,
      { new: true }
    );
  } else {
    newMarks = new marksModel({
      student_id: studentId,
      cgpa: cgpa || 0,
      sem1: sem1 || 0,
      sem2: sem2 || 0,
      sem3: sem3 || 0,
      sem4: sem4 || 0,
      sem5: sem5 || 0,
      sem6: sem6 || 0,
      sem7: sem7 || 0,
      sem8: sem8 || 0,
    });
    await newMarks.save();
  }

  res.status(201).json(newMarks);
});

// @desc Update attendance for a student
// @route POST /api/admin/attendance
// @access Private (Admin)
const updateAttendance = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Unauthorized user: not an admin");
  }
  const { studentId, classesAttended, labsAttended, attendance, totalClasses, totalLabs, remainingClasses, remainingLabs } = req.body;
  const a = await attendanceModel.findOne({ student_id: studentId });
  if (a) {
    const updatedAttendance = await attendanceModel.findOneAndUpdate(
      { student_id: studentId },
      req.body,
      { new: true }
    );
  } else {
    const newAttendance = new attendanceModel({
      student_id: studentId,
      classes_attended: classesAttended,
      labs_attended: labsAttended,
      attendance: attendance,
      total_classes: totalClasses,
      total_labs: totalLabs,
      remaining_classes: remainingClasses,
      remaining_labs: remainingLabs,
    });
    await newAttendance.save();
  }
  res.status(200).json({ message: "Attendance updated successfully" });
});

// @desc Update fees for a student
// @route POST /api/admin/fees
// @access Private (Admin)
const updateFees = asyncHandler(async (req, res) => {
  if (!req.user.isAdmin) {
    res.status(403);
    throw new Error("Unauthorized user: not an admin");
  }

  const {
    studentId,
    tuition,
    transport,
    fines,
    paid_fee,
    paid_transport_fee,
    paid_fines,
  } = req.body;

  try {
    let fee = await feeModel.findOne({ student_id: studentId });

    if (fee) {
      fee.tuition_fee = tuition !== undefined ? tuition : fee.tuition_fee;
      fee.transport_fee =
        transport !== undefined ? transport : fee.transport_fee;
      fee.total_fines = fines !== undefined ? fines : fee.total_fines;
      fee.paid_fee = paid_fee !== undefined ? paid_fee : fee.paid_fee;
      fee.paid_transport_fee =
        paid_transport_fee !== undefined
          ? paid_transport_fee
          : fee.paid_transport_fee;
      fee.paid_fines = paid_fines !== undefined ? paid_fines : fee.paid_fines;
      await fee.save();
    } else {
      const newFee = new feeModel({
        student_id: studentId,
        tuition_fee: tuition,
        transport_fee: transport,
        total_fines: fines,
        paid_fee: paid_fee || 0,
        paid_transport_fee: paid_transport_fee || 0,
        paid_fines: paid_fines || 0,
      });
      fee = await newFee.save();
    }

    res.status(200).json({ message: "Fee details updated successfully", fee });
  } catch (error) {
    console.error(error);
    res.status(500);
    throw new Error("Internal server error");
  }
});

module.exports = {
  addCourse,
  addMarks,
  updateAttendance,
  semesterMarks,
  updateFees,
  enrollStudent,
};
