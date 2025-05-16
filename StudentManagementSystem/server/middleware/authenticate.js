// const jwt = require("jsonwebtoken");
// const userdb = require("../models/userSchema");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     //console.log("token :0",token);
//     const verifytoken = jwt.verify(token, Skey);
//     //console.log(verifytoken);
//     const rootUser = await userdb.findOne({ _id: verifytoken._id });
//     //console.log(rootUser);

//     if (!rootUser) {
//       throw new Error("User not found");
//     }

//     (req.token = token), (req.rootUser = rootUser), (req.userId = rootUser._id);

//     next();
//   } catch (error) {
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized no token Provided" });
//   }
// };

// module.exports = authenticate;

// const jwt = require("jsonwebtoken");
// const Student = require("../models/userSchema");
// const Admin = require("../models/Admin");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ status: 401, message: "Unauthorized: No token provided" });
//     }

//     // Verify token
//     const verifiedToken = jwt.verify(token, Skey);

//     // Check if the user is a Student
//     let rootUser = await Student.findOne({ _id: verifiedToken._id });
//     if (!rootUser) {
//       // If not a Student, check if the user is an Admin
//       rootUser = await Admin.findOne({ _id: verifiedToken._id });
//     }

//     if (!rootUser) {
//       throw new Error("User not found");
//     }

//     // Add user details to the request object
//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;
//     req.role = rootUser.role;

//     next();
//   } catch (error) {
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized: Invalid token" });
//   }
// };

// module.exports = authenticate;

//previous:-------------------------------------------------------------
// const jwt = require("jsonwebtoken");
// const Student = require("../models/userSchema");
// const Admin = require("../models/Admin");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ status: 401, message: "Unauthorized: No token provided" });
//     }

//     // Verify the token
//     const verifiedToken = jwt.verify(token, Skey);

//     // Check if the user is a Student
//     let rootUser = await Student.findById(verifiedToken._id);
//     let userRole = "student"; // Default role as 'student'

//     if (!rootUser) {
//       // If not a Student, check if the user is an Admin
//       rootUser = await Admin.findById(verifiedToken._id);
//       userRole = "admin"; // Change role to 'admin'
//     }

//     if (!rootUser) {
//       return res.status(404).json({ status: 404, message: "User not found" });
//     }

//     // Attach user details and role to the request object
//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;
//     req.role = userRole; // 'student' or 'admin'

//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized: Invalid token" });
//   }
// };

// module.exports = authenticate;

// const jwt = require("jsonwebtoken");
// const Student = require("../models/userSchema");
// const Admin = require("../models/Admin");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ status: 401, message: "Unauthorized: No token provided" });
//     }

//     // Verify the token
//     const verifiedToken = jwt.verify(token, Skey);

//     let rootUser = null;
//     if (verifiedToken.role === "student") {
//       rootUser = await Student.findById(verifiedToken._id);
//     } else if (verifiedToken.role === "admin") {
//       rootUser = await Admin.findById(verifiedToken._id);
//     }

//     if (!rootUser) {
//       return res.status(404).json({ status: 404, message: "User not found" });
//     }

//     // Attach user details and role to the request object
//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;
//     req.role = verifiedToken.role;

//     next();
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized: Invalid token" });
//   }
// };

// module.exports = authenticate;

// const jwt = require("jsonwebtoken");
// const Student = require("../models/userSchema");
// const Admin = require("../models/Admin");

// const Skey = "shethsarjilshethsarjilshethsarjilproject";

// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1]; // Extract the token

//     if (!token) {
//       return res
//         .status(401)
//         .json({ status: 401, message: "Unauthorized: No token provided" });
//     }

//     // Verify the token
//     const verifiedToken = jwt.verify(token, Skey);

//     console.log("Verified Token:", verifiedToken); // Debugging step

//     let rootUser = null;
//     if (verifiedToken.role === "student") {
//       rootUser = await Student.findById(verifiedToken._id);
//     } else if (verifiedToken.role === "admin") {
//       rootUser = await Admin.findById(verifiedToken._id);
//     }

//     if (!rootUser) {
//       return res.status(404).json({
//         status: 404,
//         message: `${
//           verifiedToken.role.charAt(0).toUpperCase() +
//           verifiedToken.role.slice(1)
//         } not found`,
//       });
//     }

//     // Attach user details and role to the request object
//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;
//     req.role = verifiedToken.role;

//     next();
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res
//       .status(401)
//       .json({ status: 401, message: "Unauthorized: Invalid token" });
//   }
// };

