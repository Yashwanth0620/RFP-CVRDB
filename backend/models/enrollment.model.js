const mongoose = require("mongoose");

// Define the Enrollment schema
const enrollmentSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      ref: "User",
      required: true,
    },
    course_id: {
      type: String,
      ref: "Course",
      required: true,
    },
    status: { type: String, required: true, default: "upcoming" },
    semester: { type: Number, required: true },
    marks: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);
