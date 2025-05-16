// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;

//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       console.log(`EnrollmentNo: ${enrollmentNo}, Password: ${password}`);
//     }
//   };

//   return (
//     <div className="outer-container">
//       <div className="main-container">
//         <div className="left-container">
//           <img
//             src={Student}
//             alt="Educational Purpose"
//             className="educational-image"
//           />
//         </div>
//         <div className="right-container">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="enrollmentNo">Enrollment Number</label>
//               <input
//                 type="text"
//                 id="enrollmentNo"
//                 value={enrollmentNo}
//                 onChange={(e) => setEnrollmentNo(e.target.value)}
//                 placeholder="Enter your Enrollment Number"
//               />
//               {enrollmentError && <p className="error">{enrollmentError}</p>}
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your Password"
//               />
//               {passwordError && <p className="error">{passwordError}</p>}
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else if (!/^\d+$/.test(enrollmentNo)) {
//       setEnrollmentError("Enrollment Number must be numeric.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     // If valid, navigate to dashboard
//     if (valid) {
//       console.log(`EnrollmentNo: ${enrollmentNo}, Password: ${password}`);
//       navigate("/userdashboard");
//     }
//   };

//   // Function to handle enrollment number input
//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       // Allow only digits
//       setEnrollmentNo(value);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             <form onSubmit={handleSubmit}>
//               <div className="student-login-form-group">
//                 <label htmlFor="enrollmentNo" className="student-login-label">
//                   Enrollment Number
//                 </label>
//                 {/* <input
//                   type="text"
//                   id="enrollmentNo"
//                   value={enrollmentNo}
//                   onChange={(e) => setEnrollmentNo(e.target.value)}
//                   placeholder="Enter your Enrollment Number"
//                   className="student-login-input"
//                 /> */}
//                 <input
//                   type="text"
//                   id="enrollmentNo"
//                   value={enrollmentNo}
//                   onChange={handleEnrollmentChange}
//                   placeholder="Enter your Enrollment Number"
//                   className="student-login-input"
//                 />

//                 {enrollmentError && (
//                   <p className="student-login-error">{enrollmentError}</p>
//                 )}
//               </div>
//               <div className="student-login-form-group">
//                 <label htmlFor="password" className="student-login-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your Password"
//                   className="student-login-input"
//                 />
//                 {passwordError && (
//                   <p className="student-login-error">{passwordError}</p>
//                 )}
//               </div>
//               <button type="submit" className="student-login-button">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice authentication step

//   const navigate = useNavigate();

//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setEnrollmentNo(value); // Allow only digits
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       try {
//         // Backend call for enrollment and password verification
//         const response = await fetch(
//           "http://localhost:5000/api/auth/student-login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ enrollment: enrollmentNo, password }),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setIsVoiceStep(true); // Proceed to voice authentication
//         } else {
//           alert(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = async (event) => {
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase);
//       setRecording(false);

//       try {
//         // Send voice phrase to backend for verification
//         const response = await fetch(
//           "http://localhost:5000/api/auth/verify-voice",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               enrollment: enrollmentNo,
//               voicePhrase: spokenPhrase,
//             }),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           alert("Login successful!");
//           navigate("/userdashboard");
//         } else {
//           alert(data.message || "Voice authentication failed");
//         }
//       } catch (error) {
//         console.error("Error during voice authentication:", error);
//         alert("Something went wrong during voice authentication.");
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             {!isVoiceStep ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="student-login-form-group">
//                   <label htmlFor="enrollmentNo" className="student-login-label">
//                     Enrollment Number
//                   </label>
//                   <input
//                     type="text"
//                     id="enrollmentNo"
//                     value={enrollmentNo}
//                     onChange={handleEnrollmentChange}
//                     placeholder="Enter your Enrollment Number"
//                     className="student-login-input"
//                   />
//                   {enrollmentError && (
//                     <p className="student-login-error">{enrollmentError}</p>
//                   )}
//                 </div>
//                 <div className="student-login-form-group">
//                   <label htmlFor="password" className="student-login-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your Password"
//                     className="student-login-input"
//                   />
//                   {passwordError && (
//                     <p className="student-login-error">{passwordError}</p>
//                   )}
//                 </div>
//                 <button type="submit" className="student-login-button">
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <div className="voice-authentication">
//                 <h3>Speak your registered phrase</h3>
//                 <button onClick={handleStartRecording}>
//                   {recording ? "Listening..." : "Start Voice Authentication"}
//                 </button>
//                 {recordedText && (
//                   <p className="recorded-text">
//                     You said: <strong>{recordedText}</strong>
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

//main:-------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState(""); // Store the registered voice phrase
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice authentication step

//   const navigate = useNavigate();

//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setEnrollmentNo(value); // Allow only digits
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       try {
//         // Backend call for enrollment and password verification
//         const response = await fetch(
//           "http://localhost:5000/api/student-login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ enrollment: enrollmentNo, password }),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
//           setIsVoiceStep(true); // Proceed to voice authentication
//         } else {
//           alert(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = async (event) => {
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase);
//       setRecording(false);

//       // Compare spoken phrase with the stored voicePhrase
//       if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//         try {
//           const response = await fetch(
//             "http://localhost:5000/api/verify-voice",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
//             }
//           );

//           const data = await response.json();
//           if (response.ok) {
//             alert("Login successful!");
//             navigate("/userdashboard");
//           } else {
//             alert(data.message || "Voice authentication failed");
//           }
//         } catch (error) {
//           console.error("Error during voice authentication:", error);
//           alert("Something went wrong during voice authentication.");
//         }
//       } else {
//         alert("Spoken phrase does not match the registered phrase.");
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             {!isVoiceStep ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="student-login-form-group">
//                   <label htmlFor="enrollmentNo" className="student-login-label">
//                     Enrollment Number
//                   </label>
//                   <input
//                     type="text"
//                     id="enrollmentNo"
//                     value={enrollmentNo}
//                     onChange={handleEnrollmentChange}
//                     placeholder="Enter your Enrollment Number"
//                     className="student-login-input"
//                   />
//                   {enrollmentError && (
//                     <p className="student-login-error">{enrollmentError}</p>
//                   )}
//                 </div>
//                 <div className="student-login-form-group">
//                   <label htmlFor="password" className="student-login-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your Password"
//                     className="student-login-input"
//                   />
//                   {passwordError && (
//                     <p className="student-login-error">{passwordError}</p>
//                   )}
//                 </div>
//                 <button type="submit" className="student-login-button">
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <div className="voice-authentication">
//                 <h3>Speak your registered phrase</h3>
//                 <button onClick={handleStartRecording}>
//                   {recording ? "Listening..." : "Start Voice Authentication"}
//                 </button>
//                 {recordedText && (
//                   <p className="recorded-text">
//                     You said: <strong>{recordedText}</strong>
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;
// :--------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState("");
//   const [token, setToken] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // Step 1: Verify Enrollment and Password
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setError("");

//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/student-login",
//   //       {
//   //         enrollment: enrollmentNo,
//   //         password,
//   //       }
//   //     );

//   //     // Save the voice phrase and temporary token for the next step
//   //     setVoicePhrase(response.data.voicePhrase);
//   //     setToken(response.data.token);
//   //     setIsVoiceStep(true); // Proceed to voice verification
//   //   } catch (error) {
//   //     setError(error.response?.data?.message || "Login failed!");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/student-login",
//         {
//           enrollment: enrollmentNo,
//           password,
//         }
//       );

//       // Save the voice phrase and temporary token for the next step
//       setVoicePhrase(response.data.voicePhrase);
//       setToken(response.data.token);
//       setIsVoiceStep(true); // Proceed to voice verification

//       // Store the token in localStorage
//       localStorage.setItem("currentUser", response.data.token); // Save token
//     } catch (error) {
//       setError(error.response?.data?.message || "Login failed!");
//     }
//   };

//   // Step 2: Verify Voice and Phrase
//   // const handleVoiceAuthentication = async () => {
//   //   try {
//   //     const audioBase64 = await getAudioBase64(); // Record and convert to Base64

//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/verify-voice",
//   //       {
//   //         enrollment: enrollmentNo,
//   //         spokenPhrase: voicePhrase,
//   //         recordedAudioBase64: audioBase64,
//   //       }
//   //     );

//   //     if (response.status === 200) {
//   //       localStorage.setItem("currentUser", response.data.token); // Save token
//   //       alert("Login successful!");
//   //       navigate("/userdashboard");
//   //     } else {
//   //       alert("Voice or phrase verification failed.");
//   //     }
//   //   } catch (error) {
//   //     alert("Error during voice authentication.");
//   //   }
//   // };

//   const handleVoiceAuthentication = async () => {
//     const token = localStorage.getItem("currentUser");
//     if (!token) {
//       alert("Token is missing, please log in again.");
//       return;
//     }

//     try {
//       const audioBase64 = await getAudioBase64(); // Capture audio
//       console.log(`Audio Base64 Size: ${audioBase64.length} bytes`);

//       const payload = {
//         enrollment: enrollmentNo,
//         spokenPhrase: voicePhrase,
//         recordedAudioBase64: audioBase64,
//       };

//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Add the token in the Authorization header
//       };

//       const response = await axios.post(
//         "http://localhost:5000/api/verify-voice",
//         payload,
//         { headers }
//       );

//       if (response.status === 200) {
//         localStorage.setItem("currentUser", response.data.token);
//         alert("Login successful!");
//         navigate("/userdashboard");
//       } else {
//         alert("Voice or phrase verification failed.");
//       }
//     } catch (error) {
//       console.error("Error during voice authentication:", error);
//       alert("Error during voice authentication.");
//     }
//   };

//   // Function to capture audio and convert to Base64
//   const getAudioBase64 = () => {
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           const recorder = new MediaRecorder(stream);
//           const chunks = [];
//           recorder.ondataavailable = (e) => chunks.push(e.data);
//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: "audio/wav" });
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result.split(",")[1]); // Extract Base64
//             reader.readAsDataURL(blob);
//           };
//           recorder.start();
//           setTimeout(() => recorder.stop(), 3000); // Stop recording after 3 seconds
//         })
//         .catch(() => reject("Microphone access denied"));
//     });
//   };

//   return (
//     <div>
//       {!isVoiceStep ? (
//         <form onSubmit={handleSubmit}>
//           <h2>Student Login</h2>
//           {error && <p className="error-message">{error}</p>}
//           <input
//             type="text"
//             placeholder="Enrollment Number"
//             value={enrollmentNo}
//             onChange={(e) => setEnrollmentNo(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <div>
//           <h2>Voice Authentication</h2>
//           <p>Please repeat this phrase:</p>
//           <strong>{voicePhrase}</strong>
//           <button onClick={handleVoiceAuthentication}>
//             Authenticate Voice
//           </button>
//           {error && <p className="error-message">{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar"; // Assuming you have a Navbar component
// import StudentImage from "../Images/Student.jpg"; // Replace with your actual image path

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState(""); // Store the voice phrase
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice step
//   const [error, setError] = useState(""); // Error message
//   const [recordedText, setRecordedText] = useState(""); // Store recorded text
//   const [recording, setRecording] = useState(false); // Track recording status

//   const navigate = useNavigate();

//   // Step 1: Handle Enrollment and Password Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/student-login",
//         {
//           enrollment: enrollmentNo,
//           password,
//         }
//       );

//       // If successful, save voice phrase and token
//       setVoicePhrase(response.data.voicePhrase);
//       setIsVoiceStep(true); // Move to voice authentication
//       localStorage.setItem("currentUser", response.data.token); // Save token for later use
//     } catch (error) {
//       setError(error.response?.data?.message || "Login failed!");
//     }
//   };

//   // Step 2: Handle Voice Authentication
//   // const handleVoiceAuthentication = async () => {
//   //   const token = localStorage.getItem("currentUser");
//   //   if (!token) {
//   //     alert("Token is missing, please log in again.");
//   //     return;
//   //   }

//   //   try {
//   //     const audioBase64 = await getAudioBase64(); // Capture and convert audio to Base64
//   //     console.log(`Audio Base64 Size: ${audioBase64.length} bytes`);

//   //     const payload = {
//   //       enrollment: enrollmentNo,
//   //       spokenPhrase: voicePhrase,
//   //       recordedAudioBase64: audioBase64,
//   //     };

//   //     const headers = {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${token}`, // Add token in Authorization header
//   //     };

//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/verify-voice",
//   //       payload,
//   //       {
//   //         headers,
//   //       }
//   //     );

//   //     if (response.status === 200) {
//   //       localStorage.setItem("currentUser", response.data.token); // Store the new token
//   //       alert("Login successful!");
//   //       navigate("/userdashboard"); // Navigate to dashboard
//   //     } else {
//   //       alert("Voice or phrase verification failed.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during voice authentication:", error);
//   //     alert("Error during voice authentication.");
//   //   }
//   // };

//   const handleVoiceAuthentication = async () => {
//     const token = localStorage.getItem("currentUser");
//     if (!token) {
//       alert("Token is missing. Please log in again.");
//       return;
//     }

//     try {
//       const audioBase64 = await getAudioBase64(); // Capture and encode audio in Base64

//       const payload = {
//         enrollment: enrollmentNo,
//         spokenPhrase: recordedText, // Text recognized from speech
//         recordedAudioBase64: audioBase64, // Base64-encoded audio
//       };

//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };

//       const response = await axios.post(
//         "http://localhost:5000/api/verify-voice",
//         payload,
//         { headers }
//       );

//       if (response.status === 200) {
//         localStorage.setItem("currentUser", response.data.token); // Update token
//         alert("Login successful!");
//         navigate("/userdashboard"); // Navigate to dashboard
//       } else {
//         alert(response.data.message || "Voice or phrase verification failed.");
//       }
//     } catch (error) {
//       console.error("Error during voice authentication:", error);
//       alert("An error occurred during voice authentication.");
//     }
//   };

//   // Audio capture function remains the same as your initial code

//   // const handleVoiceAuthentication = async () => {
//   //   const token = localStorage.getItem("currentUser");
//   //   if (!token) {
//   //     alert("Token is missing, please log in again.");
//   //     return;
//   //   }

//   //   try {
//   //     // Log the data being sent in the request
//   //     console.log("Sending voice authentication request with data:", {
//   //       enrollment: enrollmentNo,
//   //       spokenPhrase: voicePhrase,
//   //       recordedAudioBase64: recordedAudioBase64,
//   //     });

//   //     const payload = {
//   //       enrollment: enrollmentNo,
//   //       spokenPhrase: voicePhrase,
//   //       recordedAudioBase64: recordedText, // Assuming you are using recordedText here
//   //     };

//   //     const headers = {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${token}`,
//   //     };

//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/verify-voice",
//   //       payload,
//   //       { headers }
//   //     );

//   //     // Log the API response
//   //     console.log("Voice authentication API response:", response);

//   //     if (response.status === 200) {
//   //       localStorage.setItem("currentUser", response.data.token); // Store the new token
//   //       alert("Login successful!");
//   //       navigate("/userdashboard"); // Navigate to the user dashboard
//   //     } else {
//   //       alert("Voice or phrase verification failed.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during voice authentication:", error);
//   //     alert("Error during voice authentication.");
//   //   }
//   // };
//   // const handleVoiceAuthentication = async () => {
//   //   const token = localStorage.getItem("currentUser");
//   //   if (!token) {
//   //     alert("Token is missing, please log in again.");
//   //     return;
//   //   }

//   //   try {
//   //     // Get the audio as Base64
//   //     const voiceSignature = await getAudioBase64(); // Record and convert audio to Base64

//   //     const payload = {
//   //       enrollment: enrollmentNo,
//   //       spokenPhrase: voicePhrase,
//   //       recordedAudioBase64: voiceSignature, // Send recorded audio
//   //     };

//   //     const headers = {
//   //       "Content-Type": "application/json",
//   //       Authorization: `Bearer ${token}`, // Add token in the header
//   //     };

//   //     const response = await axios.post(
//   //       "http://localhost:5000/api/verify-voice",
//   //       payload,
//   //       { headers }
//   //     );

//   //     if (response.status === 200) {
//   //       localStorage.setItem("currentUser", response.data.token); // Update the token
//   //       alert("Login successful!");
//   //       navigate("/userdashboard");
//   //     } else {
//   //       alert("Voice or phrase verification failed.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during voice authentication:", error);
//   //     alert("Error during voice authentication.");
//   //   }
//   // };

//   // Capture audio and convert to Base64 format
//   const getAudioBase64 = () => {
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           const recorder = new MediaRecorder(stream);
//           const chunks = [];
//           recorder.ondataavailable = (e) => chunks.push(e.data);
//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: "audio/wav" });
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result.split(",")[1]); // Get Base64 part
//             reader.readAsDataURL(blob);
//           };
//           recorder.start();
//           setTimeout(() => recorder.stop(), 3000); // Stop after 3 seconds
//         })
//         .catch(() => reject("Microphone access denied"));
//     });
//   };

//   // Start recording audio for voice authentication
//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true); // Indicate that recording is in progress

//     recognition.onresult = (event) => {
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase); // Set the recognized text
//       setRecording(false); // Stop recording

