require("dotenv").config();
const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const Student = require("../models/userSchema");
const infodb = require("../models/infoSchema");
const Admin = require("../models/Admin");
const LoginHistory = require("../models/LoginHistory");
const Complaint = require("../models/Complaints");
const Announcement = require("../models/Announcement");
const Notification = require("../models/Notification");
const Attendnace = require("../models/Attendnace");
const Result = require("../models/Result");
const authenticate = require("../middleware/authenticate");
const { SpeechClient } = require("@google-cloud/speech");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const Skey = "shethsarjilshethsarjilshethsarjilproject";
const stringSimilarity = require("string-similarity");
const WavDecoder = require("wav-decoder");
const AudioBufferUtils = require("audio-buffer-utils");
const WavEncoder = require("wav-encoder");
const AudioContext = require("audio-context");
const fs = require("fs");
// Utility for signature matching
const Meyda = require("meyda");
const path = require("path");
const cosineSimilarity = require("cosine-similarity");
const fft = require("fft.js");
const wav = require("wav");
const bodyParser = require("body-parser");
const ffmpeg = require("fluent-ffmpeg");
const mongoose = require("mongoose");
const multer = require("multer");
const csvParser = require("csv-parser");
const xlsx = require("xlsx");
const nodemailer = require("nodemailer");
const twilio = require("twilio");

// Multer config for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/results";
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// 🔹 Twilio Credentials
const SID = "your sid";
const TOKEN = "your token";
const TWILIO_PHONE = "your twilio number";
const client2 = new twilio(SID, TOKEN);

// Twilio Credentials for SMS & WhatsApp
const TWILIO_SID = "your sid id";
const TWILIO_AUTH_TOKEN = "youy twilio auth token";
const TWILIO_WHATSAPP = "your twiliowhatsapp number"; // Twilio Sandbox Number
const client3 = new twilio(TWILIO_SID, TWILIO_AUTH_TOKEN);

// 🔹 Gmail Credentials
const EMAIL_USER = "your gmail";
const EMAIL_PASS = "your gmail password";

// 🔹 Email Recipients (Add Multiple Emails Here)
const EMAIL_RECIPIENTS = ["the person you want to send mail"];

// 🔹 Phone Numbers (Add Multiple Numbers Here)
const PHONE_NUMBERS = ["your number"];

// WhatsApp Numbers
const WHATSAPP_NUMBERS = ["whatsapp:number"];

// 📧 **Email Transporter**
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// router.post("/register", async (req, res) => {
//   const { fname, email, password, cpassword } = req.body;

//   console.log(fname, email, password, cpassword);
//   if (!fname || !email || !password || !cpassword) {
//     res.status(422).json({ error: "fill the details" });
//   }
//   try {
//     const preuser = await userdb.findOne({ email: email });
//     if (preuser) {
//       res.status(422).json({ error: "This Email is Already Exist" });
//       console.log("Email Already Exist");
//     } else if (password !== cpassword) {
//       res
//         .status(422)
//         .json({ error: "Password and Confirm Password does not match" });
//     } else {
//       const finalUser = await userdb({
//         fname: fname,
//         email: email,
//         password: password,
//         cpassword: cpassword,
//       });
//       console.log("Registration Succesfully");
//       // console.log(finalUser);
//       const data = await finalUser.save();
//       // console.log(finalUser);
//       res.status(201).json({ status: 201, data });
//     }
//   } catch (error) {
//     res.status(422).json(error);
//     console.log("catch error :", error);
//   }
// });
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email, password);
//   if (!email || !password) {
//     res.status(422).json({ error: "fill all the details" });
//   }

//   try {
//     const userValid = await userdb.findOne({ email: email });

//     if (userValid) {
//       const isMatch = await bcrypt.compare(password, userValid.password);
//       console.log("55" + isMatch);
//       if (!isMatch) {
//         res.status(422).json({ error: "Invalid details" });
//       } else {
//         //token genrate

//         const token = await userValid.generateAuthtoken();

//         console.log("63" + token);
//         //cookie Genrate
//         res.cookie("usercookie", token, {
//           expires: new Date(Date.now() + 9000000),
//           httpOnly: false,
//         });
//         const result = {
//           userValid,
//           token,
//         };
//         res.status(202).json({ status: 202, result });
//       }
//     } else {
//       res.status(422).json({ error: "User does not Exist!" });
//     }
//   } catch (error) {
//     res.status(422).json(error);
//     console.log("catch block");
//   }
// });
// router.get("/validuser", authenticate, async (req, res) => {
//   try {
//     const validUserOne = await userdb.findOne({ _id: req.userId });
//     res.status(201).json({ status: 201, validUserOne });
//   } catch (error) {
//     res.status(401).json({ status: 401, error });
//   }
// });
// router.get("/logout", authenticate, async (req, res) => {
//   try {
//     req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
//       return curelem.tokens !== req.token;
//     });
//     res.clearCookie("usercookie", { path: "/" });
//     req.rootUser.save();
//     console.log("USer Logout");
//     res.status(201).json({ status: 201 });
//   } catch (error) {
//     console.log("Error");
//     res.status(401).json({ status: 401, error });
//   }
// });

// router.post("/adddata", async (req, res) => {
//   console.log(req.body);
//   const { fullname, age } = req.body;

//   console.log(fullname + age);

//   if (!fullname || !age) {
//     res.status(422).json("Plz Fill Data");
//   }

//   try {
//     const addData = new infodb({
//       fullname: fullname,
//       age: age,
//     });

//     const finaldata = await addData.save();
//     res.status(201).json({ status: 201, finaldata });
//     console.log("Data Added Successfully");
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });
// router.get("/getdata", async (req, res) => {
//   try {
//     const getAllData = await infodb.find();
//     res.status(201).json(getAllData);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });
// router.delete("/deletedata/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log(id);
//     const deletedData = await infodb.findByIdAndDelete({ _id: id });
//     console.log(deletedData);
//     res.status(201).json(deletedData);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });
// router.get("/getdata/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const selectedData = await infodb.findById({ _id: id });
//     res.status(201).json(selectedData);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });
// router.patch("/updatedata/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = await infodb.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     console.log("check :", updatedData);
//     res.status(201).json(updatedData);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });

//Register a student
// router.post("/student/register", async (req, res) => {
//   const {
//     fname,
//     enrollment,
//     password,
//     confirmPassword,
//     division,
//     department,
//     semester,
//     rollNo,
//     voicePhrase,
//     voiceSignature,
//   } = req.body;

//   try {
//     // Check if password and confirmPassword match
//     if (password !== confirmPassword) {
//       return res
//         .status(400)
//         .json({ error: "Password and Confirm Password do not match" });
//     }

//     // Create new student
//     const newStudent = new Student({
//       fname,
//       enrollment,
//       password,
//       confirmPassword,
//       division,
//       department,
//       semester,
//       rollNo,
//       voicePhrase,
//       voiceSignature,
//     });

//     // Save student
//     await newStudent.save();
//     res.status(201).json({ message: "Student registered successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to register student" });
//   }
// });

//new code for register
// Predefined sentences for voice recording
const voiceSentences = [
  "I love to learn new things.",
  "Coding is fun and exciting.",
  "Today is a beautiful day.",
  "Practice makes perfect.",
  "Always try your best.",
];

const client = new SpeechClient();

router.get("/student/random-sentence", (req, res) => {
  const randomIndex = Math.floor(Math.random() * voiceSentences.length);
  const randomSentence = voiceSentences[randomIndex];
  res.json({ sentence: randomSentence });
});

// Student Registration

// API route to handle registration
router.post("/student/register", async (req, res) => {
  try {
    const {
      fname,
      enrollment,
      password,
      confirmPassword,
      division,
      department,
      semester,
      rollNo,
      voicePhrase,
      voiceSignature, // Base64 string received from frontend
    } = req.body;

    // Check if enrollment number already exists
    const existingStudent = await Student.findOne({ enrollment });
    if (existingStudent) {
      return res
        .status(400)
        .json({ error: "Enrollment number already exists" });
    }

    // Validation for password matching
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Create new student
    const newStudent = new Student({
      fname,
      enrollment,
      password,
      division,
      department,
      semester,
      rollNo,
      voicePhrase, // Store the voice phrase that the user speaks
      voiceSignature, // Store the base64 signature
    });

    // Save the student to the database
    await newStudent.save();

    res
      .status(200)
      .json({ success: true, message: "Student registered successfully!" });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ error: "Registration failed!" });
  }
});

