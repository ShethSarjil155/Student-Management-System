// import React, { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar"; // Sidebar Component
// import { FaFileUpload, FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for upload and status

// const AdminResultPage = () => {
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [division, setDivision] = useState("");
//   const [file, setFile] = useState(null);
//   const [resultDescription, setResultDescription] = useState("");

//   const departments = ["MCA", "BCA", "MBA", "BBA", "IMCA", "BScIT", "IMBA"];

//   const semesters = Array.from({ length: 10 }, (_, i) => `${i + 1}th`);
//   const divisions = ["A", "B", "C", "D", "E", "F", "G"];

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", {
//       department,
//       semester,
//       division,
//       file,
//       resultDescription,
//     });
//   };

//   const styles = {
//     resultPageContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     resultPageContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa",
//       padding: "30px",
//       overflowY: "auto",
//     },
//     resultHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     resultFormContainer: {
//       backgroundColor: "#fff",
//       borderRadius: "10px",
//       padding: "30px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//       width: "100%",
//       maxWidth: "600px",
//       margin: "auto",
//     },
//     formLabel: {
//       fontSize: "16px",
//       fontWeight: "600",
//       marginBottom: "8px",
//       color: "#333",
//     },
//     formInput: {
//       width: "100%",
//       padding: "12px",
//       fontSize: "16px",
//       marginBottom: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       outline: "none",
//       color: "#333",
//     },
//     fileInput: {
//       padding: "10px 20px",
//       borderRadius: "8px",
//       marginBottom: "20px",
//     },
//     submitButton: {
//       padding: "12px 25px",
//       backgroundColor: "#007bff",
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "8px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     },
//     submitButtonHover: {
//       backgroundColor: "#0056b3",
//     },
//     formGroup: {
//       marginBottom: "20px",
//     },
//   };

//   return (
//     <div style={styles.resultPageContainer}>
//       {/* Sidebar */}
//       <AdminSidebar />

//       {/* Right-side Content */}
//       <div style={styles.resultPageContent}>
//         <div style={styles.resultHeader}>Upload & Manage Results</div>

//         <div style={styles.resultFormContainer}>
//           <form onSubmit={handleSubmit}>
//             {/* Department Dropdown */}
//             <div style={styles.formGroup}>
//               <label style={styles.formLabel}>Department:</label>
//               <select
//                 style={styles.formInput}
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//               >
//                 {departments.map((dept, idx) => (
//                   <option key={idx} value={dept}>
//                     {dept}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Semester Dropdown */}
//             <div style={styles.formGroup}>
//               <label style={styles.formLabel}>Semester:</label>
//               <select
//                 style={styles.formInput}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Division Dropdown */}
//             <div style={styles.formGroup}>
//               <label style={styles.formLabel}>Division:</label>
//               <select
//                 style={styles.formInput}
//                 value={division}
//                 onChange={(e) => setDivision(e.target.value)}
//               >
//                 {divisions.map((div) => (
//                   <option key={div} value={div}>
//                     {div}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* File Upload */}
//             <div style={styles.formGroup}>
//               <label style={styles.formLabel}>Upload Result File:</label>
//               <input
//                 type="file"
//                 style={styles.fileInput}
//                 onChange={handleFileChange}
//               />
//             </div>

//             {/* Result Description */}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               style={styles.submitButton}
//               onMouseEnter={(e) =>
//                 (e.target.style.backgroundColor =
//                   styles.submitButtonHover.backgroundColor)
//               }
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
//             >
//               <FaFileUpload style={{ marginRight: "8px" }} />
//               Publish Result
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminResultPage;

// import React, { useState } from "react";
// import AdminSidebar from "../components/AdminSidebar"; // Sidebar Component
// import { FaFileUpload } from "react-icons/fa"; // Upload Icon

// const AdminResultPage = () => {
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [division, setDivision] = useState("");
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState("");

//   const token = localStorage.getItem("token"); // Fetch token from local storage

//   const departments = [
//     "BCA",
//     "IMCA",
//     "MBA",
//     "Bsc.It",
//     "MCA",
//     "IMBA",
//     "Engineering",
//     "Pharmacy",
//     "Media",
//   ];

