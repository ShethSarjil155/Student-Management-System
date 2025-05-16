// const mongoose = require("mongoose");

// const announcementSchema = new mongoose.Schema({
//   announcement: {
//     type: String,
//     required: true,
//   },
//   department: {
//     type: [String], // Array to allow multiple departments
//     required: true,
//   },
//   semester: {
//     type: [Number], // Array to allow multiple semesters
//     required: true,
//   },
//   division: {
//     type: [String], // Array to allow multiple divisions
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Announcement = mongoose.model("Announcement", announcementSchema);
// module.exports = Announcement;

// const mongoose = require("mongoose");

// const AnnouncementSchema = new mongoose.Schema({
//   announcement: { type: String, required: true },
//   department: [{ type: String, required: true }], // Array of departments
//   semester: { type: String, required: true }, // Allow "All Semesters" as a string
//   division: { type: String, required: true }, // Allow "All Divisions" as a string
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Announcement = mongoose.model("Announcement", AnnouncementSchema);

// module.exports = Announcement;

const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  announcement: { type: String, required: true },
  department: { type: [String], required: true }, // Store as an array
  semester: { type: [String], required: true }, // Store as an array
  division: { type: [String], required: true }, // Store as an array
  createdAt: { type: Date, default: Date.now },
});

const Announcement = mongoose.model("Announcement", announcementSchema);
module.exports = Announcement;