router.post("/student/verify-voice", async (req, res) => {
  try {
    const { enrollment, voiceSignature } = req.body;

    // Find the student by enrollment
    const student = await Student.findOne({ enrollment });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Audio file path (you should handle file uploads before this step)
    const filePath = path.join(__dirname, "path_to_audio", voiceSignature); // path to the uploaded audio file

    // Read the audio file
    const audioBytes = fs.readFileSync(filePath).toString("base64");

    // Configure the request for Google Speech-to-Text
    const request = {
      audio: {
        content: audioBytes,
      },
      config: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "en-US",
      },
    };

    // Send the audio data to Google Cloud Speech-to-Text
    const [response] = await client.recognize(request);
    const transcript = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");

    // Compare the transcribed text with the stored voice signature
    if (transcript === student.voiceSignature) {
      res.status(200).json({
        success: true,
        message: "Voice verified successfully",
      });
    } else {
      res.status(401).json({
        success: false,
        error: "Voice verification failed",
      });
    }
  } catch (error) {
    console.error("Voice verification error:", error.message);
    res.status(500).json({ error: "Failed to verify voice" });
  }
});

//login:----

// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     // Find student by enrollment number
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the provided password matches the stored password
//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Send the stored voicePhrase to the frontend for verification in the next step
//     res.status(200).json({
//       message: "Enrollment and password verified",
//       voicePhrase: student.voicePhrase,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     // Step 1: Find the student by enrollment
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Step 2: Verify the password
//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Step 3: Generate a temporary token for the voice verification step
//     const token = jwt.sign({ userId: student._id }, Skey, {
//       expiresIn: "5h",
//     });

//     // Step 4: Send back the voice phrase and token
//     res.status(200).json({
//       message: "Enrollment and password verified",
//       voicePhrase: student.voicePhrase, // Phrase to match
//       token, // Temporary token
//     });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Send the stored voicePhrase for voice authentication
//     // const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
//     //   expiresIn: "1d",
//     // });

//     // res.status(200).json({
//     //   message: "Login successful. Proceed to voice authentication.",
//     //   voicePhrase: student.voicePhrase,
//     //   token,
//     // });

//     const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
//       expiresIn: "1d",
//     });
//     res.status(200).json({
//       message: "Login successful",
//       voicePhrase: student.voicePhrase,
//       token, // Send the token to the frontend
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// student-login route (Backend)
// student-login route (Backend)
// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res
//         .status(404)
//         .json({ field: "enrollment", message: "Enrollment number is invalid" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res
//         .status(401)
//         .json({ field: "password", message: "Password is incorrect" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
//       expiresIn: "1d",
//     });

//     // Save token to the database
//     student.tokens = student.tokens.concat({ token });
//     await student.save();

//     // Log the token to verify it's being generated
//     console.log("Generated Token:", token);

//     // Send the token and other data to the frontend
//     res.status(200).json({
//       message: "Login successful",
//       voicePhrase: student.voicePhrase,
//       token,
//     });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Voice Authentication (Step 2: Verify Voice Phrase)

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, voicePhrase } = req.body;

//   try {
//     // Find student by enrollment number
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the provided voicePhrase matches the stored voicePhrase
//     if (student.voicePhrase !== voicePhrase) {
//       return res.status(401).json({ message: "Voice phrase does not match" });
//     }

//     // If everything matches, return successful login
//     res.status(200).json({ message: "Voice authentication successful" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, recordedAudioBase64 } = req.body;

//   // Step 1: Extract token from Authorization header
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     // Verify the token and extract the user ID
//     const decoded = jwt.verify(token, Skey);
//     const userId = decoded.userId;

//     // Step 2: Find the student by enrollment
//     const student = await Student.findOne({ enrollment, _id: userId });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Step 3: Verify the spoken phrase
//     if (
//       student.voicePhrase.toLowerCase().trim() !==
//       spokenPhrase.toLowerCase().trim()
//     ) {
//       return res.status(401).json({ message: "Spoken phrase does not match" });
//     }

//     // Step 4: Verify the voice signature
//     const cleanBase64 = (base64) => base64.replace(/\s/g, "").trim();
//     if (
//       cleanBase64(student.voiceSignature) !== cleanBase64(recordedAudioBase64)
//     ) {
//       return res
//         .status(401)
//         .json({ message: "Voice signature does not match" });
//     }

//     // Step 5: If everything matches, generate a new JWT token
//     const newToken = jwt.sign({ userId: student._id }, Skey, {
//       expiresIn: "1h",
//     });

//     res.status(200).json({
//       message: "Voice and phrase verified successfully",
//       token: newToken,
//     });
//   } catch (error) {
//     console.error("Error during voice verification:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, recordedAudioBase64 } = req.body;
//   const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, Skey);
//     console.log("Decoded token:", decoded); // Log decoded token

//     // Fetch student details
//     const student = await Student.findOne({ enrollmentNo: enrollment });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Log the stored phrase for comparison
//     console.log("Stored phrase:", student.voicePhrase);
//     console.log("Spoken phrase:", spokenPhrase);

//     // Compare spoken phrase with stored voice phrase (case insensitive)
//     if (spokenPhrase.toLowerCase() === student.voicePhrase.toLowerCase()) {
//       console.log("Phrase matched!"); // Log if phrase matched
//       // Perform further audio validation if needed (not in this example)

//       // Send success response with a new token
//       const newToken = jwt.sign({ userId: student._id }, Skey, {
//         expiresIn: "1h",
//       });
//       return res.status(200).json({
//         message: "Voice and phrase verified successfully",
//         token: newToken,
//       });
//     } else {
//       console.log("Phrase mismatch!"); // Log if phrase doesn't match
//       return res
//         .status(400)
//         .json({ message: "Voice or phrase verification failed" });
//     }
//   } catch (error) {
//     console.error("Error during verification:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, recordedAudioBase64 } = req.body;
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, Skey);

//     // Fetch student details
//     const student = await Student.findOne({ enrollment });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Fuzzy match the spoken phrase
//     const phraseSimilarity = stringSimilarity.compareTwoStrings(
//       spokenPhrase.trim().toLowerCase(),
//       student.voicePhrase.trim().toLowerCase()
//     );

//     console.log(`Phrase similarity score: ${phraseSimilarity}`);

//     if (phraseSimilarity < 0.8) {
//       // Match threshold: 80%
//       return res.status(400).json({
//         message: "Spoken phrase does not match the registered phrase.",
//       });
//     }

//     // Decode and validate the voice signature (simplified example)
//     const recordedBuffer = Buffer.from(recordedAudioBase64, "base64");
//     const decodedAudio = await wavDecoder.decode(recordedBuffer);

//     if (!decodedAudio) {
//       return res.status(400).json({ message: "Invalid audio format." });
//     }

//     // Compare the recorded audio length (basic comparison)
//     const storedVoiceLength = student.voiceSignature.length; // Assumes stored as base64
//     if (
//       Math.abs(decodedAudio.channelData[0].length - storedVoiceLength) > 1000
//     ) {
//       return res.status(400).json({ message: "Voice signature mismatch." });
//     }

//     // Generate a new token for successful verification
//     const newToken = jwt.sign({ userId: student._id }, Skey, {
//       expiresIn: "1h",
//     });
//     return res.status(200).json({
//       message: "Voice and phrase verified successfully",
//       token: newToken,
//     });
//   } catch (error) {
//     console.error("Error during verification:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, recordedAudioBase64 } = req.body;
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     const decoded = jwt.verify(token, Skey);
//     const student = await Student.findOne({ enrollment });

//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Compare spoken phrase with stored voice phrase (case insensitive)
//     if (spokenPhrase.toLowerCase() === student.voicePhrase.toLowerCase()) {
//       console.log("Phrase matched!");

//       // Convert the base64 audio data to a buffer
//       const audioBuffer = Buffer.from(recordedAudioBase64, "base64");

//       // Convert audio buffer to WAV using audio-buffer-utils
//       const wavData = AudioBufferUtils.toWav(audioBuffer);

//       // You can now compare or process the wavData here

//       const newToken = jwt.sign({ userId: student._id }, Skey, {
//         expiresIn: "1h",
//       });
//       return res.status(200).json({
//         message: "Voice and phrase verified successfully",
//         token: newToken,
//       });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Voice or phrase verification failed" });
//     }
//   } catch (error) {
//     console.error("Error during verification:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, recordedAudioBase64 } = req.body;
//   const token = req.headers["authorization"]?.split(" ")[1];

