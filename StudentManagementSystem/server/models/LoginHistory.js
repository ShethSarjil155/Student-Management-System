// const mongoose = require("mongoose");

// const loginHistorySchema = new mongoose.Schema({
//   role: {
//     type: String,
//     required: true,
//   },
//   userName: {
//     type: String,
//   },
//   loginTime: {
//     type: Date,
//     default: Date.now,
//   },
//   task: {
//     type: String,
//   },
// });

// const LoginHistory = mongoose.model("LoginHistory", loginHistorySchema);

// module.exports = LoginHistory;

const mongoose = require("mongoose");

const loginHistorySchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true, // Store enrollment here
  },
  fname: {
    type: String, // Store full name here
    required: true,
  },
  department: {
    type: String, // Department
    required: true,
  },
  semester: {
    type: String, // Semester
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  //   logoutTime: {
  //     type: Date, // Store logout time
  //     default: null,
  //   },
  task: {
    type: String, // Either "login" or "logout"
    required: true,
  },
});

const LoginHistory = mongoose.model("LoginHistory", loginHistorySchema);
module.exports = LoginHistory;
