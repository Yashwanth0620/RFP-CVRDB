const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      ref: "User",
      required: true,
    },
    cgpa: { type: Number, default: 0 },
    sem1: { type: Number, default: 0 },
    sem2: { type: Number, default: 0 },
    sem3: { type: Number, default: 0 },
    sem4: { type: Number, default: 0 },
    sem5: { type: Number, default: 0 },
    sem6: { type: Number, default: 0 },
    sem7: { type: Number, default: 0 },
    sem8: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Marks", marksSchema);