//   // Check if the token exists
//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, Skey);

//     // Find the student using the provided enrollment
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the spoken phrase matches the student's stored voice phrase
//     if (spokenPhrase.toLowerCase() === student.voicePhrase.toLowerCase()) {
//       console.log("Phrase matched!");

//       // Decode Base64 audio to Buffer
//       const audioBuffer = Buffer.from(recordedAudioBase64, "base64");

//       // Decode WAV file using WavDecoder
//       const decodedAudio = WavDecoder.decode.sync(audioBuffer);

//       // Access channel data for processing
//       const channelData = decodedAudio.channelData[0]; // Mono channel

//       // Re-encode the audio data to WAV format (if necessary)
//       const wavData = await WavEncoder.encode({
//         sampleRate: decodedAudio.sampleRate,
//         channelData: [channelData],
//       });

//       // (Optional) Further process WAV data (e.g., save or compare to stored data)
//       console.log("Decoded and re-encoded WAV data successfully.");

//       // Generate a new token for the user
//       const newToken = jwt.sign({ userId: student._id }, Skey, {
//         expiresIn: "1h",
//       });

//       return res.status(200).json({
//         message: "Voice and phrase verified successfully",
//         token: newToken,
//       });
//     } else {
//       return res
//         .status(400)
//         .json({ message: "Voice or phrase verification failed" });
//     }
//   } catch (error) {
//     console.error("Error during verification:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, audioFile } = req.body;

//   try {
//     // Find student by enrollment number
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Step 1: Validate the spoken phrase
//     if (student.voicePhrase.toLowerCase() !== spokenPhrase.toLowerCase()) {
//       return res.status(401).json({ message: "Voice phrase does not match" });
//     }

//     // Step 2: Validate the speaker's voice (use an external API for voice biometrics)
//     const voiceVerificationResponse = await axios.post(
//       "https://api.voice-recognition-service.com/verify",
//       {
//         userVoicePrint: student.voicePrint, // Pre-stored voice fingerprint
//         inputAudio: audioFile, // The audio data sent from the client
//       }
//     );

//     if (!voiceVerificationResponse.data.match) {
//       return res
//         .status(401)
//         .json({ message: "Voice does not match the registered user" });
//     }

//     // If both checks pass, return successful login
//     res.status(200).json({ message: "Voice authentication successful" });
//   } catch (error) {
//     console.error("Error during voice verification:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Valid User Route

// router.post("/verify-voice", async (req, res) => {
//   try {
//     const { enrollment, voicePhrase, recordedAudioBase64 } = req.body;

//     // Decode the recorded audio file
//     const audioBuffer = Buffer.from(recordedAudioBase64, "base64");
//     const decodedAudio = wav.decode.sync(audioBuffer);

//     // Get PCM data and sample rate
//     const pcmData = decodedAudio.channelData[0];
//     const sampleRate = decodedAudio.sampleRate;

//     // Extract MFCCs using Meyda
//     const mfccRecorded = Meyda.extract("mfcc", {
//       signal: pcmData,
//       sampleRate: sampleRate,
//       numberOfMFCCCoefficients: 13,
//     });

