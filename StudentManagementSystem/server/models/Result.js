// const mongoose = require("mongoose");

// const ResultSchema = new mongoose.Schema({
//   studentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "students",
//     required: true,
//   },
//   department: { type: String, required: true },
//   semester: { type: String, required: true },
//   division: { type: String, required: true },
//   subject: { type: String, required: true },
//   marks: { type: Number, required: true },
//   uploadedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Result", ResultSchema);

const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  enrollment: { type: String, required: true },
  studentName: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  division: { type: String, required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Result", ResultSchema);