//       // Compare spoken phrase with the stored phrase
//       if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//         handleVoiceAuthentication(); // Proceed with voice authentication
//       } else {
//         alert("Spoken phrase does not match the registered phrase.");
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar /> {/* Your navigation bar */}
//       <div className="student-login-container">
//         <div className="student-login-left">
//           <img
//             src={StudentImage}
//             alt="Educational Purpose"
//             className="student-login-image"
//           />
//         </div>
//         <div className="student-login-right">
//           {!isVoiceStep ? (
//             <form onSubmit={handleSubmit}>
//               <h2>Student Login</h2>
//               {error && <p className="error-message">{error}</p>}
//               <input
//                 type="text"
//                 placeholder="Enrollment Number"
//                 value={enrollmentNo}
//                 onChange={(e) => setEnrollmentNo(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Login</button>
//             </form>
//           ) : (
//             <div>
//               <h2>Voice Authentication</h2>
//               <p>Please repeat this phrase:</p>
//               <strong>{voicePhrase}</strong>
//               <button onClick={handleStartRecording}>
//                 {recording ? "Listening..." : "Start Voice Authentication"}
//               </button>
//               {recordedText && (
//                 <p className="recorded-text">
//                   You said: <strong>{recordedText}</strong>
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

// StudentLogin.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "./Navbar"; // Assuming you have a Navbar component

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState(""); // Store the voice phrase
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice step
//   const [error, setError] = useState(""); // Error message
//   const [recordedText, setRecordedText] = useState(""); // Store recorded text
//   const [recording, setRecording] = useState(false); // Track recording status

