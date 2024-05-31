const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    semester: { type: Number, ref: "Semester", default: 1 },
    password: { type: String, required: true }, // (hashed for security)
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
