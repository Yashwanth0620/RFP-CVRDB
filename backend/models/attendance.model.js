const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    student_id: { type: String, ref: "User", required: true },
    classes_attended: { type: Number, required: true, default: 0 },
    labs_attended: { type: Number, required: true, default: 0 },
    attendance: { type: Number, required: true, default: 0 },
    total_classes: { type: Number, required: true, default: 0 },
    total_labs: { type: Number, required: true, default: 0 },
    remaining_classes: { type: Number, required: true, default: 0 },
    remaining_labs: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
