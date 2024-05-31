const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema(
  {
    student_id: { type: String, ref: 'Student', required: true },
    total_fines: { type: Number, required: true },
    tuition_fee: { type: Number, required: true },
    transport_fee: { type: Number, required: true },
    paid_fines: { type: Number, required: true, default: 0 },
    paid_fee: { type: Number, required: true, default: 0 },
    paid_transport_fee: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Fee", feeSchema);
