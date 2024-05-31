const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandling");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const homeRoutes = require("./routes/home.routes");
const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
const courseRoutes = require("./routes/course.routes");
const feeRoutes = require("./routes/fees.routes");
const markRoutes = require("./routes/marks.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const { validateToken } = require("./middleware/validateToken");

mongoose
  .connect("mongodb://127.0.0.1:27017/rfp-cvrdb")
  .then(() => console.log("Connected to DataBase successfully..."));

// connecting api endpoint to routes
app.use("/api/auth", userRoutes);
app.use(validateToken);
app.use("/api/admin", adminRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/fees", feeRoutes);
app.use("/api/marks", markRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/", homeRoutes)

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
