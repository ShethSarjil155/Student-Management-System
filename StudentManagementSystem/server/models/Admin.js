// const mongoose = require("mongoose");

// const adminSchema = new mongoose.Schema({
//   username: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["admin"], default: "admin" },
// });

// module.exports = mongoose.model("Admin", adminSchema);

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const adminSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6,
//   },
//   role: {
//     type: String,
//     default: "admin",
//     enum: ["admin"],
//   },
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
// });

// // Hash both password and confirmPassword before saving
// adminSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 12);
//   }
//   next();
// });

// // Generate JWT token
// adminSchema.methods.generateAuthToken = async function () {
//   try {
//     const token = jwt.sign({ _id: this._id, role: this.role }, Skey, {
//       expiresIn: "1d",
//     });
//     this.tokens = this.tokens.concat({ token });
//     await this.save();
//     return token;
//   } catch (error) {
//     throw new Error("Error generating token: " + error.message);
//   }
// };

// const Admin = mongoose.model("admins", adminSchema);
// module.exports = Admin;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Skey = "shethsarjilshethsarjilshethsarjilproject"; // Make sure this is stored securely (e.g., in .env)

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), // Email validation regex
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  role: {
    type: String,
    default: "admin",
    enum: ["admin"],
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Hash the password before saving the admin
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Generate JWT token
adminSchema.methods.generateAuthToken = async function () {
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

// Model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