//   const navigate = useNavigate();

//   // Step 1: Handle Enrollment and Password Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/student-login",
//         {
//           enrollment: enrollmentNo,
//           password,
//         }
//       );

//       // If successful, save voice phrase and token
//       setVoicePhrase(response.data.voicePhrase);
//       setIsVoiceStep(true); // Move to voice authentication
//       localStorage.setItem("currentUser", response.data.token); // Save token for later use
//     } catch (error) {
//       setError(error.response?.data?.message || "Login failed!");
//     }
//   };

//   // Step 2: Handle Voice Authentication
//   const handleVoiceAuthentication = async () => {
//     const token = localStorage.getItem("currentUser");
//     if (!token) {
//       alert("Token is missing, please log in again.");
//       return;
//     }

//     try {
//       const audioBase64 = await getAudioBase64(); // Capture and convert audio to Base64
//       console.log(`Audio Base64 Size: ${audioBase64.length} bytes`);

//       const payload = {
//         enrollment: enrollmentNo,
//         spokenPhrase: voicePhrase,
//         recordedAudioBase64: audioBase64,
//       };

//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       };

//       const response = await axios.post(
//         "http://localhost:5000/api/verify-voice",
//         payload,
//         { headers }
//       );

//       if (response.status === 200) {
//         localStorage.setItem("currentUser", response.data.token); // Store the new token
//         alert("Login successful!");
//         navigate("/userdashboard"); // Navigate to dashboard
//       } else {
//         alert("Voice or phrase verification failed.");
//       }
//     } catch (error) {
//       console.error("Error during voice authentication:", error);
//       alert("Error during voice authentication.");
//     }
//   };

