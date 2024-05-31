const asyncHandler = require('express-async-handler');
const feesModel = require('../models/fees.model');

// @desc Get fee details for the logged-in student
// @route GET /api/fees
// @access Private
const getFees = asyncHandler(async (req, res) => {
  const studentId = req.user._id;
  const fees = await feesModel.findOne({student_id: studentId});
  
  if (!fees) {
    res.status(404);
    throw new Error('Fee details not found');
  }

  res.status(200).json(fees);
});

module.exports = { getFees };
