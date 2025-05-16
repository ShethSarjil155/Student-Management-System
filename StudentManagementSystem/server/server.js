// const express = require("express");
// const app = express();
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// require("./db/conn")
// const router = require("./routes/router")
// const port = 5000;
// app.use(express.json())
// app.use(cors())
// app.use(router)
// app.use(cookieParser())

// app.listen(port, () => {
//     console.log(`Server created at: ${port}`);
// })

//previous code:-------------------------------------------
// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const mongoose = require("./db/conn");
// const Admin = require("./models/Admin"); // Import Admin schema
// const router = require("./routes/router");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());
// app.use(router);

// // Function to create default admin account
// const createAdminAccount = async () => {
//   try {
//     const existingAdmin = await Admin.findOne({ username: "admin@gmail.com" });

//     if (!existingAdmin) {
//       const bcrypt = require("bcryptjs");
//       const hashedPassword = await bcrypt.hash("12345678", 10);

//       const newAdmin = new Admin({
//         username: "admin@gmail.com",
//         password: hashedPassword,
//         role: "admin",
//       });

//       await newAdmin.save();
//       console.log("Default admin account created successfully!");
//     } else {
//       console.log("Admin account already exists.");
//     }
//   } catch (err) {
//     console.error("Error creating admin account:", err.message);
//   }
// };

// // Start the server
// app.listen(port, async () => {
//   console.log(`Server running on port ${port}`);
//   await createAdminAccount(); // Ensure the admin account is created when the server starts
// });
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Admin = require("./models/Admin"); // Import Admin schema
const Routes = require("./routes/router"); // Import student routes
const Result = require("./models/Result");
const Student = require("./models/userSchema");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// Middleware

require("./db/conn");
app.use(express.json());
app.use("/uploads/results", express.static("uploads/results")); // Serve uploaded files
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  })
);
app.use(cors());
app.use(express.json({ limit: "450mb" })); // Handle large payloads
app.use(express.urlencoded({ extended: true, limit: "450mb" }));

app.use(cookieParser());

// Routes
app.use("/api", Routes);

// Function to create default admin account
// const createAdminAccount = async () => {
//   try {
//     const existingAdmin = await Admin.findOne({ username: "admin@gmail.com" });

//     if (!existingAdmin) {
//       const bcrypt = require("bcryptjs");
//       const hashedPassword = await bcrypt.hash("12345678", 10);

//       const newAdmin = new Admin({
//         username: "admin@gmail.com",
//         password: hashedPassword,
//         role: "admin",
//       });

//       await newAdmin.save();
//       console.log("Default admin account created successfully!");
//     } else {
//       console.log("Admin account already exists.");
//     }
//   } catch (err) {
//     console.error("Error creating admin account:", err.message);
//   }
// };

const createAdminAccount = async () => {
  try {
    // Check if an admin with the given username already exists
    const existingAdmin = await Admin.findOne({ username: "admin@gmail.com" });

    if (!existingAdmin) {
      const bcrypt = require("bcryptjs");
      const hashedPassword = await bcrypt.hash("12345678", 12); // Use 12 salt rounds for stronger security

      const newAdmin = new Admin({
        username: "admin@gmail.com",
        password: hashedPassword,
        role: "admin",
      });

      await newAdmin.save();
      console.log("Default admin account created successfully!");
    } else {
      console.log("Admin account already exists.");
    }
  } catch (err) {
    console.error("Error creating admin account:", err.message);
  }
};

const updateAdminPassword = async () => {
  const username = "admin@gmail.com";
  const plainPassword = "12345678";

  try {
    const hashedPassword = await bcrypt.hash(plainPassword, 12);
    const admin = await Admin.findOneAndUpdate(
      { username },
      { password: hashedPassword },
      { new: true }
    );

    console.log("Updated Admin Password:", admin);
  } catch (error) {
    console.error("Error updating password:", error);
  }
};

async function fixEnrollmentNumbers() {
  const results = await Result.find();
  for (let result of results) {
    let fixedEnrollment = result.enrollment.toString();
    if (fixedEnrollment.includes("E")) {
      fixedEnrollment = BigInt(Number(fixedEnrollment)).toString(); // Convert scientific notation
    }
    await Result.updateOne(
      { _id: result._id },
      { $set: { enrollment: fixedEnrollment } }
    );
  }

  console.log("Enrollment numbers fixed!");
  mongoose.connection.close();
}

//fixEnrollmentNumbers();

// updateAdminPassword();

// Start the server
app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
  await createAdminAccount(); // Ensure the admin account is created when the server starts
});
