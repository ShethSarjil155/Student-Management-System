// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "./Register.css";
// import studyingImage from "../Images/studying.png";
// import Navbar from "./Navbar";

// function Register() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     enrollment: "",
//     password: "",
//     confirmPassword: "",
//     division: "",
//     department: "",
//     semester: "",
//     rollNo: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [audioRecorded, setAudioRecorded] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const navigate = useNavigate();

//   // Validate form when the submit button is clicked
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     if (!formData.enrollment.trim()) {
//       newErrors.enrollment = "Enrollment number is required";
//     } else if (!/^\d+$/.test(formData.enrollment)) {
//       newErrors.enrollment = "Enrollment number must be numeric";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!formData.confirmPassword.trim()) {
//       newErrors.confirmPassword = "Confirm Password is required";
//     }

//     if (!formData.division) {
//       newErrors.division = "Division is required";
//     }

//     if (!formData.department) {
//       newErrors.department = "Department is required";
//     }

//     if (!formData.semester) {
//       newErrors.semester = "Semester is required";
//     }

//     if (!formData.rollNo.trim()) {
//       newErrors.rollNo = "Roll number is required";
//     }

//     if (!audioRecorded) {
//       newErrors.audio = "Please record your voice before creating an account.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Log the data to the console
//       console.log("Form data:", formData);
//       console.log("Recorded Text:", recordedText);
//       alert("Form details submitted!");
//       navigate("/student-login"); // Navigate to student-login on success
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recording!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = true;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = (event) => {
//       setRecordedText(event.results[0][0].transcript);
//       setAudioRecorded(true); // Mark audio as recorded
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       if (event.error === "no-speech") {
//         alert("No speech detected. Please try speaking into the microphone.");
//       } else {
//         alert("An error occurred during recording. Please try again.");
//       }
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   const handleStopRecording = () => {
//     setRecording(false);
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.stop();
//   };

//Previous code:------------------------------------------------------------
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// import "./Register.css";
// import studyingImage from "../Images/studying.png";
// import Navbar from "./Navbar";

// function Register() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     enrollment: "",
//     password: "",
//     confirmPassword: "",
//     division: "",
//     department: "",
//     semester: "",
//     rollNo: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [recording, setRecording] = useState(false);
//   const [recordedText, setRecordedText] = useState("");
//   const [audioRecorded, setAudioRecorded] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const navigate = useNavigate();

//   // Validate form when the submit button is clicked
//   const validate = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full name is required";
//     }

//     if (!formData.enrollment.trim()) {
//       newErrors.enrollment = "Enrollment number is required";
//     } else if (!/^\d+$/.test(formData.enrollment)) {
//       newErrors.enrollment = "Enrollment number must be numeric";
//     }

//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//     }

//     if (!formData.confirmPassword.trim()) {
//       newErrors.confirmPassword = "Confirm Password is required";
//     }

//     if (!formData.division) {
//       newErrors.division = "Division is required";
//     }

//     if (!formData.department) {
//       newErrors.department = "Department is required";
//     }

//     if (!formData.semester) {
//       newErrors.semester = "Semester is required";
//     }

//     if (!formData.rollNo.trim()) {
//       newErrors.rollNo = "Roll number is required";
//     }

//     if (!audioRecorded) {
//       newErrors.audio = "Please record your voice before creating an account.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const payload = {
//           ...formData,
//           voicePhrase: recordedText, // Include the recorded text as the voice phrase
//         };

//         // Send data to backend
//         const response = await axios.post(
//           "http://localhost:5000/student/register",
//           payload
//         );
//         alert("Registration successful!");
//         console.log(response.data);
//         navigate("/student-login"); // Navigate to student-login on success
//       } catch (error) {
//         console.error("Error during registration:", error);
//         alert(error.response?.data?.message || "Registration failed!");
//       }
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleStartRecording = () => {
//     if (!("webkitSpeechRecognition" in window)) {
//       alert("Your browser does not support voice recording!");
//       return;
//     }

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = true;
//     recognition.interimResults = false;

//     setRecording(true);

//     recognition.onresult = (event) => {
//       setRecordedText(event.results[0][0].transcript);
//       setAudioRecorded(true); // Mark audio as recorded
//     };

//     recognition.onerror = (event) => {
//       console.error("Speech recognition error:", event.error);
//       if (event.error === "no-speech") {
//         alert("No speech detected. Please try speaking into the microphone.");
//       } else {
//         alert("An error occurred during recording. Please try again.");
//       }
//       setRecording(false);
//     };

//     recognition.onend = () => {
//       setRecording(false);
//     };

//     recognition.start();
//   };

//   const handleStopRecording = () => {
//     setRecording(false);
//     const recognition = new window.webkitSpeechRecognition();
//     recognition.stop();
//   };
//   return (
//     <>
//       <Navbar />
//       <div className="bg-register">
//         <div className="container">
//           <div className="form-container">
//             <h1>Student Registration</h1>
//             <p>Create an account</p>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//               {errors.fullName && (
//                 <span className="error">{errors.fullName}</span>
//               )}

//               <input
//                 type="text"
//                 name="enrollment"
//                 placeholder="Enrollment number"
//                 value={formData.enrollment}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (/^\d*$/.test(value)) {
//                     handleChange(e);
//                   }
//                 }}
//               />
//               {errors.enrollment && (
//                 <span className="error">{errors.enrollment}</span>
//               )}

//               {/* Password fields */}
//               <div className="password-field">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   name="password"
//                   placeholder="Create password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="show-btn"
//                   onClick={() => setPasswordVisible(!passwordVisible)}
//                 >
//                   {passwordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {errors.password && (
//                 <span className="error">{errors.password}</span>
//               )}

//               <div className="password-field">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   name="confirmPassword"
//                   placeholder="Repeat password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//                 <button
//                   type="button"
//                   className="show-btn"
//                   onClick={() =>
//                     setConfirmPasswordVisible(!confirmPasswordVisible)
//                   }
//                 >
//                   {confirmPasswordVisible ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <span className="error">{errors.confirmPassword}</span>
//               )}

//               <select
//                 name="division"
//                 value={formData.division}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Division</option>
//                 <option value="A">A</option>
//                 <option value="B">B</option>
//                 <option value="C">C</option>
//                 <option value="D">D</option>
//                 <option value="E">E</option>
//                 <option value="F">F</option>
//               </select>
//               {errors.division && (
//                 <span className="error">{errors.division}</span>
//               )}

//               <select
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Department</option>
//                 <option value="mbc">MBC</option>
//                 <option value="imca">IMCA</option>
//                 <option value="mca">MCA</option>
//                 <option value="mba">MBA</option>
//                 <option value="bba">BBA</option>
//                 <option value="pharmacy">Pharmacy</option>
//                 <option value="bsc-it">BSc IT</option>
//                 <option value="msc-it">MSc IT</option>
//               </select>
//               {errors.department && (
//                 <span className="error">{errors.department}</span>
//               )}

//               <select
//                 name="semester"
//                 value={formData.semester}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Semester</option>
//                 {Array.from({ length: 10 }, (_, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     Semester {i + 1}
//                   </option>
//                 ))}
//               </select>
//               {errors.semester && (
//                 <span className="error">{errors.semester}</span>
//               )}

//               <input
//                 type="text"
//                 name="rollNo"
//                 placeholder="Roll number"
//                 value={formData.rollNo}
//                 onChange={handleChange}
//               />
//               {errors.rollNo && <span className="error">{errors.rollNo}</span>}

//               <button type="submit" className="user-register-btn">
//                 Create an account
//               </button>
//             </form>

//             <div className="voice-recording-section">
//               {recording ? (
//                 <button onClick={handleStopRecording}>Stop Recording</button>
//               ) : (
//                 <button onClick={handleStartRecording}>Start Recording</button>
//               )}
//               {recordedText && (
//                 <p className="recorded-text">
//                   Recorded Voice: <strong>{recordedText}</strong>
//                 </p>
//               )}
//               {errors.audio && <span className="error">{errors.audio}</span>}
//             </div>

//             <p className="terms">
//               By signing up, you accept our <a href="#">Terms of Use</a> and{" "}
//               <a href="#">Privacy Policy</a>
//             </p>
//             <p className="login">
//               Already have an account? <Link to="/student-login">Log in</Link>
//             </p>
//           </div>
//           <div
//             className="image-container"
//             style={{
//               backgroundImage: `url(${studyingImage})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: "550px",
//             }}
//           ></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Register.css";
import studyingImage from "../Images/studying.png";
import Navbar from "./Navbar";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    enrollment: "",
    password: "",
    confirmPassword: "",
    division: "",
    department: "",
    semester: "",
    rollNo: "",
  });

  const [errors, setErrors] = useState({});
  const [recordedText, setRecordedText] = useState("");
  const [audioRecorded, setAudioRecorded] = useState(false);
  const [randomSentence, setRandomSentence] = useState("");
  const [recording, setRecording] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  // Fetch a random sentence on component mount
  useEffect(() => {
    const fetchSentence = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/student/random-sentence"
        );
        setRandomSentence(response.data.sentence);
      } catch (error) {
        console.error("Error fetching random sentence:", error);
      }
    };
    fetchSentence();
  }, []);

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.enrollment.trim()) {
      newErrors.enrollment = "Enrollment number is required";
    } else if (!/^\d+$/.test(formData.enrollment)) {
      newErrors.enrollment = "Enrollment number must be numeric";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm Password is required";
    if (!formData.division) newErrors.division = "Division is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.semester) newErrors.semester = "Semester is required";
    if (!formData.rollNo.trim()) newErrors.rollNo = "Roll number is required";
    if (!audioRecorded)
      newErrors.audio = "Please record your voice before creating an account.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission

  //working:------------
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     try {
  //       const payload = {
  //         fname: formData.fullName,
  //         enrollment: formData.enrollment,
  //         password: formData.password,
  //         confirmPassword: formData.confirmPassword,
  //         division: formData.division,
  //         department: formData.department,
  //         semester: formData.semester,
  //         rollNo: formData.rollNo,
  //         voicePhrase: recordedText, // Text the user speaks
  //         voiceSignature: "placeholderSignature", // Placeholder for now, replace with processed audio data
  //       };

  //       const response = await axios.post(
  //         "http://localhost:5000/api/student/register",
  //         payload
  //       );
  //       alert("Registration successful!");
  //       navigate("/student-login");
  //     } catch (error) {
  //       alert(error.response?.data?.error || "Registration failed!");
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Get the audio base64 string
        const audioData = await getAudioBase64();

        const payload = {
          fname: formData.fullName,
          enrollment: formData.enrollment,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          division: formData.division,
          department: formData.department,
          semester: formData.semester,
          rollNo: formData.rollNo,
          voicePhrase: recordedText, // The text from speech recognition
          voiceSignature: audioData, // The base64 encoded audio
        };

        const response = await axios.post(
          "http://localhost:5000/api/student/register",
          payload
        );
        alert("Registration successful!");
        navigate("/student-login");
      } catch (error) {
        alert(error.response?.data?.error || "Registration failed!");
      }
    }
  };

  // Function to get audio as base64 from an HTML5 Audio or Web Audio API source
  const getAudioBase64 = () => {
    return new Promise((resolve, reject) => {
      // Request access to the user's microphone
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((audioStream) => {
          const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();
          const recorder = new MediaRecorder(audioStream);

          const chunks = [];
          recorder.ondataavailable = (event) => chunks.push(event.data);
          recorder.onstop = () => {
            const audioBlob = new Blob(chunks, { type: "audio/wav" });
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64Data = reader.result.split(",")[1]; // Get base64 part
              resolve(base64Data);
            };
            reader.readAsDataURL(audioBlob);
          };

          recorder.start();
          // Stop recording after 3 seconds (you can adjust the duration)
          setTimeout(() => recorder.stop(), 3000);
        })
        .catch((error) => {
          console.error("Error accessing microphone:", error);
          reject("Unable to access microphone");
        });
    });
  };

  // Handle input changes
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "enrollment") {
      // Ensure only numbers are entered for enrollment
      if (!/^\d*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          enrollment: "Enrollment number must be numeric",
        }));
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on valid input
  };

  // Handle voice recording

  const handleStartRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recording!");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    setRecording(true);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setRecordedText(text);
      setAudioRecorded(true);
      setRecording(false);
      // After recording, convert audio to base64 (if needed)
      // This can be handled in the backend if you're using Web Audio API or other audio encoding methods
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("An error occurred during recording. Please try again.");
      setRecording(false);
    };

    recognition.onend = () => {
      setRecording(false);
    };

    recognition.start();
  };

  const handleStopRecording = () => {
    setRecording(false);
  };

  return (
    <>
      <Navbar />
      <div className="bg-register">
        <div className="container">
          <div className="form-container">
            <h1>Student Registration</h1>
            <p>Create an account</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}

              <input
                type="text"
                name="enrollment"
                placeholder="Enrollment Number"
                value={formData.enrollment}
                onChange={handleChange}
              />
              {errors.enrollment && (
                <span className="error">{errors.enrollment}</span>
              )}

              <div className="password-field">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="show-btn"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}

              <div className="password-field">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="show-btn"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}

              <select
                name="division"
                value={formData.division}
                onChange={handleChange}
              >
                <option value="">Select Division</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
              {errors.division && (
                <span className="error">{errors.division}</span>
              )}

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="BCA">BCA</option>
                <option value="IMCA">IMCA</option>
                <option value="MBA">MBA</option>
                <option value="Bsc.It">Bsc.It</option>
                <option value="MCA">MCA</option>
                <option value="IMBA">IMBA</option>
                <option value="Enginneering">Enginneering</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Media">Media</option>
              </select>
              {errors.department && (
                <span className="error">{errors.department}</span>
              )}

              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
              >
                <option value="">Select Semester</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Semester {i + 1}
                  </option>
                ))}
              </select>
              {errors.semester && (
                <span className="error">{errors.semester}</span>
              )}

              <input
                type="text"
                name="rollNo"
                placeholder="Roll Number"
                value={formData.rollNo}
                onChange={handleChange}
              />
              {errors.rollNo && <span className="error">{errors.rollNo}</span>}

              <button type="submit" className="user-register-btn">
                Create an account
              </button>
            </form>

            <div className="voice-recording-section">
              <p>
                Please read the following sentence:{" "}
                <strong>{randomSentence}</strong>
              </p>
              <button
                onClick={recording ? handleStopRecording : handleStartRecording}
              >
                {recording ? "Stop Recording" : "Start Recording"}
              </button>
              {recordedText && (
                <p>
                  Recorded Voice: <strong>{recordedText}</strong>
                </p>
              )}
              {errors.audio && <span className="error">{errors.audio}</span>}
            </div>

            <p className="terms">
              By signing up, you accept our <Link to="#">Terms of Use</Link> and{" "}
              <Link to="#">Privacy Policy</Link>
            </p>
            <p className="login">
              Already have an account? <Link to="/student-login">Log in</Link>
            </p>
          </div>
          <div
            className="image-container"
            style={{
              backgroundImage: `url(${studyingImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "550px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Register;