//   const semesters = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
//   const divisions = ["A", "B", "C", "D", "E", "F", "G"];

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!department || !semester || !division || !file) {
//       setUploadStatus("Please fill all fields and upload a file.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("department", department);
//     formData.append("semester", semester);
//     formData.append("division", division);
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://localhost:5000/api/upload", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach the token
//         },
//         body: formData,
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setUploadStatus("Result uploaded successfully!");
//       } else {
//         setUploadStatus(result.message || "File upload failed!");
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//       setUploadStatus("Error uploading file.");
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       <AdminSidebar />

//       <div
//         style={{
//           flex: 1,
//           backgroundColor: "#f8f9fa",
//           padding: "30px",
//           overflowY: "auto",
//         }}
//       >
//         <h2 style={{ marginBottom: "20px", color: "#333" }}>
//           Upload & Manage Results
//         </h2>

//         <div
//           style={{
//             backgroundColor: "#fff",
//             borderRadius: "10px",
//             padding: "30px",
//             boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//             maxWidth: "600px",
//             margin: "auto",
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             {/* Department Dropdown */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ fontWeight: "600", color: "#333" }}>
//                 Department:
//               </label>
//               <select
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   fontSize: "16px",
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   outline: "none",
//                   color: "#fff",
//                 }}
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//               >
//                 <option value="">Select Department</option>
//                 {departments.map((dept, idx) => (
//                   <option key={idx} value={dept}>
//                     {dept}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Semester Dropdown */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ fontWeight: "600", color: "#333" }}>
//                 Semester:
//               </label>
//               <select
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   fontSize: "16px",
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   outline: "none",
//                   color: "#fff",
//                 }}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//               >
//                 <option value="">Select Semester</option>
//                 {semesters.map((sem, idx) => (
//                   <option key={idx} value={sem}>
//                     {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Division Dropdown */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ fontWeight: "600", color: "#333" }}>
//                 Division:
//               </label>
//               <select
//                 style={{
//                   width: "100%",
//                   padding: "12px",
//                   fontSize: "16px",
//                   border: "1px solid #ccc",
//                   borderRadius: "8px",
//                   outline: "none",
//                   color: "#fff",
//                 }}
//                 value={division}
//                 onChange={(e) => setDivision(e.target.value)}
//               >
//                 <option value="">Select Division</option>
//                 {divisions.map((div, idx) => (
//                   <option key={idx} value={div}>
//                     {div}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* File Upload */}
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ fontWeight: "600", color: "#333" }}>
//                 Upload Result File (CSV):
//               </label>
//               <input
//                 type="file"
//                 accept=".csv"
//                 style={{ padding: "10px", borderRadius: "8px" }}
//                 onChange={handleFileChange}
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               style={{
//                 padding: "12px 25px",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 fontWeight: "bold",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 transition: "background-color 0.3s ease",
//               }}
//               onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
//             >
//               <FaFileUpload style={{ marginRight: "8px" }} />
//               Upload Result
//             </button>

//             {/* Upload Status */}
//             {uploadStatus && (
//               <p
//                 style={{
//                   marginTop: "10px",
//                   fontWeight: "600",
//                   color: uploadStatus.includes("successfully")
//                     ? "green"
//                     : "red",
//                 }}
//               >
//                 {uploadStatus}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminResultPage;

import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { FaFileUpload } from "react-icons/fa";

const AdminResultPage = () => {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const departments = [
    "BCA",
    "IMCA",
    "MBA",
    "BSc.It",
    "MCA",
    "IMBA",
    "Engineering",
    "Pharmacy",
    "Media",
  ];
  const semesters = Array.from({ length: 10 }, (_, i) => `${i + 1}`);
  const divisions = ["A", "B", "C", "D", "E", "F", "G"];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !semester || !division || !file) {
      setMessage("Please fill all fields and select a file");
      return;
    }

    const formData = new FormData();
    formData.append("department", department);
    formData.append("semester", semester);
    formData.append("division", division);
    formData.append("file", file);

    try {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Result uploaded successfully!");
        setFile(null);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error uploading result:", error);
      setMessage("Error uploading result");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "30px", backgroundColor: "#f8f9fa" }}>
        <h2>Upload & Manage Results</h2>
        {message && <p style={{ color: "red" }}>{message}</p>}
        <form
          onSubmit={handleSubmit}
          style={{ background: "#fff", padding: "20px", borderRadius: "10px" }}
        >
          <label>Department:</label>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select Department</option>
            {departments.map((dept, idx) => (
              <option key={idx} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <label>Semester:</label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            {semesters.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

          <label>Division:</label>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">Select Division</option>
            {divisions.map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>

          <label>Upload Result File:</label>
          <input type="file" onChange={handleFileChange} />

          <button type="submit">
            <FaFileUpload /> Upload Result
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminResultPage;