//   // Capture audio and convert to Base64 format
//   const getAudioBase64 = () => {
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           const recorder = new MediaRecorder(stream);
//           const chunks = [];
//           recorder.ondataavailable = (e) => chunks.push(e.data);
//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: "audio/wav" });
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result.split(",")[1]); // Get Base64 part
//             reader.readAsDataURL(blob);
//           };
//           recorder.start();
//           setTimeout(() => recorder.stop(), 3000); // Stop after 3 seconds
//         })
//         .catch(() => reject("Microphone access denied"));
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="login-container">
//         {!isVoiceStep ? (
//           <form onSubmit={handleSubmit}>
//             <h2>Student Login</h2>
//             {error && <p>{error}</p>}
//             <input
//               type="text"
//               placeholder="Enrollment Number"
//               value={enrollmentNo}
//               onChange={(e) => setEnrollmentNo(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button type="submit">Login</button>
//           </form>
//         ) : (
//           <div>
//             <h2>Voice Authentication</h2>
//             <p>Please repeat this phrase:</p>
//             <strong>{voicePhrase}</strong>
//             <button onClick={handleVoiceAuthentication}>
//               {recording ? "Recording..." : "Start Voice Authentication"}
//             </button>
//             {recordedText && (
//               <p>
//                 You said: <strong>{recordedText}</strong>
//               </p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState(""); // Store the registered voice phrase
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice authentication step

//   const navigate = useNavigate();

