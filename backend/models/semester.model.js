const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    total_classes: { type: Number, required: true, default: 0 },
    total_labs: { type: Number, required: true, default: 0 },
    remaining_classes: { type: Number, required: true, default: 0 },
    remaining_labs: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
