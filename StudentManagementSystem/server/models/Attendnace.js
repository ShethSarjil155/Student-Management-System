const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  students: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "students",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      enrollment: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["Present", "Absent"],
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
