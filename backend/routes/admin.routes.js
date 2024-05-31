const express = require("express");
const {
  addCourse,
  addMarks,
  updateAttendance,
  updateFees,
  enrollStudent,
  semesterMarks
} = require("../controllers/admin.controller");
const { adminAuth } = require("../middleware/adminAuth");
const router = express.Router();

// Admin Routes
router.use(adminAuth);
router.post("/courses", addCourse);
router.post("/sem/marks", semesterMarks);
router.post("/marks", addMarks);
router.post("/attendance", updateAttendance);
router.post("/fees", updateFees);
router.post("/enroll", enrollStudent);

module.exports = router;