//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setEnrollmentNo(value); // Allow only digits
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       try {
//         // Backend call for enrollment and password verification
//         const response = await fetch(
//           "http://localhost:5000/api/student-login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ enrollment: enrollmentNo, password }),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
//           setIsVoiceStep(true); // Proceed to voice authentication
//         } else {
//           alert(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   // const handleStartRecording = () => {
//   //   if (!("webkitSpeechRecognition" in window)) {
//   //     alert("Your browser does not support voice recognition!");
//   //     return;
//   //   }

//   //   const recognition = new window.webkitSpeechRecognition();
//   //   recognition.lang = "en-US";
//   //   recognition.continuous = false;
//   //   recognition.interimResults = false;

//   //   setRecording(true);

//   //   recognition.onresult = async (event) => {
//   //     const spokenPhrase = event.results[0][0].transcript;
//   //     setRecordedText(spokenPhrase);
//   //     setRecording(false);

//   //     // Compare spoken phrase with the stored voicePhrase
//   //     if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//   //       try {
//   //         const response = await fetch(
//   //           "http://localhost:5000/api/verify-voice",
//   //           {
//   //             method: "POST",
//   //             headers: { "Content-Type": "application/json" },
//   //             body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
//   //           }
//   //         );

//   //         const data = await response.json();
//   //         if (response.ok) {
//   //           alert("Login successful!");
//   //           navigate("/userdashboard");
//   //         } else {
//   //           alert(data.message || "Voice authentication failed");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error during voice authentication:", error);
//   //         alert("Something went wrong during voice authentication.");
//   //       }
//   //     } else {
//   //       alert("Spoken phrase does not match the registered phrase.");
//   //     }
//   //   };

//   //   recognition.onerror = (event) => {
//   //     console.error("Speech recognition error:", event.error);
//   //     alert("An error occurred during voice recognition. Please try again.");
//   //     setRecording(false);
//   //   };

//   //   recognition.onend = () => {
//   //     setRecording(false);
//   //   };

//   //   recognition.start();
//   // };

//   const handleStartRecording = () => {
//     if (!navigator.mediaDevices || !window.MediaRecorder) {
//       alert("Your browser does not support audio recording!");
//       return;
//     }

//     navigator.mediaDevices
//       .getUserMedia({ audio: true })
//       .then((stream) => {
//         const mediaRecorder = new MediaRecorder(stream);
//         const audioChunks = [];

//         mediaRecorder.ondataavailable = (event) => {
//           audioChunks.push(event.data);
//         };

//         mediaRecorder.onstop = async () => {
//           const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//           const reader = new FileReader();

//           reader.onload = async () => {
//             const audioBase64 = reader.result.split(",")[1]; // Extract base64 string
//             setRecording(false);

//             try {
//               // Send audio data and phrase to backend
//               const response = await fetch(
//                 "http://localhost:5000/api/verify-voice",
//                 {
//                   method: "POST",
//                   headers: { "Content-Type": "application/json" },
//                   body: JSON.stringify({
//                     enrollment: enrollmentNo,
//                     voicePhrase: recordedText, // Spoken phrase
//                     recordedAudioBase64: audioBase64, // Audio for signature matching
//                   }),
//                 }
//               );

//               const data = await response.json();
//               if (response.ok) {
//                 alert("Voice and signature matched! Login successful.");
//                 navigate("/userdashboard");
//               } else {
//                 alert(data.message || "Voice authentication failed");
//               }
//             } catch (error) {
//               console.error("Error during voice authentication:", error);
//               alert("Something went wrong during voice authentication.");
//             }
//           };

//           reader.onerror = () => {
//             alert("Error reading audio data.");
//             setRecording(false);
//           };

//           reader.readAsDataURL(audioBlob); // Convert audio blob to base64
//         };

//         setRecording(true);
//         mediaRecorder.start();

//         setTimeout(() => {
//           mediaRecorder.stop();
//         }, 5000); // Record for 5 seconds
//       })
//       .catch((error) => {
//         console.error("Error accessing microphone:", error);
//         alert(
//           "Unable to access the microphone. Please check your permissions."
//         );
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             {!isVoiceStep ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="student-login-form-group">
//                   <label htmlFor="enrollmentNo" className="student-login-label">
//                     Enrollment Number
//                   </label>
//                   <input
//                     type="text"
//                     id="enrollmentNo"
//                     value={enrollmentNo}
//                     onChange={handleEnrollmentChange}
//                     placeholder="Enter your Enrollment Number"
//                     className="student-login-input"
//                   />
//                   {enrollmentError && (
//                     <p className="student-login-error">{enrollmentError}</p>
//                   )}
//                 </div>
//                 <div className="student-login-form-group">
//                   <label htmlFor="password" className="student-login-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your Password"
//                     className="student-login-input"
//                   />
//                   {passwordError && (
//                     <p className="student-login-error">{passwordError}</p>
//                   )}
//                 </div>
//                 <button type="submit" className="student-login-button">
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <div className="voice-authentication">
//                 <h3>Speak your registered phrase</h3>
//                 <button onClick={handleStartRecording}>
//                   {recording ? "Listening..." : "Start Voice Authentication"}
//                 </button>
//                 {recordedText && (
//                   <p className="recorded-text">
//                     You said: <strong>{recordedText}</strong>
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Student.css";
// import Navbar from "./Navbar";
// import StudentImage from "../Images/Student.jpg";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState("");
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false);
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   // Step 1: Handle Enrollment and Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/api/student-login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ enrollment: enrollmentNo, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setVoicePhrase(data.voicePhrase); // Save the voice phrase
//         localStorage.setItem("usersdatatoken", data.token); // Store the token
//         setIsVoiceStep(true); // Move to voice authentication
//       } else {
//         setError(data.message || "Invalid credentials.");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   // Step 2: Handle Voice Authentication
//   // const handleVoiceAuthentication = async () => {
//   //   const token = localStorage.getItem("usersdatatoken");
//   //   if (!token) {
//   //     alert("Session expired. Please log in again.");
//   //     return;
//   //   }

//   //   try {
//   //     const audioBase64 = await recordAudio(); // Capture audio and convert to Base64
//   //     const payload = {
//   //       enrollment: enrollmentNo,
//   //       spokenPhrase: recordedText, // Send the spoken phrase
//   //       recordedAudioBase64: audioBase64, // Send the audio in Base64
//   //     };

//   //     const response = await fetch("http://localhost:5000/api/verify-voice", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify(payload),
//   //     });

//   //     const data = await response.json();
//   //     if (response.ok) {
//   //       alert("Login successful!");
//   //       navigate("/userdashboard"); // Redirect to dashboard
//   //     } else {
//   //       alert(data.message || "Voice authentication failed.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Voice Authentication Error:", error);
//   //     alert("Something went wrong during voice authentication.");
//   //   }
//   // };

//   const handleVoiceAuthentication = async () => {
//     const token = localStorage.getItem("usersdatatoken"); // Retrieve token
//     if (!token) {
//       alert("Session expired. Please log in again.");
//       return;
//     }

//     try {
//       const audioBase64 = await recordAudio(); // Capture audio and convert to Base64
//       const payload = {
//         enrollment: enrollmentNo,
//         spokenPhrase: recordedText, // Send the spoken phrase
//         recordedAudioBase64: audioBase64, // Send the audio in Base64
//       };

//       const response = await fetch("http://localhost:5000/api/verify-voice", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include the token in the request
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert("Login successful!");
//         navigate("/userdashboard"); // Redirect to dashboard
//       } else {
//         alert(data.message || "Voice authentication failed.");
//       }
//     } catch (error) {
//       console.error("Voice Authentication Error:", error);
//       alert("Something went wrong during voice authentication.");
//     }
//   };

//   // Function to capture audio and convert it to Base64
//   const recordAudio = () => {
//     return new Promise((resolve, reject) => {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {
//           const recorder = new MediaRecorder(stream);
//           const chunks = [];
//           recorder.ondataavailable = (e) => chunks.push(e.data);
//           recorder.onstop = () => {
//             const blob = new Blob(chunks, { type: "audio/wav" });
//             const reader = new FileReader();
//             reader.onloadend = () => resolve(reader.result.split(",")[1]); // Get Base64
//             reader.readAsDataURL(blob);
//           };
//           recorder.start();
//           setTimeout(() => recorder.stop(), 3000); // Record for 3 seconds
//         })
//         .catch((err) => {
//           console.error("Audio recording error:", err);
//           reject("Could not access the microphone.");
//         });
//     });
//   };

//   // Speech-to-Text using Web Speech API
//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition.");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = (event) => {
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase); // Store the recognized text
//       setRecording(false);
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-container">
//         <div className="student-login-left">
//           <img
//             src={StudentImage}
//             alt="Educational Purpose"
//             className="student-login-image"
//           />
//         </div>
//         <div className="student-login-right">
//           {!isVoiceStep ? (
//             <form onSubmit={handleLogin}>
//               <h2>Student Login</h2>
//               {error && <p className="error">{error}</p>}
//               <input
//                 type="text"
//                 placeholder="Enrollment Number"
//                 value={enrollmentNo}
//                 onChange={(e) => setEnrollmentNo(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit">Login</button>
//             </form>
//           ) : (
//             <div className="voice-authentication">
//               <h3>Speak your registered phrase:</h3>
//               <p>{voicePhrase}</p>
//               <button onClick={handleStartRecording}>
//                 {recording ? "Listening..." : "Start Voice Authentication"}
//               </button>
//               {recordedText && (
//                 <p className="recorded-text">
//                   You said: <strong>{recordedText}</strong>
//                 </p>
//               )}
//               <button
//                 className="authenticate-button"
//                 onClick={handleVoiceAuthentication}
//                 disabled={!recordedText}
//               >
//                 Verify Voice
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [voicePhrase, setVoicePhrase] = useState("");
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [audioData, setAudioData] = useState(""); // Store the base64 audio
//   const [isVoiceStep, setIsVoiceStep] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");