// module.exports = authenticate;

const jwt = require("jsonwebtoken");
const Student = require("../models/userSchema");
const Admin = require("../models/Admin");

const Skey = "shethsarjilshethsarjilshethsarjilproject";

//working:---------------------------------------------
// const authenticate = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized: No token provided" });
//     }

//     const verifiedToken = jwt.verify(token, Skey);
//     const student = await Student.findById(verifiedToken._id);

//     if (!student || !student.tokens.some((t) => t.token === token)) {
//       return res
//         .status(401)
//         .json({ message: "Session expired. Please log in again." });
//     }

//     req.student = student;
//     req.token = token;
//     next();
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//   }
// };
//------------------------------------------------------

//latest working:---------------------------------------------
// const authenticate = async (req, res, next) => {
//   try {
//     // Get the token from the Authorization header
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized: No token provided" });
//     }

//     // Verify the token
//     const verifiedToken = jwt.verify(token, Skey);

//     // Determine the model based on the role in the token
//     let user;
//     if (verifiedToken.role === "admin") {
//       // If it's an admin, check the admin model
//       user = await Admin.findById(verifiedToken._id);
//     } else if (verifiedToken.role === "student") {
//       // If it's a student, check the student model
//       user = await Student.findById(verifiedToken._id);
//     }

//     // If no user is found or the token doesn't match, send an error
//     if (!user || !user.tokens.some((t) => t.token === token)) {
//       return res
//         .status(401)
//         .json({ message: "Session expired. Please log in again." });
//     }

//     // Attach the user to the request object based on the role
//     if (verifiedToken.role === "admin") {
//       req.admin = user;
//     } else if (verifiedToken.role === "student") {
//       req.student = user;
//     }

//     req.token = token; // Attach the token to the request
//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//   }
// };

//latest wokring:---------------------------------------------------
// const authenticate = async (req, res, next) => {
//   try {
//     // Extract the token from the Authorization header
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized: No token provided" });
//     }

//     const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Unauthorized: Invalid token format" });
//     }

//     // Verify the token
//     const Skey = "shethsarjilshethsarjilshethsarjilproject"; // Replace with your secret key
//     const verifiedToken = jwt.verify(token, Skey); // Decode and verify the token

//     // Determine the user model based on the role
//     let user;
//     if (verifiedToken.role === "admin") {
//       user = await Admin.findById(verifiedToken._id);
//     } else if (verifiedToken.role === "student") {
//       user = await Student.findById(verifiedToken._id);
//     } else {
//       return res.status(401).json({ message: "Unauthorized: Invalid role" });
//     }

//     // Check if the user exists and the token matches
//     if (!user || !user.tokens.some((t) => t.token === token)) {
//       return res
//         .status(401)
//         .json({ message: "Session expired. Please log in again." });
//     }

//     // Attach the user and token to the request
//     req.token = token;
//     if (verifiedToken.role === "admin") {
//       req.admin = user;
//     } else if (verifiedToken.role === "student") {
//       req.student = user;
//     }

//     next(); // Pass control to the next middleware/route handler
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//   }
// };

const authenticate = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    }

    // Verify the token
    const Skey = "shethsarjilshethsarjilshethsarjilproject"; // Replace with your secret key
    const verifiedToken = jwt.verify(token, Skey); // Decode and verify the token

    console.log("Verified Token:", verifiedToken); // Debugging log

    // Ensure that _id exists in token
    if (!verifiedToken._id) {
      return res
        .status(401)
        .json({ message: "Invalid token: No user ID found" });
    }

    // Determine the user model based on the role
    let user;
    if (verifiedToken.role === "admin") {
      user = await Admin.findById(verifiedToken._id);
    } else if (verifiedToken.role === "student") {
      user = await Student.findById(verifiedToken._id);
    } else {
      return res.status(401).json({ message: "Unauthorized: Invalid role" });
    }

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found. Please log in again." });
    }

    console.log("Authenticated User:", user); // Debugging log

    // Check if token exists in user's tokens array
    if (!user.tokens || !user.tokens.some((t) => t.token === token)) {
      return res
        .status(401)
        .json({ message: "Session expired. Please log in again." });
    }

    // Attach the user and token to the request
    req.token = token;
    req.user = user; // Attach user to req.user for flexibility
    if (verifiedToken.role === "admin") {
      req.admin = user;
    } else if (verifiedToken.role === "student") {
      req.student = user;
    }

    next(); // Pass control to the next middleware/route handler
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};

module.exports = authenticate;