//     // Fetch and decode the stored voice signature
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     const storedAudioPath = path.join(
//       __dirname,
//       "path_to_audio_files",
//       student.voiceSignature
//     );
//     const storedAudioBuffer = fs.readFileSync(storedAudioPath);
//     const storedDecodedAudio = wav.decode.sync(storedAudioBuffer);

//     const pcmStored = storedDecodedAudio.channelData[0];
//     const mfccStored = Meyda.extract("mfcc", {
//       signal: pcmStored,
//       sampleRate: storedDecodedAudio.sampleRate,
//       numberOfMFCCCoefficients: 13,
//     });

//     // Compare MFCCs (using cosine similarity)
//     const similarity = calculateCosineSimilarity(mfccRecorded, mfccStored);

//     // Threshold for similarity (you can adjust this value)
//     const similarityThreshold = 0.85;

//     if (similarity > similarityThreshold) {
//       return res.status(200).json({ message: "Voice match successful" });
//     } else {
//       return res.status(401).json({ message: "Voice does not match" });
//     }
//   } catch (error) {
//     console.error("Error during voice verification:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// verify-voice route (Backend)
// router.post("/verify-voice", async (req, res) => {
//   const { token, voicePhrase } = req.body;

//   try {
//     // Verify the JWT token
//     const decoded = jwt.verify(token, Skey);

//     // Find the student using the decoded token information
//     const student = await Student.findById(decoded._id);
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the provided voicePhrase matches the stored voicePhrase
//     if (student.voicePhrase !== voicePhrase) {
//       return res.status(401).json({ message: "Voice phrase does not match" });
//     }

//     // If everything matches, return successful voice authentication
//     res.status(200).json({ message: "Voice authentication successful" });
//   } catch (error) {
//     console.error("Error during voice verification:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// verify-voice route (Backend)
// Verify voice route
// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, spokenPhrase, password } = req.body;

//   const token = req.headers.authorization?.split(" ")[1]; // Get token from the header
//   if (!token) {
//     return res.status(401).json({ message: "Token missing or invalid" });
//   }

//   try {
//     const decoded = jwt.verify(token, Skey); // Replace with your actual secret key
//     const userId = decoded.userId;

//     // Find the student by enrollment and user ID
//     const student = await Student.findOne({ enrollment, _id: userId });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Step 1: Verify the password using bcrypt
//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Password is incorrect" });
//     }

//     // Step 2: Verify the spoken phrase
//     if (
//       student.voicePhrase.toLowerCase().trim() !==
//       spokenPhrase.toLowerCase().trim()
//     ) {
//       return res.status(401).json({ message: "Spoken phrase does not match" });
//     }

//     // If everything matches, return the same token
//     res
//       .status(200)
//       .json({
//         message: "Voice, phrase, and password verified successfully",
//         token,
//       });
//   } catch (error) {
//     console.error("Error during voice verification:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // student-login route (Backend)
// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res
//         .status(404)
//         .json({ field: "enrollment", message: "Enrollment number is invalid" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res
//         .status(401)
//         .json({ field: "password", message: "Password is incorrect" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ userId: student._id, role: "student" }, Skey, {
//       expiresIn: "1d",
//     });

//     // Save token to the database
//     student.tokens = student.tokens.concat({ token });
//     await student.save();

//     // Send the token and other data to the frontend
//     res.status(200).json({
//       message: "Login successful",
//       voicePhrase: student.voicePhrase,
//       token,
//     });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

//new-code:------------------------
// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     // Find student by enrollment number
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the provided password matches the stored password
//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: student._id, role: student.role }, Skey, {
//       expiresIn: "1h", // Set expiration time
//     });

//     // Save the token to the student's tokens array in the database
//     student.tokens.push({ token });
//     await student.save();

//     // Send token and voicePhrase to the frontend
//     res.status(200).json({
//       message: "Login successful",
//       token,
//       voicePhrase: student.voicePhrase,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

//latest working code:---------------------------------
// router.post("/student-login", async (req, res) => {
//   const { enrollment, password, fname } = req.body;

//   try {
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Log login history
//     const loginHistory = new LoginHistory({
//       role: "user",
//       userName: enrollment,
//       loginTime: new Date(),
//       task: "login",
//     });

//     await loginHistory.save();

//     const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
//       expiresIn: "7d",
//     });

//     student.tokens = student.tokens || [];
//     student.tokens.push({ token });
//     await student.save();

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       voicePhrase: student.voicePhrase,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

//latest previous upated:------------------------------------
// router.post("/student-login", async (req, res) => {
//   const { enrollment, password } = req.body;

//   try {
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, student.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     // Log login history with full details
//     const loginHistory = new LoginHistory({
//       role: "student",
//       userName: enrollment,
//       fname: student.fname,
//       department: student.department,
//       semester: student.semester,
//       loginTime: new Date(),
//       task: "login",
//     });

//     await loginHistory.save();

//     const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
//       expiresIn: "7d",
//     });

//     student.tokens = student.tokens || [];
//     student.tokens.push({ token });
//     await student.save();

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       voicePhrase: student.voicePhrase,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/student-login", async (req, res) => {
  const { enrollment, password } = req.body;

  try {
    const student = await Student.findOne({ enrollment });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Check if the student is blocked
    if (student.isBlocked === "y") {
      return res.status(403).json({ message: "Student is blocked" });
    }

    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Log login history with full details
    const loginHistory = new LoginHistory({
      role: "student",
      userName: enrollment,
      fname: student.fname,
      department: student.department,
      semester: student.semester,
      loginTime: new Date(),
      task: "login",
    });

    await loginHistory.save();

    const token = jwt.sign({ _id: student._id, role: "student" }, Skey, {
      expiresIn: "7d",
    });

    student.tokens = student.tokens || [];
    student.tokens.push({ token });
    await student.save();

    res.status(200).json({
      message: "Login successful",
      token,
      voicePhrase: student.voicePhrase,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.post("/verify-voice", async (req, res) => {
//   const { enrollment, voicePhrase } = req.body;

//   try {
//     // Find student by enrollment number
//     const student = await Student.findOne({ enrollment });
//     if (!student) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     // Check if the provided voicePhrase matches the stored voicePhrase
//     if (student.voicePhrase !== voicePhrase) {
//       return res.status(401).json({ message: "Voice phrase does not match" });
//     }

//     // Send back the stored token (already added during `student-login`)
//     const token = student.tokens[student.tokens.length - 1]?.token;

//     res.status(200).json({
//       message: "Voice authentication successful",
//       token,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/verify-voice", async (req, res) => {
  const { enrollment, voicePhrase } = req.body;

  try {
    const student = await Student.findOne({ enrollment });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (student.voicePhrase !== voicePhrase) {
      return res.status(401).json({ message: "Voice authentication failed" });
    }

    const token = student.tokens[student.tokens.length - 1]?.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Session expired. Please log in again." });
    }

    res.status(200).json({
      message: "Voice authentication successful",
      token,
    });
  } catch (error) {
    console.error("Voice authentication error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.get("/validuser", authenticate, async (req, res) => {
//   try {
//     // Fetch the user by ID attached to the request from the `authenticate` middleware
//     const validUser = await Student.findById(req.userId).select("-password"); // Exclude password field

//     if (!validUser) {
//       return res.status(404).json({ status: 404, message: "User not found" });
//     }

//     res.status(200).json({ status: 200, validUser });
//   } catch (error) {
//     console.error("Error verifying user:", error);
//     res.status(500).json({ status: 500, message: "Server error" });
//   }
// });

router.get("/validuser", authenticate, async (req, res) => {
  try {
    // `req.student` is populated by the `authenticate` middleware
    const validUser = await Student.findById(req.student._id).select(
      "-password -tokens"
    );

    if (!validUser) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    res.status(200).json({
      status: 200,
      validUser,
      message: "User data fetched successfully",
    });
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
});

router.get("/student-logout", authenticate, async (req, res) => {
  try {
    if (!req.student) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Ensure semester and department are available in req.student
    const logoutHistory = new LoginHistory({
      role: "student",
      userName: req.student.enrollment,
      fname: req.student.fname,
      department: req.student.department, // Assuming `department` is a field in the `Student` model
      semester: req.student.semester, // Assuming `semester` is a field in the `Student` model
      loginTime: new Date(),
      task: "logout",
    });

    await logoutHistory.save();

    // Remove the token from student's session
    req.student.tokens = req.student.tokens.filter(
      (token) => token.token !== req.token
    );

    await req.student.save();

    // Clear the token cookie
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Logout error:", error.message);
    res.status(500).json({ error: "Failed to logout student" });
  }
});

// router.post("/admin-login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const admin = await Admin.findOne({ email });

//     if (!admin) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, admin.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign({ _id: admin._id }, Skey, { expiresIn: "1h" });

//     res.status(200).json({ token, admin });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// });

// POST request to login admin

// Admin login route

// router.post("/admin-login", async (req, res) => {
//   const { username, password } = req.body;

//   console.log("Request Body:", req.body); // Debugging

//   try {
//     // Find admin by username
//     const admin = await Admin.findOne({ username });
//     if (!admin) {
//       console.log("Admin not found.");
//       return res.status(401).json({ message: "Invalid username or password." });
//     }

//     console.log("Admin found:", admin);

//     // Compare the password
//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     console.log("Password valid:", isPasswordValid);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid username or password." });
//     }

//     // Generate and save token
//     const token = jwt.sign({ _id: admin._id, role: admin.role }, Skey, {
//       expiresIn: "1h",
//     });
//     admin.tokens.push({ token });
//     await admin.save();

//     return res.status(200).json({ token, admin });
//   } catch (error) {
//     console.error("Error during login:", error);
//     return res.status(500).json({ message: "Server error." });
//   }
// });

router.post("/admin-login", async (req, res) => {
  const { username, password } = req.body;

  // console.log("Request Body:", req.body); // Debugging input

  try {
    // Find admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.log("Admin not found.");
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // console.log("Admin found:", admin);

    // DEBUG: Manually compare the password
    // const storedPassword = admin.password; // Hashed password from DB
    // const inputPassword = password; // Plain-text password from request

    // bcrypt.compare(inputPassword, storedPassword, (err, result) => {
    //   if (err) {
    //     console.error("Error comparing passwords:", err);
    //   } else {
    //     console.log("Password Match (Debug):", result); // Should be true if passwords match
    //   }
    // });

    // Compare password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    // console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // Generate JWT token
    const token = jwt.sign({ _id: admin._id, role: admin.role }, Skey, {
      expiresIn: "1h",
    });
    admin.tokens.push({ token });
    await admin.save();

    return res.status(200).json({ token, admin });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Server error." });
  }
});

// router.get("/students", authenticate, async (req, res) => {
//   try {
//     const students = await Student.find(); // Fetch all students from the database
//     res.status(200).json(students);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Failed to fetch students." });
//   }
// });

// router.get("/students", authenticate, async (req, res) => {
//   try {
//     const { search } = req.query; // Get search query from request

//     let filter = {};
//     if (search) {
//       filter = {
//         $or: [
//           { fname: { $regex: search, $options: "i" } }, // Case-insensitive search for fname
//           { enrollment: { $regex: search, $options: "i" } }, // Case-insensitive search for enrollment
//         ],
//       };
//     }

//     const students = await Student.find(filter);
//     res.status(200).json(students);
//   } catch (error) {
//     console.error("Error fetching students:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.get("/students", authenticate, async (req, res) => {
  try {
    const { department, semester, division } = req.query;
    let filter = {};

    if (department) filter.department = department;
    if (semester) filter.semester = semester;
    if (division) filter.division = division;

    const students = await Student.find(filter);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// router.get("/login-history", async (req, res) => {
//   try {
//     const loginHistory = await LoginHistory.find();
//     res.status(201).json(loginHistory);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// });

// router.get("/student-history", authenticate, async (req, res) => {
//   const { enrollment } = req.query; // Optional: fetch history for a specific student

//   try {
//     let history;
//     if (enrollment) {
//       // Fetch history for a specific student
//       history = await LoginHistory.find({ userName: enrollment });
//     } else {
//       // Fetch history for all students
//       history = await LoginHistory.find();
//     }

//     res.status(200).json(history);
//   } catch (error) {
//     console.error("Error fetching history:", error);
//     res.status(500).json({ message: "Failed to fetch history." });
//   }
// });

router.get("/student-history", authenticate, async (req, res) => {
  const { search } = req.query; // Get search query (name or enrollment)

  try {
    let query = {};

    if (search) {
      query = {
        $or: [
          { fname: { $regex: search, $options: "i" } }, // Case-insensitive search by name
          { userName: { $regex: search, $options: "i" } }, // Case-insensitive search by enrollment
        ],
      };
    }

    const history = await LoginHistory.find(query);

    res.status(200).json(history);
  } catch (error) {
    console.error("Error fetching history:", error);
    res.status(500).json({ message: "Failed to fetch history." });
  }
});

// Block Student by Enrollment
router.put("/blocked/student/:enrollment", authenticate, async (req, res) => {
  const { enrollment } = req.params;

  try {
    const result = await Student.updateOne(
      { enrollment: enrollment }, // Use enrollment instead of email
      { $set: { isBlocked: "y" } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({
      message: `Student blocked successfully`,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Unblock Student by Enrollment
router.put("/unblocked/student/:enrollment", authenticate, async (req, res) => {
  const { enrollment } = req.params;

  try {
    const result = await Student.updateOne(
      { enrollment: enrollment }, // Use enrollment instead of email
      { $set: { isBlocked: "n" } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.json({
      message: `Student unblocked successfully`,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Submit a new complaint
router.post("/submit", authenticate, async (req, res) => {
  try {
    // Ensure student is authenticated
    if (!req.student) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Student not found" });
    }

    const { subject, description } = req.body;
    if (!subject || !description) {
      return res
        .status(400)
        .json({ message: "Subject and description are required" });
    }

    const newComplaint = new Complaint({
      studentId: req.student._id, // Ensure this is valid
      subject,
      description,
      status: "Pending",
      createdAt: new Date(),
    });

    await newComplaint.save();
    res.status(201).json({
      message: "Complaint submitted successfully",
      complaint: newComplaint,
    });
  } catch (error) {
    console.error("Complaint submission error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all complaints of the logged-in student
router.get("/my-complaints", authenticate, async (req, res) => {
  try {
    const complaints = await Complaint.find({ studentId: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(complaints);
  } catch (error) {
    console.error("Fetching complaints error:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// Delete a complaint
router.delete("/delete-complaint/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    // Find the complaint by ID
    const complaint = await Complaint.findById(id);

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found." });
    }

    // Check if the complaint belongs to the logged-in student (compare studentId)
    if (complaint.studentId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this complaint." });
    }

    // Delete the complaint
    await Complaint.findByIdAndDelete(id);

    res.status(200).json({ message: "Complaint deleted successfully." });
  } catch (error) {
    console.error("Error deleting complaint:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

// routes/complaintRoutes.js
// router.get("/complaints", authenticate, async (req, res) => {
//   try {
//     const complaints = await Complaint.find({ studentId: req.user._id });
//     res.json(complaints);
//     console.log(complaints);
//   } catch (error) {
//     console.error("Error fetching complaints:", error);
//     res.status(500).json({ message: "Failed to fetch complaints" });
//   }
// });

// router.get("/complaints", authenticate, async (req, res) => {
//   try {
//     // Fetch all complaints and populate the studentId with student details
//     const complaints = await Complaint.find() // No filter by studentId anymore
//       .populate("studentId", "fname subject semester department firstname") // Populate the studentId field
//       .exec();

//     // Log the fetched complaints with student details
//     console.log("Fetched Complaints with Student Details:", complaints);

//     // Send the complaints as the response
//     res.json(complaints);
//   } catch (error) {
//     console.error("Error fetching complaints:", error);
//     res.status(500).json({ message: "Failed to fetch complaints" });
//   }
// });

router.get("/complaints", authenticate, async (req, res) => {
  try {
    const { status } = req.query; // Get status from query params
    let filter = {};

    if (status && status !== "All") {
      filter.status = status; // Filter by pending/resolved
    }

    const complaints = await Complaint.find(filter).populate(
      "studentId",
      "fname subject semester department firstname"
    );

    res.json(complaints);
  } catch (error) {
    console.error("Error fetching complaints:", error);
    res.status(500).json({ message: "Failed to fetch complaints" });
  }
});

// routes/complaintRoutes.js

router.patch("/resolve/:id", authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid complaint ID" });
    }

    // Find the complaint by ID
    const complaint = await Complaint.findById(id).populate(
      "studentId",
      "fname department semester"
    ); // Populate student details

    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // Check if the complaint is already resolved
    if (complaint.status === "Resolved") {
      return res.status(400).json({ message: "Complaint already resolved" });
    }

    // Update the complaint's status to resolved
    complaint.status = "Resolved";
    await complaint.save();

    // Send the response with complaint and student details
    res.status(200).json({
      message: "Complaint marked as resolved",
      complaint: {
        _id: complaint._id,
        subject: complaint.subject,
        description: complaint.description,
        status: complaint.status,
        student: {
          firstname: complaint.studentId.firstname,
          department: complaint.studentId.department,
          semester: complaint.studentId.semester,
        },
        createdAt: complaint.createdAt,
      },
    });
  } catch (error) {
    console.error("Error resolving complaint:", error);
    res.status(500).json({ message: "Failed to resolve complaint" });
  }
});

// ✅ API: Search login history by name or enrollment
router.get("/loginhistorysearch", async (req, res) => {
  try {
    const { search } = req.query; // Get search query

    let query = {};
    if (search) {
      query = {
        $or: [
          { fname: { $regex: search, $options: "i" } }, // Case-insensitive search
          { userName: { $regex: search, $options: "i" } },
        ],
      };
    }

    const history = await StudentHistory.find(query).sort({ loginTime: -1 });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: "Error fetching login history" });
  }
});

// ✅ API: Delete all login history (Admin Only)
router.delete("/loginhistorydelete", authenticate, async (req, res) => {
  try {
    await LoginHistory.deleteMany({});
    res.status(200).json({ message: "All login history deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Error deleting login history" });
  }
});

// POST: Create an announcement
// workinggggggg
// -------------------------------------------------------------------------------------------
// router.post("/announcements", authenticate, async (req, res) => {
//   try {
//     const { announcement, department, semester, division } = req.body;

//     if (!announcement || !department) {
//       return res
//         .status(400)
//         .json({ message: "Announcement and Department are required." });
//     }

//     let targetDepartments = Array.isArray(department)
//       ? department
//       : [department];

//     if (targetDepartments.includes("All Departments")) {
//       targetDepartments = ["All Departments"];
//     }

//     const newAnnouncement = new Announcement({
//       announcement,
//       department: targetDepartments,
//       semester,
//       division,
//     });

//     await newAnnouncement.save();
//     res.status(201).json({ message: "Announcement posted successfully!" });
//   } catch (error) {
//     console.error("Error in posting announcement:", error); // Log error
//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// });
// --------------------------------------------------------------------------------------?

// router.post("/announcements", authenticate, async (req, res) => {
//   try {
//     let { announcement, department, semester, division } = req.body;

//     // Validate request
//     if (!announcement || !department) {
//       return res
//         .status(400)
//         .json({ message: "Announcement and Department are required." });
//     }

//     let targetDepartments = Array.isArray(department)
//       ? department
//       : [department];

//     // If "All Departments" is selected, set default values
//     if (targetDepartments.includes("All Departments")) {
//       targetDepartments = ["All Departments"];
//       semester = "All Semesters"; // Ensure semester is a string
//       division = "All Divisions"; // Ensure division is a string
//     }

//     // Convert semester and division to strings if they contain "All Semesters" or "All Divisions"
//     const targetSemester =
//       semester === "All Semesters" || !semester ? "All Semesters" : semester;

//     const targetDivision =
//       division === "All Divisions" || !division ? "All Divisions" : division;

//     // Save the announcement
//     const newAnnouncement = new Announcement({
//       announcement,
//       department: targetDepartments,
//       semester: targetSemester, // Store as a string instead of an array
//       division: targetDivision, // Store as a string instead of an array
//     });

//     await newAnnouncement.save();

//     res.status(201).json({ message: "Announcement posted successfully!" });
//   } catch (error) {
//     console.error("Error in posting announcement:", error);
//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// });

// router.post("/announcements", authenticate, async (req, res) => {
//   try {
//     const { announcement, department, semester, division } = req.body;

//     if (!announcement || !department) {
//       return res
//         .status(400)
//         .json({ message: "Announcement and Department are required." });
//     }

//     let targetDepartments = Array.isArray(department)
//       ? department
//       : [department];

//     if (targetDepartments.includes("All Departments")) {
//       targetDepartments = ["All Departments"];
//     }

//     // Save announcement to database
//     const newAnnouncement = new Announcement({
//       announcement,
//       department: targetDepartments,
//       semester,
//       division,
//     });

//     await newAnnouncement.save();

//     // Fetch all students who should receive this notification
//     const students = await Student.find({
//       $or: [
//         { department: { $in: targetDepartments } },
//         { department: "All Departments" },
//       ],
//       $or: [{ semester: semester }, { semester: "All Semesters" }],
//       $or: [{ division: division }, { division: "All Divisions" }],
//     });

//     // Create notifications for each student
//     const notifications = students.map((student) => ({
//       userId: student._id,
//       title: "New Announcment from Admin",
//       message: announcement,
//     }));

//     await Notification.insertMany(notifications);

//     res.status(201).json({
//       message: "Announcement posted successfully and notifications sent!",
//     });
//   } catch (error) {
//     console.error("Error in posting announcement:", error);
//     res.status(500).json({ message: "Server error.", error: error.message });
//   }
// });

// -----------------last working----------------------------------------
router.post("/announcements", authenticate, async (req, res) => {
  try {
    const { announcement, department, semester, division } = req.body;

    if (!announcement || !department) {
      return res
        .status(400)
        .json({ message: "Announcement and Department are required." });
    }

    let targetDepartments = Array.isArray(department)
      ? department
      : [department];
    let targetSemesters = Array.isArray(semester) ? semester : [semester];
    let targetDivisions = Array.isArray(division) ? division : [division];

    if (targetDepartments.includes("All Departments")) {
      targetDepartments = ["All Departments"];
    }
    if (targetSemesters.includes("All Semesters")) {
      targetSemesters = ["All Semesters"];
    }
    if (targetDivisions.includes("All Divisions")) {
      targetDivisions = ["All Divisions"];
    }

    // Save announcement to database
    const newAnnouncement = new Announcement({
      announcement,
      department: targetDepartments,
      semester: targetSemesters,
      division: targetDivisions,
    });

    await newAnnouncement.save();

    // Fetch all students who match the criteria
    const students = await Student.find({
      $or: [
        { department: { $in: targetDepartments } },
        { department: "All Departments" },
      ],
      $or: [
        { semester: { $in: targetSemesters } },
        { semester: "All Semesters" },
      ],
      $or: [
        { division: { $in: targetDivisions } },
        { division: "All Divisions" },
      ],
    });

    // Create notifications for each student
    const notifications = students.map((student) => ({
      userId: student._id,
      title: "New Announcement from Admin",
      message: announcement,
    }));

    await Notification.insertMany(notifications);

    res.status(201).json({
      message: "Announcement posted successfully and notifications sent!",
    });
  } catch (error) {
    console.error("Error in posting announcement:", error);
    res.status(500).json({ message: "Server error.", error: error.message });
  }
});

// ---------------------------------------------------------------------

// GET: Fetch announcements for students based on filters
// router.get("/getannouncements", authenticate, async (req, res) => {
//   try {
//     const { department, semester, division } = req.user; // Extract student details from token

//     // Fetch announcements matching student's department, semester, or division
//     const announcements = await Announcement.find({
//       $or: [
//         { department: "All Departments" }, // If "All Departments" is selected, show to everyone
//         { department: department },
//       ],
//       $or: [{ semester: semester }, { semester: null }], // Allow semester-specific or general announcements
//       $or: [{ division: division }, { division: null }], // Allow division-specific or general announcements
//     }).sort({ createdAt: -1 });

//     res.json(announcements);
//   } catch (error) {
//     console.error("Error fetching announcements:", error);
//     res.status(500).json({ message: "Server error." });
//   }
// });

// ------------------------------working-------------------------------------------
router.get("/getannouncements", authenticate, async (req, res) => {
  try {
    const { department, semester, division } = req.user; // Extract student details from token

    // Fetch announcements matching student's department, semester, or division
    const announcements = await Announcement.find({
      $or: [
        { department: "All Departments" }, // Show to everyone
        { department: department },
      ],
      $or: [
        { semester: "All Semesters" },
        { semester: semester },
        { semester: null },
      ],
      $or: [
        { division: "All Divisions" },
        { division: division },
        { division: null },
      ],
    }).sort({ createdAt: -1 });

    res.json(announcements);
  } catch (error) {
    console.error("Error fetching announcements:", error);
    res.status(500).json({ message: "Server error." });
  }
});

// --------------------------------------------------------------------------------

// router.get("/getannouncements", authenticate, async (req, res) => {
//   try {
//     const { department, semester, division } = req.user; // Extract student details from token

//     // Fetch announcements matching student's department, semester, or division
//     const announcements = await Announcement.find({
//       $or: [
//         { department: "All Departments" }, // If "All Departments" is selected, show to everyone
//         { department: department },
//       ],
//       $or: [
//         { semester: semester },
//         { semester: null },
//         { semester: "All Semesters" },
//       ],
//       $or: [
//         { division: division },
//         { division: null },
//         { division: "All Divisions" },
//       ],
//     }).sort({ createdAt: -1 });

//     res.json(announcements);
//   } catch (error) {
//     console.error("Error fetching announcements:", error);
//     res.status(500).json({ message: "Server error." });
//   }
// });

router.get("/admin/getannouncements", authenticate, async (req, res) => {
  try {
    // Fetch all announcements (Admins can see everything)
    const announcements = await Announcement.find().sort({ createdAt: -1 });

    res.json(announcements);
  } catch (error) {
    console.error("Error fetching all announcements:", error);
    res.status(500).json({ message: "Server error." });
  }
});

router.delete(
  "/admin/deleteannouncement/:id",
  authenticate,
  async (req, res) => {
    try {
      const { id } = req.params;

      const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

      if (!deletedAnnouncement) {
        return res.status(404).json({ message: "Announcement not found." });
      }

      res.json({ message: "Announcement deleted successfully." });
    } catch (error) {
      console.error("Error deleting announcement:", error);
      res.status(500).json({ message: "Server error." });
    }
  }
);

router.get("/notifications", authenticate, async (req, res) => {
  try {
    const userId = req.user.id;

    const notifications = await Notification.find({ userId });

    res.json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ message: "Server error." });
  }
});

router.delete("/notifications/clear", authenticate, async (req, res) => {
  try {
    const userId = req.user.id;

    await Notification.deleteMany({ userId });

    res.json({ message: "Notifications cleared." });
  } catch (error) {
    console.error("Error deleting notifications:", error);
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/attendance", authenticate, async (req, res) => {
  try {
    const { date, department, semester, division, students } = req.body;

    if (!date || !department || !semester || !division || !students) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const attendance = new Attendnace({
      date,
      department,
      semester,
      division,
      students,
    });

    await attendance.save();
    res.status(201).json({ message: "Attendance recorded successfully" });
  } catch (error) {
    console.error("Error saving attendance:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get Attendance for a specific student
// router.get("/student/attendance", authenticate, async (req, res) => {
//   try {
//     const studentId = req.user.studentId; // Extracted from JWT token

//     if (!mongoose.Types.ObjectId.isValid(studentId)) {
//       return res.status(400).json({ message: "Invalid student ID format" });
//     }

//     const attendanceRecords = await Attendnace.find({
//       "students.studentId": studentId,
//     });

//     if (!attendanceRecords.length) {
//       return res.status(404).json({ message: "No attendance records found" });
//     }

//     // Extract student-specific attendance
//     const studentAttendance = attendanceRecords.map((record) => {
//       const studentData = record.students.find(
//         (student) => student.studentId.toString() === studentId
//       );

//       return {
//         date: record.date,
//         department: record.department,
//         semester: record.semester,
//         division: record.division,
//         status: studentData.status,
//       };
//     });

//     res.json(studentAttendance);
//   } catch (error) {
//     console.error("Error fetching attendance:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Get Student Attendance (No Need to Pass studentId in URL)
router.get("/student/attendance", authenticate, async (req, res) => {
  try {
    const studentId = req.student._id; // Extract studentId from authenticated user

    if (!studentId || !mongoose.Types.ObjectId.isValid(studentId)) {
      console.error("Invalid Student ID:", studentId); // Debugging log
      return res.status(400).json({ message: "Invalid student ID format" });
    }

    // Find all attendance records where the student exists in the array
    const attendanceRecords = await Attendnace.find({
      "students.studentId": studentId,
    });

    if (!attendanceRecords.length) {
      return res.status(404).json({ message: "No attendance records found" });
    }

    // Extract only the relevant student attendance data
    const studentAttendance = attendanceRecords.map((record) => {
      const studentData = record.students.find(
        (student) => student.studentId.toString() === studentId.toString()
      );

      return {
        date: record.date,
        department: record.department,
        semester: record.semester,
        division: record.division,
        status: studentData ? studentData.status : "Unknown",
      };
    });

    res.json(studentAttendance);
  } catch (error) {
    console.error("Error fetching attendance:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Upload Results Route (Admin Only)
// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//     const { department, semester, division } = req.body;
//     const results = [];

//     // fs.createReadStream(req.file.path)
//     //   .pipe(csvParser())
//     //   .on("data", async (row) => {
//     //     try {
//     //       const student = await Student.findOne({
//     //         enrollment: row["Enrollment"],
//     //       });

//     //       if (student) {
//     //         results.push({
//     //           studentId: student._id,
//     //           department,
//     //           semester,
//     //           division,
//     //           subject: row["Subject"],
//     //           marks: row["Marks"],
//     //         });
//     //       }
//     //     } catch (error) {
//     //       console.error("Error finding student:", error);
//     //     }
//     //   })
//     //   .on("end", async () => {
//     //     if (results.length > 0) {
//     //       await Result.insertMany(results);
//     //       res.json({ message: "Results uploaded successfully" });
//     //     } else {
//     //       res
//     //         .status(400)
//     //         .json({ message: "No valid students found in the file" });
//     //     }
//     //     fs.unlinkSync(req.file.path); // Delete file after processing
//     //   });
//     fs.createReadStream(req.file.path)
//       .pipe(csvParser())
//       .on("data", async (row) => {
//         try {
//           console.log("Checking student:", row["Enrollment"]);
//           const student = await Student.findOne({
//             enrollment: row["Enrollment"].trim(),
//           });

//           if (student) {
//             console.log("Student found:", student);
//             results.push({
//               studentId: student._id,
//               department,
//               semester,
//               division,
//               subject: row["Subject"],
//               marks: row["Marks"],
//             });
//           } else {
//             console.log("Student not found for enrollment:", row["Enrollment"]);
//           }
//         } catch (error) {
//           console.error("Error finding student:", error);
//         }
//       })
//       .on("end", async () => {
//         if (results.length > 0) {
//           await Result.insertMany(results);
//           res.json({ message: "Results uploaded successfully" });
//         } else {
//           res
//             .status(400)
//             .json({ message: "No valid students found in the file" });
//         }
//         fs.unlinkSync(req.file.path); // Delete file after processing
//       });
//   }
// );

// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded" });
//       }

//       const { department, semester, division } = req.body;
//       const results = [];

//       console.log("Processing CSV file:", req.file.path);

//       fs.createReadStream(req.file.path)
//         .pipe(csvParser())
//         .on("data", async (row) => {
//           try {
//             // Ensure enrollment is treated as a string and trimmed
//             const enrollment = row["Enrollment"]
//               ? String(row["Enrollment"]).trim()
//               : "";
//             console.log("Checking student enrollment:", enrollment);

//             // Find student by enrollment number
//             const student = await Student.findOne({ enrollment });

//             if (student) {
//               results.push({
//                 studentId: student._id,
//                 department,
//                 semester,
//                 division,
//                 subject: row["Subject"]
//                   ? String(row["Subject"]).trim()
//                   : "Unknown",
//                 marks: row["Marks"] ? parseInt(row["Marks"], 10) : 0, // Ensure marks are integers
//               });
//             } else {
//               console.warn(`Student not found for enrollment: ${enrollment}`);
//             }
//           } catch (error) {
//             console.error("Error processing row:", error);
//           }
//         })
//         .on("end", async () => {
//           try {
//             if (results.length > 0) {
//               await Result.insertMany(results);
//               console.log("Results uploaded successfully");
//               res.json({ message: "Results uploaded successfully" });
//             } else {
//               res
//                 .status(400)
//                 .json({ message: "No valid students found in the file" });
//             }
//           } catch (error) {
//             console.error("Database error:", error);
//             res.status(500).json({ message: "Internal server error" });
//           }

//           // Delete the uploaded file after processing
//           fs.unlinkSync(req.file.path);
//         });
//     } catch (error) {
//       console.error("File upload error:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   }
// );

// router.get("/student/:studentId", authenticate, async (req, res) => {
//   try {
//     const results = await Result.find({
//       studentId: req.params.studentId,
//     }).populate("studentId", "enrollment name");
//     res.json(results);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching results" });
//   }
// });

// API Endpoint to Upload Result File
// CSV Upload & Process Route

// CSV Upload & Processing Route
// Admin Upload Results
// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file)
//         return res.status(400).json({ message: "No file uploaded" });

//       const { department, semester, division } = req.body;

//       // Read XLSX file
//       const workbook = xlsx.readFile(req.file.path);
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       // Convert sheet to JSON
//       const data = xlsx.utils.sheet_to_json(sheet, { raw: false });

//       const results = [];
//       const enrollments = new Set();

//       for (let row of data) {
//         let enrollment = row["Enrollment"]
//           ? row["Enrollment"].toString().trim()
//           : "";
//         let studentName = row["Name"] ? row["Name"].trim() : "Unknown";
//         let subject = row["Subject"] ? row["Subject"].trim() : "Unknown";
//         let marks = parseFloat(row["Marks"]);

//         if (!enrollment || isNaN(marks)) continue; // Skip invalid data

//         results.push({
//           enrollment,
//           studentName,
//           department,
//           semester,
//           division,
//           subject,
//           marks,
//         });

//         enrollments.add(enrollment);
//       }

//       // Store results in the database
//       await Result.insertMany(results);

//       // Send notifications to students
//       const students = await Student.find({
//         enrollment: { $in: Array.from(enrollments) },
//       });

//       const notifications = students.map((student) => ({
//         userId: student._id,
//         title: "New Result Uploaded",
//         message: `Your results for ${semester} semester have been uploaded.`,
//       }));

//       await Notification.insertMany(notifications);

//       fs.unlinkSync(req.file.path); // Delete file after processing

//       res.json({ message: "Results uploaded successfully" });
//     } catch (error) {
//       console.error("Error uploading results:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   }
// );

//previous--------------------------------------------------------------------------------------
// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file)
//         return res.status(400).json({ message: "No file uploaded" });

//       const { department, semester, division } = req.body;

//       // Read XLSX file
//       const workbook = xlsx.readFile(req.file.path);
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       // Convert sheet to JSON
//       const data = xlsx.utils.sheet_to_json(sheet, {
//         raw: false, // Prevents automatic conversion of numbers
//         defval: "", // Ensures empty cells are handled properly
//       });

//       const results = [];
//       const enrollments = new Set();

//       for (let row of data) {
//         let enrollment = row["Enrollment"];

//         if (enrollment) {
//           enrollment = enrollment.toString().trim(); // Convert to string and remove spaces
//           if (enrollment.includes("E")) {
//             enrollment = BigInt(Number(enrollment)).toString(); // Convert scientific notation to full string
//           }
//         }

//         let studentName = row["Name"] ? row["Name"].trim() : "Unknown";
//         let subject = row["Subject"] ? row["Subject"].trim() : "Unknown";
//         let marks = parseFloat(row["Marks"]);

//         if (!enrollment || isNaN(marks)) continue; // Skip invalid data

//         results.push({
//           enrollment,
//           studentName,
//           department,
//           semester,
//           division,
//           subject,
//           marks,
//         });

//         enrollments.add(enrollment);
//       }

//       // Store results in the database
//       await Result.insertMany(results);

//       // Send notifications to students
//       const students = await Student.find({
//         enrollment: { $in: Array.from(enrollments) },
//       });

//       if (students.length > 0) {
//         const notifications = students.map((student) => ({
//           userId: student._id,
//           title: "New Result Uploaded",
//           message: `Your results for ${semester} semester have been uploaded.`,
//         }));

//         await Notification.insertMany(notifications);
//       }

//       fs.unlinkSync(req.file.path); // Delete file after processing

//       res.json({
//         message: "Results uploaded successfully, and notifications sent.",
//       });
//     } catch (error) {
//       console.error("Error uploading results:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   }
// );
// ---------------------------------------------------------------------------------------------

// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file)
//         return res.status(400).json({ message: "No file uploaded" });

//       const { department, semester, division } = req.body;

//       // Read XLSX file
//       const workbook = xlsx.readFile(req.file.path);
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       // Convert sheet to JSON
//       const data = xlsx.utils.sheet_to_json(sheet, {
//         raw: false, // Prevents automatic conversion of numbers
//         defval: "", // Ensures empty cells are handled properly
//       });

//       const results = [];
//       const enrollments = new Set();

//       for (let row of data) {
//         let enrollment = row["Enrollment"];

//         if (enrollment) {
//           enrollment = enrollment.toString().trim(); // Convert to string and remove spaces
//           if (enrollment.includes("E")) {
//             enrollment = BigInt(Number(enrollment)).toString(); // Convert scientific notation to full string
//           }
//         }

//         let studentName = row["Name"] ? row["Name"].trim() : "Unknown";
//         let subject = row["Subject"] ? row["Subject"].trim() : "Unknown";
//         let marks = parseFloat(row["Marks"]);

//         if (!enrollment || isNaN(marks)) continue; // Skip invalid data

//         results.push({
//           enrollment,
//           studentName,
//           department,
//           semester,
//           division,
//           subject,
//           marks,
//         });

//         enrollments.add(enrollment);
//       }

//       // Store results in the database
//       await Result.insertMany(results);

//       // Fetch students who need to be notified
//       const students = await Student.find({
//         enrollment: { $in: Array.from(enrollments) },
//       });

//       if (students.length > 0) {
//         const notifications = students.map((student) => ({
//           userId: student._id,
//           title: "New Result Uploaded",
//           message: `Your results for ${semester} semester have been uploaded.`,
//         }));

//         await Notification.insertMany(notifications);

//         // ✅ Send email notifications
//         const transporter = nodemailer.createTransport({
//           service: "gmail",
//           secure: true,
//           port: 465,
//           auth: {
//             user: "sarjilark123@gmail.com", // Your email
//             pass: "tuqiduntyjepxhjg", // Your app password (use App Passwords, NOT your real password)
//           },
//         });

//         for (let student of students) {
//           const mailOptions = {
//             from: "sarjilark123@gmail.com",
//             to: "shethsarjil@gmail.com,malekburhaan@gmail.com,arsh110203@gmail.com", // Send to student's email
//             subject: "New Results Uploaded",
//             text: `Dear student,\n\nYour results for semester ${semester} have been uploaded. Please log in to check your marks.\n\nBest regards,\nStudent Management System`,
//           };

//           transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//               console.error(`Error sending email to ${student.email}:`, error);
//             } else {
//               console.log(`Email sent to ${student.email}:`, info.response);
//             }
//           });
//         }
//       }

//       fs.unlinkSync(req.file.path); // Delete file after processing

//       res.json({
//         message:
//           "Results uploaded successfully, notifications sent, and emails delivered.",
//       });
//     } catch (error) {
//       console.error("Error uploading results:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   }
// );

// router.post(
//   "/upload",
//   authenticate,
//   upload.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file)
//         return res.status(400).json({ message: "No file uploaded" });

//       const { department, semester, division } = req.body;

//       // Read XLSX file
//       const workbook = xlsx.readFile(req.file.path);
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];

//       // Convert sheet to JSON
//       const data = xlsx.utils.sheet_to_json(sheet, { raw: false, defval: "" });

//       const results = [];

//       for (let row of data) {
//         let enrollment = row["Enrollment"];
//         if (enrollment) enrollment = enrollment.toString().trim();
//         let studentName = row["Name"] ? row["Name"].trim() : "Unknown";
//         let subject = row["Subject"] ? row["Subject"].trim() : "Unknown";
//         let marks = parseFloat(row["Marks"]);
//         if (!enrollment || isNaN(marks)) continue;

//         results.push({
//           enrollment,
//           studentName,
//           department,
//           semester,
//           division,
//           subject,
//           marks,
//         });
//       }

//       // Store results in the database
//       await Result.insertMany(results);
//       fs.unlinkSync(req.file.path); // Delete file after processing

//       // 🔹 **Send Email Notification**
//       const mailOptions = {
//         from: EMAIL_USER,
//         to: EMAIL_RECIPIENTS.join(","), // Multiple recipients
//         subject: "New Results Uploaded",
//         text: `Dear Student,\n\nYour results for Semester ${semester} have been uploaded.\nPlease log in to check your marks.\n\nBest Regards,\nStudent Management System`,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error("Error sending email:", error);
//         } else {
//           console.log("Email sent:", info.response);
//         }
//       });

//       // 🔹 **Send SMS Notification**
//       for (let phoneNumber of PHONE_NUMBERS) {
//         await client2.messages.create({
//           body: `New results for Semester ${semester} have been uploaded. Check your marks now.`,
//           from: TWILIO_PHONE,
//           to: phoneNumber,
//         });
//       }

//       res.json({
//         message: "Results uploaded successfully, emails and SMS sent.",
//       });
//     } catch (error) {
//       console.error("Error uploading results:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   }
// );

// Upload Route
router.post(
  "/upload",
  authenticate,
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file)
        return res.status(400).json({ message: "No file uploaded" });

      const { department, semester, division } = req.body;

      // Read and Process XLSX File
      const workbook = xlsx.readFile(req.file.path);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const data = xlsx.utils.sheet_to_json(sheet, { raw: false, defval: "" });

      const results = [];
      const enrollments = new Set();

      for (let row of data) {
        let enrollment = row["Enrollment"]?.toString().trim();
        if (enrollment?.includes("E")) {
          enrollment = BigInt(Number(enrollment)).toString();
        }

        let studentName = row["Name"]?.trim() || "Unknown";
        let subject = row["Subject"]?.trim() || "Unknown";
        let marks = parseFloat(row["Marks"]);

        if (!enrollment || isNaN(marks)) continue;

        results.push({
          enrollment,
          studentName,
          department,
          semester,
          division,
          subject,
          marks,
        });
        enrollments.add(enrollment);
      }

      // Store Results in Database
      await Result.insertMany(results);

      // Find Students for Notifications
      const students = await Student.find({
        enrollment: { $in: Array.from(enrollments) },
      });

      if (students.length > 0) {
        const notifications = students.map((student) => ({
          userId: student._id,
          title: "New Result Uploaded",
          message: `Your results for Semester ${semester} have been uploaded.`,
        }));

        await Notification.insertMany(notifications);
      }

      // Send Email Notifications
      await transporter.sendMail({
        from: "your email",
        to: EMAIL_RECIPIENTS,
        subject: "New Results Uploaded",
        text: `Dear Students,\n\nYour results for Semester ${semester} have been uploaded. Please check your student portal.\n\nBest Regards,\nStudent Management System`,
      });

      // 🔹 **Send SMS Notification**
      for (let phoneNumber of PHONE_NUMBERS) {
        await client2.messages.create({
          body: `New results for Semester ${semester} have been uploaded. Check your marks now.`,
          from: TWILIO_PHONE,
          to: phoneNumber,
        });
      }

      res.json({
        message: "Results uploaded successfully, emails and SMS sent.",
      });

      // Send WhatsApp Messages
      for (let number of WHATSAPP_NUMBERS) {
        await client3.messages.create({
          from: TWILIO_WHATSAPP,
          to: number,
          body: `📢 Dear Student, Your results for Semester ${semester} have been uploaded. Please check your portal.`,
        });
      }

      fs.unlinkSync(req.file.path); // Delete the uploaded file

      res.json({
        message: "Results uploaded, emails & WhatsApp messages sent.",
      });
    } catch (error) {
      console.error("Error uploading results:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Fetch Results for Students
// router.get("/results", authenticate, async (req, res) => {
//   try {
//     const { enrollment } = req.query;

//     if (!enrollment) {
//       return res.status(400).json({ message: "Enrollment number is required" });
//     }

//     const results = await Result.find({ enrollment });

//     if (!results.length) {
//       return res
//         .status(404)
//         .json({ message: "No results found for this enrollment" });
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching results:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.get("/results", authenticate, async (req, res) => {
//   try {
//     const { enrollment } = req.query;
//     const loggedEnrollment = req.user.enrollment; // Get logged-in student's enrollment

//     if (!enrollment) {
//       return res.status(400).json({ message: "Enrollment number is required" });
//     }

//     if (enrollment !== loggedEnrollment) {
//       return res
//         .status(403)
//         .json({ message: "You can only view your own results." });
//     }

//     const results = await Result.find({ enrollment });

//     if (!results.length) {
//       return res
//         .status(404)
//         .json({ message: "No results found for this enrollment" });
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching results:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.get("/results", authenticate, async (req, res) => {
  try {
    const { enrollment } = req.query;
    const loggedEnrollment = req.user.enrollment;

    if (!enrollment) {
      return res.status(400).json({ message: "Enrollment number is required" });
    }

    if (enrollment !== loggedEnrollment) {
      return res
        .status(403)
        .json({ message: "You can only view your own results." });
    }

    // Fetch student details
    const student = await Student.findOne({ enrollment });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Fetch attendance records
    const attendanceRecords = await Attendnace.find({
      "students.enrollment": enrollment,
    });

    if (!attendanceRecords.length) {
      return res.status(404).json({ message: "No attendance records found" });
    }

    // Calculate total attendance percentage
    const totalClasses = attendanceRecords.length;
    const attendedClasses = attendanceRecords.filter((record) =>
      record.students.some(
        (s) => s.enrollment === enrollment && s.status === "Present"
      )
    ).length;

    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    // Fetch results
    let results = await Result.find({ enrollment });

    if (!results.length) {
      return res.status(404).json({ message: "No results found" });
    }

    let note = "";

    // Apply 40-mark restriction if attendance < 50%
    if (attendancePercentage < 50) {
      results = results.map((result) => ({
        ...result.toObject(),
        marks: 40, // Override marks
      }));
      note =
        "Your attendance is less than 50%, so you are only awarded passing marks (40).";
    }

    res.json({ results, note, attendancePercentage });
  } catch (error) {
    console.error("Error fetching results:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