//   const navigate = useNavigate();

//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setEnrollmentNo(value); // Allow only digits
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       try {
//         // Backend call for enrollment and password verification
//         const response = await fetch(
//           "http://localhost:5000/api/student-login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ enrollment: enrollmentNo, password }),
//           }
//         );

//         const data = await response.json();
//         if (response.ok) {
//           setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
//           setIsVoiceStep(true); // Proceed to voice authentication

//           // Store the token in localStorage after successful login
//           localStorage.setItem("usersdatatoken", data.token); // Save the token
//         } else {
//           alert(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = async (event) => {
//       // Add async here
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase);
//       setRecording(false);

//       try {
//         // Get the token from localStorage
//         const token = localStorage.getItem("usersdatatoken");
//         if (!token) {
//           setErrors({ voice: "No token found. Please login again." });
//           return;
//         }

//         // Send the token and spoken phrase to the backend for verification
//         const response = await fetch("http://localhost:5000/api/verify-voice", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // JWT token from login
//           },
//           body: JSON.stringify({
//             enrollment: enrollmentNo, // Student enrollment number
//             spokenPhrase, // The phrase spoken by the user
//             password, // Password entered by the user
//           }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//           // If voice verification is successful, navigate to the dashboard
//           navigate("/userdashboard");
//         } else {
//           setErrors({
//             voice: data.message || "Voice verification failed.",
//           });
//         }
//       } catch (error) {
//         console.error("Error during voice verification:", error);
//         setErrors({ voice: "An error occurred. Please try again." });
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             {!isVoiceStep ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="student-login-form-group">
//                   <label className="student-login-label">
//                     Enrollment Number
//                   </label>
//                   <input
//                     type="text"
//                     className="student-login-input"
//                     value={enrollmentNo}
//                     onChange={handleEnrollmentChange}
//                   />
//                   {enrollmentError && (
//                     <p className="error-message">{enrollmentError}</p>
//                   )}
//                 </div>

//                 <div className="student-login-form-group">
//                   <label className="student-login-label">Password</label>
//                   <input
//                     type="password"
//                     className="student-login-input"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {passwordError && (
//                     <p className="error-message">{passwordError}</p>
//                   )}
//                 </div>

//                 <div className="student-login-form-group">
//                   <button type="submit" className="student-login-button">
//                     Login
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <div className="voice-verification-container">
//                 <h2>Voice Authentication</h2>
//                 <p>Please say the phrase: "{voicePhrase}"</p>
//                 <div className="voice-verification-controls">
//                   <button
//                     onClick={handleStartRecording}
//                     disabled={recording}
//                     className="voice-verification-button"
//                   >
//                     {recording ? "Listening..." : "Start Recording"}
//                   </button>
//                 </div>
//                 {errors.voice && (
//                   <p className="error-message">{errors.voice}</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

// import React, { useState } from "react";
// import "./Student.css";
// import Student from "../Images/Student.jpg"; // Replace with your image path
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [enrollmentError, setEnrollmentError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState(""); // Store the registered voice phrase
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice authentication step

//   const navigate = useNavigate();

//   const handleEnrollmentChange = (e) => {
//     const value = e.target.value;
//     if (/^\d*$/.test(value)) {
//       setEnrollmentNo(value); // Allow only digits
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   let valid = true;

//   //   // Validate enrollment number
//   //   if (enrollmentNo === "") {
//   //     setEnrollmentError("Enrollment Number is required.");
//   //     valid = false;
//   //   } else {
//   //     setEnrollmentError("");
//   //   }

//   //   // Validate password
//   //   if (password === "") {
//   //     setPasswordError("Password is required.");
//   //     valid = false;
//   //   } else {
//   //     setPasswordError("");
//   //   }

//   //   if (valid) {
//   //     try {
//   //       // Backend call for enrollment and password verification
//   //       const response = await fetch(
//   //         "http://localhost:5000/api/student-login",
//   //         {
//   //           method: "POST",
//   //           headers: { "Content-Type": "application/json" },
//   //           body: JSON.stringify({ enrollment: enrollmentNo, password }),
//   //         }
//   //       );

//   //       const data = await response.json();
//   //       if (response.ok) {
//   //         setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
//   //         setIsVoiceStep(true); // Proceed to voice authentication
//   //       } else {
//   //         alert(data.message || "Invalid credentials");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error:", error);
//   //       alert("Something went wrong. Please try again.");
//   //     }
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;

//     // Validate enrollment number
//     if (enrollmentNo === "") {
//       setEnrollmentError("Enrollment Number is required.");
//       valid = false;
//     } else {
//       setEnrollmentError("");
//     }

//     // Validate password
//     if (password === "") {
//       setPasswordError("Password is required.");
//       valid = false;
//     } else {
//       setPasswordError("");
//     }

//     if (valid) {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/student-login",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ enrollment: enrollmentNo, password }),
//           }
//         );

//         const data = await response.json();
//         // if (response.ok) {
//         //   // Save the token to localStorage
//         //   localStorage.setItem("token", data.token);

//         //   // Proceed to voice authentication
//         //   setVoicePhrase(data.voicePhrase);
//         //   setIsVoiceStep(true);
//         // } else {
//         //   alert(data.message || "Invalid credentials");
//         // }

//         if (response.ok) {
//           localStorage.setItem("token", data.token); // Save token

//           navigate("/userdashboard");
//         } else {
//           alert(data.message || "Invalid credentials");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong. Please try again.");
//       }
//     }
//   };

//   // const handleStartRecording = () => {
//   //   if (!("webkitSpeechRecognition" in window)) {
//   //     alert("Your browser does not support voice recognition!");
//   //     return;
//   //   }

//   //   const recognition = new window.webkitSpeechRecognition();
//   //   recognition.lang = "en-US";
//   //   recognition.continuous = false;
//   //   recognition.interimResults = false;

//   //   setRecording(true);

//   //   recognition.onresult = async (event) => {
//   //     const spokenPhrase = event.results[0][0].transcript;
//   //     setRecordedText(spokenPhrase);
//   //     setRecording(false);

//   //     // Compare spoken phrase with the stored voicePhrase
//   //     if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//   //       try {
//   //         const response = await fetch(
//   //           "http://localhost:5000/api/verify-voice",
//   //           {
//   //             method: "POST",
//   //             headers: { "Content-Type": "application/json" },
//   //             body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
//   //           }
//   //         );

//   //         const data = await response.json();
//   //         if (response.ok) {
//   //           alert("Login successful!");
//   //           navigate("/userdashboard");
//   //         } else {
//   //           alert(data.message || "Voice authentication failed");
//   //         }
//   //       } catch (error) {
//   //         console.error("Error during voice authentication:", error);
//   //         alert("Something went wrong during voice authentication.");
//   //       }
//   //     } else {
//   //       alert("Spoken phrase does not match the registered phrase.");
//   //     }
//   //   };

//   //   recognition.onerror = (event) => {
//   //     console.error("Speech recognition error:", event.error);
//   //     alert("An error occurred during voice recognition. Please try again.");
//   //     setRecording(false);
//   //   };

//   //   recognition.onend = () => {
//   //     setRecording(false);
//   //   };

//   //   recognition.start();
//   // };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recognition!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = async (event) => {
//       const spokenPhrase = event.results[0][0].transcript;
//       setRecordedText(spokenPhrase);
//       setRecording(false);

//       if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//         try {
//           const token = localStorage.getItem("token");
//           const response = await fetch(
//             "http://localhost:5000/api/verify-voice",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`, // Send token with the request
//               },
//               body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
//             }
//           );

//           const data = await response.json();
//           if (response.ok) {
//             alert("Login successful!");
//             navigate("/userdashboard");
//           } else {
//             alert(data.message || "Voice authentication failed");
//           }
//         } catch (error) {
//           console.error("Error during voice authentication:", error);
//           alert("Something went wrong during voice authentication.");
//         }
//       } else {
//         alert("Spoken phrase does not match the registered phrase.");
//       }
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       alert("An error occurred during voice recognition. Please try again.");
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="student-login-outer-container">
//         <div className="student-login-main-container">
//           <div className="student-login-left-container">
//             <img
//               src={Student}
//               alt="Educational Purpose"
//               className="student-login-educational-image"
//             />
//           </div>
//           <div className="student-login-right-container">
//             {!isVoiceStep ? (
//               <form onSubmit={handleSubmit}>
//                 <div className="student-login-form-group">
//                   <label htmlFor="enrollmentNo" className="student-login-label">
//                     Enrollment Number
//                   </label>
//                   <input
//                     type="text"
//                     id="enrollmentNo"
//                     value={enrollmentNo}
//                     onChange={handleEnrollmentChange}
//                     placeholder="Enter your Enrollment Number"
//                     className="student-login-input"
//                   />
//                   {enrollmentError && (
//                     <p className="student-login-error">{enrollmentError}</p>
//                   )}
//                 </div>
//                 <div className="student-login-form-group">
//                   <label htmlFor="password" className="student-login-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your Password"
//                     className="student-login-input"
//                   />
//                   {passwordError && (
//                     <p className="student-login-error">{passwordError}</p>
//                   )}
//                 </div>
//                 <button type="submit" className="student-login-button">
//                   Login
//                 </button>
//               </form>
//             ) : (
//               <div className="voice-authentication">
//                 <h3>Speak your registered phrase</h3>
//                 <button onClick={handleStartRecording}>
//                   {recording ? "Listening..." : "Start Voice Authentication"}
//                 </button>
//                 {recordedText && (
//                   <p className="recorded-text">
//                     You said: <strong>{recordedText}</strong>
//                   </p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StudentLogin;

//working code with login functionlaity:---------------------------------------------------------------
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const StudentLogin = () => {
//   const [enrollmentNo, setEnrollmentNo] = useState("");
//   const [password, setPassword] = useState("");
//   const [voicePhrase, setVoicePhrase] = useState("");
//   const [isVoiceStep, setIsVoiceStep] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [recording, setRecording] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/student-login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ enrollment: enrollmentNo, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setVoicePhrase(data.voicePhrase);
//         localStorage.setItem("token", data.token);
//         setIsVoiceStep(true);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleVoiceAuthentication = () => {
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.onresult = async (event) => {
//       const spokenPhrase = event.results[0][0].transcript;

//       if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
//         try {
//           const token = localStorage.getItem("token");
//           const response = await fetch(
//             "http://localhost:5000/api/verify-voice",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${token}`,
//               },
//               body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
//             }
//           );

//           const data = await response.json();
//           if (response.ok) {
//             alert("Login successful!");
//             navigate("/userdashboard");
//           } else {
//             alert(data.message);
//           }
//         } catch (error) {
//           console.error("Error:", error);
//         }
//       } else {
//         alert("Voice does not match. Try again.");
//       }
//     };

//     recognition.start();
//   };

//   return (
//     <div>
//       {!isVoiceStep ? (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enrollment Number"
//             value={enrollmentNo}
//             onChange={(e) => setEnrollmentNo(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       ) : (
//         <div>
//           <h3>Speak your registered phrase</h3>
//           <button onClick={handleVoiceAuthentication}>
//             {recording ? "Listening..." : "Start Voice Authentication"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentLogin;
//------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import "./Student.css"; // Assuming you have a CSS file for styling
import Student from "../Images/Student.jpg"; // Replace with your image path
import Navbar from "./Navbar"; // Assuming there's a Navbar component
import { useNavigate } from "react-router-dom";

const StudentLogin = () => {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");
  const [voicePhrase, setVoicePhrase] = useState(""); // Store the registered voice phrase
  const [recording, setRecording] = useState(false);
  const [recordedText, setRecordedText] = useState("");
  const [isVoiceStep, setIsVoiceStep] = useState(false); // Track voice authentication step
  const [enrollmentError, setEnrollmentError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleEnrollmentChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setEnrollmentNo(value); // Allow only digits
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let valid = true;

  //   // Validate enrollment number
  //   if (enrollmentNo === "") {
  //     setEnrollmentError("Enrollment Number is required.");
  //     valid = false;
  //   } else {
  //     setEnrollmentError("");
  //   }

  //   // Validate password
  //   if (password === "") {
  //     setPasswordError("Password is required.");
  //     valid = false;
  //   } else {
  //     setPasswordError("");
  //   }

  //   if (valid) {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:5000/api/student-login",
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({ enrollment: enrollmentNo, password }),
  //         }
  //       );

  //       const data = await response.json();
  //       if (response.ok) {
  //         setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
  //         localStorage.setItem("token", data.token); // Store token for authentication
  //         setIsVoiceStep(true); // Proceed to voice authentication
  //       } else {
  //         alert(data.message || "Invalid credentials");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Something went wrong. Please try again.");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    // Validate enrollment number
    if (enrollmentNo === "") {
      setEnrollmentError("Enrollment Number is required.");
      valid = false;
    } else {
      setEnrollmentError("");
    }

    // Validate password
    if (password === "") {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/student-login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ enrollment: enrollmentNo, password }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // If the login is successful, store the voice phrase and token
          setVoicePhrase(data.voicePhrase); // Store the returned voice phrase
          localStorage.setItem("token", data.token); // Store token for authentication
          setIsVoiceStep(true); // Proceed to voice authentication
        } else if (
          response.status === 403 &&
          data.message === "Student is blocked"
        ) {
          alert("Your account has been blocked. Please contact support.");
          navigate("/blocked"); // Redirect to a blocked page or show an error message
        } else {
          alert(data.message || "Invalid credentials");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handleVoiceAuthentication = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recognition!");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setRecording(true);

    recognition.onresult = async (event) => {
      const spokenPhrase = event.results[0][0].transcript;
      setRecordedText(spokenPhrase);
      setRecording(false);

      // Compare spoken phrase with the stored voicePhrase
      if (spokenPhrase.toLowerCase() === voicePhrase.toLowerCase()) {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            "http://localhost:5000/api/verify-voice",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ enrollment: enrollmentNo, voicePhrase }),
            }
          );

          const data = await response.json();
          if (response.ok) {
            alert("Login successful!");
            navigate("/userdashboard");
          } else {
            alert(data.message || "Voice authentication failed");
          }
        } catch (error) {
          console.error("Error during voice authentication:", error);
          alert("Something went wrong during voice authentication.");
        }
      } else {
        alert("Spoken phrase does not match the registered phrase.");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("An error occurred during voice recognition. Please try again.");
      setRecording(false);
    };

    recognition.onend = () => {
      setRecording(false);
    };

    recognition.start();
  };

  return (
    <>
      <Navbar />
      <div className="student-login-outer-container">
        <div className="student-login-main-container">
          <div className="student-login-left-container">
            <img
              src={Student}
              alt="Educational Purpose"
              className="student-login-educational-image"
            />
          </div>
          <div className="student-login-right-container">
            {!isVoiceStep ? (
              <form onSubmit={handleSubmit}>
                <div className="student-login-form-group">
                  <label htmlFor="enrollmentNo" className="student-login-label">
                    Enrollment Number
                  </label>
                  <input
                    type="text"
                    id="enrollmentNo"
                    value={enrollmentNo}
                    onChange={handleEnrollmentChange}
                    placeholder="Enter your Enrollment Number"
                    className="student-login-input"
                  />
                  {enrollmentError && (
                    <p className="student-login-error">{enrollmentError}</p>
                  )}
                </div>
                <div className="student-login-form-group">
                  <label htmlFor="password" className="student-login-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    className="student-login-input"
                  />
                  {passwordError && (
                    <p className="student-login-error">{passwordError}</p>
                  )}
                </div>
                <button type="submit" className="student-login-button">
                  Login
                </button>
              </form>
            ) : (
              <div className="voice-authentication">
                <h3>Speak your registered phrase</h3>
                <button onClick={handleVoiceAuthentication}>
                  {recording ? "Listening..." : "Start Voice Authentication"}
                </button>
                {recordedText && (
                  <p className="recorded-text">
                    You said: <strong>{recordedText}</strong>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
