// const mongoose = require("mongoose")
// const validator = require("validator")
// const bcrypt = require("bcryptjs")
// const jwt = require("jsonwebtoken")
// const { json } = require("express")

// const Skey = "soelshaikhshaikhsoelshaikhsoelab"

// const userSchema = new mongoose.Schema({
//     fname: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Not Valid Email")
//             }
//         }
//     },

//     password: {
//         type: String,
//         required: true,
//         minlength: 6

//     },
//     cpassword: {
//         type: String,
//         required: true,
//         minlength: 6
//     },
//     tokens: [{
//         token: {
//             type: String,
//             required: true,
//         }
//     }],
//     dateCreated: {
//         type: Date,
//         default: Date.now
//     }
// })

// userSchema.pre("save", async function (next) {

//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12)
//         this.cpassword = await bcrypt.hash(this.cpassword, 12)
//     }
//     next();
// })

// userSchema.methods.generateAuthtoken = async function () {

//     try {

//         let token1 = jwt.sign({ _id: this._id }, Skey, {
//             expiresIn: "1d"
//         })

//         this.tokens = this.tokens.concat({ token: token1 })
//         await this.save()
//         return token1
//     } catch (error) {
//         res.status(422).json(error)
//     }
// }

// const userdb = new mongoose.model("users", userSchema)

// module.exports = userdb;

//previous:---------------------------------------------------------
// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const studentSchema = new mongoose.Schema({
//   fname: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   enrollment: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   division: {
//     type: String,
//     required: true,
//   },
//   department: {
//     type: String,
//     required: true,
//   },
//   semester: {
//     type: Number,
//     required: true,
//   },
//   rollNo: {
//     type: String,
//     required: true,
//   },
//   voicePhrase: {
//     type: String,
//     required: true, // Phrase used for voice recognition
//   },
//   voiceSignature: {
//     type: String,
//     required: true, // Processed voice data stored as a string
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//     minlength: 6,
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
//   dateCreated: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Hash passwords before saving the student
// studentSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     // Hash the password and confirmPassword
//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
//   }
//   next();
// });

// // Generate JWT token for authentication
// studentSchema.methods.generateAuthToken = async function () {
//   try {
//     const token = jwt.sign(
//       { _id: this._id, role: "student" },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1d",
//       }
//     );

//     this.tokens = this.tokens.concat({ token });
//     await this.save();
//     return token;
//   } catch (error) {
//     throw new Error("Error generating token: " + error.message);
//   }
// };

// // Export the model
// const Student = mongoose.model("students", studentSchema);
// module.exports = Student;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Skey = "shethsarjilshethsarjilshethsarjilproject";

const studentSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  enrollment: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  division: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  voicePhrase: {
    type: String,
    required: true,
  },
  voiceSignature: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  role: {
    type: String,
    default: "student",
    enum: ["student"],
  },
  isBlocked: {
    type: String,
    required: true,
    default: "n",
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Hash both password and confirmPassword before saving
studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Generate JWT token
studentSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id, role: this.role }, Skey, {
      expiresIn: "1d",
    });
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    throw new Error("Error generating token: " + error.message);
  }
};

const Student = mongoose.model("students", studentSchema);
module.exports = Student;
