// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminAnnouncementPage = () => {
//   const [announcement, setAnnouncement] = useState("");
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [selectedSemester, setSelectedSemester] = useState("");

//   const departments = [
//     "MScIT",
//     "BScIT",
//     "MCA",
//     "MBA",
//     "BBA",
//     "BCA",
//     "All Departments",
//   ];
//   const semesters = Array.from({ length: 10 }, (_, i) => i + 1); // Semester 1 to 10

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., sending data to an API)
//     console.log({
//       announcement,
//       department,
//       semester,
//       selectedSemester,
//     });
//   };

//   const styles = {
//     adminAttendanceContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminAttendanceContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     adminAttendanceHeader: {
//       marginBottom: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminAttendanceTitle: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     adminFormContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminFormLabel: {
//       fontSize: "16px",
//       fontWeight: "600",
//       marginBottom: "8px",
//       color: "#333",
//     },
//     adminFormInput: {
//       width: "100%",
//       padding: "10px",
//       fontSize: "14px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       marginBottom: "15px",
//     },
//     adminFormButton: {
//       padding: "10px 20px",
//       backgroundColor: "#64DFDF",
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "6px",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//     adminFormButtonHover: {
//       backgroundColor: "#4fcccc", // Darker shade on hover
//     },
//   };

//   return (
//     <div style={styles.adminAttendanceContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminAttendanceContent}>
//         {/* Header */}
//         <div style={styles.adminAttendanceHeader}>
//           <div style={styles.adminAttendanceTitle}>Make Announcement</div>
//         </div>

//         {/* Announcement Form */}
//         <div style={styles.adminFormContainer}>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label style={styles.adminFormLabel}>Announcement:</label>
//               <textarea
//                 style={{ ...styles.adminFormInput, height: "150px" }}
//                 value={announcement}
//                 onChange={(e) => setAnnouncement(e.target.value)}
//                 placeholder="Enter the announcement"
//                 rows="4"
//               />
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>Department:</label>
//               <select
//                 style={styles.adminFormInput}
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

//             <div>
//               <label style={styles.adminFormLabel}>Semester:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>
//                 Select Semester for Announcement:
//               </label>
//               <select
//                 style={styles.adminFormInput}
//                 value={selectedSemester}
//                 onChange={(e) => setSelectedSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 style={styles.adminFormButton}
//                 onMouseEnter={(e) =>
//                   (e.target.style.backgroundColor =
//                     styles.adminFormButtonHover.backgroundColor)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.backgroundColor = "#64DFDF")
//                 }
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAnnouncementPage;

// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminAnnouncementPage = () => {
//   const [announcement, setAnnouncement] = useState("");
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [selectedSemester, setSelectedSemester] = useState("");

//   const departments = [
//     "MScIT",
//     "BScIT",
//     "MCA",
//     "MBA",
//     "BBA",
//     "BCA",
//     "All Departments",
//   ];
//   const semesters = Array.from({ length: 10 }, (_, i) => i + 1); // Semester 1 to 10

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       announcement,
//       department,
//       semester,
//       selectedSemester,
//     });
//   };

//   const styles = {
//     adminAttendanceContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//       background: "#121212", // Dark background
//       color: "#fff", // White text for contrast
//     },
//     adminAttendanceContent: {
//       flex: 1,
//       backgroundColor: "#1a1a1a", // Darker background for main content
//       padding: "30px",
//       borderRadius: "10px",
//     },
//     adminAttendanceHeader: {
//       marginBottom: "30px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminAttendanceTitle: {
//       fontSize: "32px",
//       fontWeight: "700",
//       color: "#fff", // White text for header
//     },
//     adminFormContainer: {
//       backgroundColor: "#212121", // Dark background for the form
//       borderRadius: "15px",
//       padding: "40px",
//       boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
//       width: "100%",
//       maxWidth: "600px",
//       margin: "auto",
//     },
//     adminFormLabel: {
//       fontSize: "16px",
//       fontWeight: "600",
//       marginBottom: "8px",
//       color: "#fff", // White text for labels
//     },
//     adminFormInput: {
//       width: "100%",
//       //   padding: "12px 20px",
//       fontSize: "15px",
//       border: "2px solid #444", // Dark border color
//       borderRadius: "8px",
//       backgroundColor: "#333", // Dark input field background
//       color: "#fff", // White text inside inputs
//       marginBottom: "20px",
//       outline: "none",
//       transition: "border-color 0.3s ease, background-color 0.3s ease",
//     },
//     adminFormInputFocus: {
//       borderColor: "#00bcd4", // Aqua border on focus
//       backgroundColor: "#444", // Slightly lighter input background on focus
//     },
//     adminFormButton: {
//       padding: "12px 25px",
//       backgroundColor: "#00bcd4", // Aqua background color for button
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "8px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//       width: "100%",
//       fontSize: "16px",
//       boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
//     },
//     adminFormButtonHover: {
//       backgroundColor: "#0097a7", // Darker aqua shade on hover
//     },
//   };

//   return (
//     <div style={styles.adminAttendanceContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminAttendanceContent}>
//         {/* Header */}
//         <div style={styles.adminAttendanceHeader}>
//           <div style={styles.adminAttendanceTitle}>Make Announcement</div>
//         </div>

//         {/* Announcement Form */}
//         <div style={styles.adminFormContainer}>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label style={styles.adminFormLabel}>Announcement:</label>
//               <textarea
//                 style={{
//                   ...styles.adminFormInput,
//                   height: "150px",
//                 }}
//                 value={announcement}
//                 onChange={(e) => setAnnouncement(e.target.value)}
//                 placeholder="Enter the announcement"
//                 rows="4"
//               />
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>Department:</label>
//               <select
//                 style={styles.adminFormInput}
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

//             <div>
//               <label style={styles.adminFormLabel}>Semester:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>
//                 Select Semester for Announcement:
//               </label>
//               <select
//                 style={styles.adminFormInput}
//                 value={selectedSemester}
//                 onChange={(e) => setSelectedSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 style={styles.adminFormButton}
//                 onMouseEnter={(e) =>
//                   (e.target.style.backgroundColor =
//                     styles.adminFormButtonHover.backgroundColor)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.backgroundColor = "#00bcd4")
//                 }
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAnnouncementPage;

// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminAnnouncementPage = () => {
//   const [announcement, setAnnouncement] = useState("");
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState(""); // Semester selection
//   const [division, setDivision] = useState(""); // Division selection

//   const departments = [
//     "MScIT",
//     "BScIT",
//     "MCA",
//     "MBA",
//     "BBA",
//     "BCA",
//     "All Departments",
//   ];

//   const semesters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; // Semesters 1 to 10
//   const divisions = ["A", "B", "C", "D", "E", "F", "G"]; // Divisions A to G

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       announcement,
//       department,
//       semester,
//       division,
//     });
//   };

//   const styles = {
//     adminAttendanceContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//       background: "#121212", // Dark background
//       color: "#fff", // White text for contrast
//       overflow: "hidden", // Prevent content overflow
//     },
//     sidebarContainer: {
//       position: "fixed", // Make sidebar sticky
//       top: "0",
//       left: "0",
//       bottom: "0",
//       width: "250px",
//       height: "100vh",
//       backgroundColor: "#121212", // Sidebar background color
//       //   padding: "20px",
//       overflowY: "auto", // Allow sidebar to scroll if content overflows
//     },
//     adminAttendanceContent: {
//       flex: 1,
//       backgroundColor: "#1a1a1a", // Darker background for main content
//       padding: "40px",
//       borderRadius: "10px",
//       marginLeft: "250px", // Push content to the right of the sidebar
//       overflowY: "auto", // Make content area scrollable if content overflows
//       height: "100vh", // Full height for content area
//     },
//     adminAttendanceHeader: {
//       marginBottom: "40px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminAttendanceTitle: {
//       fontSize: "36px",
//       fontWeight: "700",
//       color: "#00bcd4", // Aqua color for header
//       textAlign: "center",
//     },
//     adminFormContainer: {
//       backgroundColor: "#212121", // Dark background for the form
//       borderRadius: "20px", // More rounded corners
//       padding: "40px",
//       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
//       width: "100%",
//       maxWidth: "650px",
//       margin: "auto",
//       position: "relative", // For consistent form position
//       paddingBottom: "70px",
//     },
//     adminFormLabel: {
//       fontSize: "18px", // Increased font size for better readability
//       fontWeight: "600",
//       marginBottom: "12px",
//       color: "#fff", // White text for labels
//     },
//     adminFormInput: {
//       width: "100%",
//       fontSize: "16px", // Slightly larger text for input fields
//       border: "2px solid #444", // Dark border color
//       borderRadius: "12px", // Rounded corners for inputs
//       backgroundColor: "#333", // Dark input field background
//       color: "#fff", // White text inside inputs
//       marginBottom: "20px",
//       outline: "none",
//       padding: "15px",
//       transition: "all 0.3s ease",
//     },
//     adminFormTextArea: {
//       width: "100%",
//       fontSize: "16px", // Slightly larger text for input fields
//       border: "2px solid #444", // Dark border color
//       borderRadius: "12px", // Rounded corners for inputs
//       backgroundColor: "#333", // Dark input field background
//       color: "#fff", // White text inside inputs
//       marginBottom: "20px",
//       outline: "none",
//       resize: "none", // Disable resize
//       height: "180px", // Increased height for textarea
//       transition: "all 0.3s ease",
//     },
//     adminFormButton: {
//       padding: "15px 30px",
//       backgroundColor: "#00bcd4", // Aqua background color for button
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "12px", // Rounded button corners
//       cursor: "pointer",
//       transition: "background-color 0.3s ease, transform 0.2s ease",
//       width: "100%",
//       fontSize: "18px",
//       boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
//     },
//     adminFormButtonHover: {
//       backgroundColor: "#0097a7", // Darker aqua shade on hover
//       transform: "scale(1.05)", // Slight scaling effect on hover
//     },
//     adminFormInputContainer: {
//       marginBottom: "20px", // Consistent spacing between form fields
//     },
//   };

//   return (
//     <div style={styles.adminAttendanceContainer}>
//       {/* Sidebar */}
//       <div style={styles.sidebarContainer}>
//         <Admin />
//       </div>

//       {/* Main Content */}
//       <div style={styles.adminAttendanceContent}>
//         {/* Header */}
//         <div style={styles.adminAttendanceHeader}>
//           <div style={styles.adminAttendanceTitle}>Make Announcement</div>
//         </div>

//         {/* Announcement Form */}
//         <div style={styles.adminFormContainer}>
//           <form onSubmit={handleSubmit}>
//             <div style={styles.adminFormInputContainer}>
//               <label style={styles.adminFormLabel}>Announcement:</label>
//               <textarea
//                 style={styles.adminFormTextArea}
//                 value={announcement}
//                 onChange={(e) => setAnnouncement(e.target.value)}
//                 placeholder="Enter the announcement"
//                 rows="4"
//               />
//             </div>

//             <div style={styles.adminFormInputContainer}>
//               <label style={styles.adminFormLabel}>Department:</label>
//               <select
//                 style={styles.adminFormInput}
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

//             <div style={styles.adminFormInputContainer}>
//               <label style={styles.adminFormLabel}>Semester:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//               >
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div style={styles.adminFormInputContainer}>
//               <label style={styles.adminFormLabel}>Division:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={division}
//                 onChange={(e) => setDivision(e.target.value)}
//               >
//                 {divisions.map((div) => (
//                   <option key={div} value={div}>
//                     Division {div}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 style={styles.adminFormButton}
//                 onMouseEnter={(e) =>
//                   (e.target.style.backgroundColor =
//                     styles.adminFormButtonHover.backgroundColor)
//                 }
//                 onMouseLeave={(e) =>
//                   (e.target.style.backgroundColor = "#00bcd4")
//                 }
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAnnouncementPage;

//previous:---------------------------------------------------
// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar";

// const AdminAnnouncementPage = () => {
//   const [announcement, setAnnouncement] = useState("");
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [division, setDivision] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

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
//     "All Departments",
//   ];

//   const semesters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
//   const divisions = ["A", "B", "C", "D", "E", "F", "G"];

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setLoading(true);
//   //   setMessage("");

//   //   const token = localStorage.getItem("token"); // Retrieve token

//   //   const announcementData = {
//   //     announcement,
//   //     department: department.length > 0 ? department : ["All Departments"],
//   //     semester,
//   //     division,
//   //   };

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/announcements", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //       body: JSON.stringify(announcementData),
//   //     });

//   //     const data = await response.json();

//   //     if (response.ok) {
//   //       setMessage("Announcement posted successfully!");
//   //       setAnnouncement("");
//   //       setDepartment([]);
//   //       setSemester("");
//   //       setDivision("");
//   //     } else {
//   //       setMessage(data.message || "Failed to post announcement.");
//   //     }
//   //   } catch (error) {
//   //     setMessage("An error occurred while posting the announcement.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const token = localStorage.getItem("token"); // Retrieve token

//     // If "All Departments" is selected and no semester or division is chosen, set defaults
//     const selectedDepartment = department.includes("All Departments")
//       ? ["All Departments"]
//       : department;
//     const selectedSemester =
//       selectedDepartment.includes("All Departments") && !semester
//         ? "All Semesters"
//         : semester;
//     const selectedDivision =
//       selectedDepartment.includes("All Departments") && !division
//         ? "All Divisions"
//         : division;

//     const announcementData = {
//       announcement,
//       department: selectedDepartment,
//       semester: selectedSemester,
//       division: selectedDivision,
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/announcements", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(announcementData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage("Announcement posted successfully!");
//         setAnnouncement("");
//         setDepartment([]);
//         setSemester("");
//         setDivision("");
//       } else {
//         setMessage(data.message || "Failed to post announcement.");
//       }
//     } catch (error) {
//       setMessage("An error occurred while posting the announcement.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const styles = {
//     adminAttendanceContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//       background: "#121212",
//       color: "#fff",
//       overflow: "hidden",
//     },
//     sidebarContainer: {
//       position: "fixed",
//       top: "0",
//       left: "0",
//       bottom: "0",
//       width: "250px",
//       height: "100vh",
//       backgroundColor: "#121212",
//       overflowY: "auto",
//     },
//     adminAttendanceContent: {
//       flex: 1,
//       backgroundColor: "#1a1a1a",
//       padding: "40px",
//       borderRadius: "10px",
//       marginLeft: "250px",
//       overflowY: "auto",
//       height: "100vh",
//     },
//     adminAttendanceHeader: {
//       marginBottom: "40px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminAttendanceTitle: {
//       fontSize: "36px",
//       fontWeight: "700",
//       color: "#00bcd4",
//       textAlign: "center",
//     },
//     adminFormContainer: {
//       backgroundColor: "#212121",
//       borderRadius: "20px",
//       padding: "40px",
//       boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
//       width: "100%",
//       maxWidth: "650px",
//       margin: "auto",
//       paddingBottom: "70px",
//     },
//     adminFormLabel: {
//       fontSize: "18px",
//       fontWeight: "600",
//       marginBottom: "12px",
//       color: "#fff",
//     },
//     adminFormInput: {
//       width: "100%",
//       fontSize: "16px",
//       border: "2px solid #444",
//       borderRadius: "12px",
//       backgroundColor: "#333",
//       color: "#fff",
//       marginBottom: "20px",
//       outline: "none",
//       padding: "15px",
//       transition: "all 0.3s ease",
//     },
//     adminFormTextArea: {
//       width: "100%",
//       fontSize: "16px",
//       border: "2px solid #444",
//       borderRadius: "12px",
//       backgroundColor: "#333",
//       color: "#fff",
//       marginBottom: "20px",
//       outline: "none",
//       resize: "none",
//       height: "180px",
//       transition: "all 0.3s ease",
//     },
//     adminFormButton: {
//       padding: "15px 30px",
//       backgroundColor: "#00bcd4",
//       color: "white",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "12px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease, transform 0.2s ease",
//       width: "100%",
//       fontSize: "18px",
//       boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
//     },
//   };

//   return (
//     <div style={styles.adminAttendanceContainer}>
//       <div style={styles.sidebarContainer}>
//         <Admin />
//       </div>
//       <div style={styles.adminAttendanceContent}>
//         <div style={styles.adminAttendanceHeader}>
//           <div style={styles.adminAttendanceTitle}>Make Announcement</div>
//         </div>
//         <div style={styles.adminFormContainer}>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label style={styles.adminFormLabel}>Announcement:</label>
//               <textarea
//                 style={styles.adminFormTextArea}
//                 value={announcement}
//                 onChange={(e) => setAnnouncement(e.target.value)}
//                 placeholder="Enter the announcement"
//                 rows="4"
//                 required
//               />
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>Department:</label>
//               {/* <select
//                 style={styles.adminFormInput}
//                 value={department}
//                 onChange={(e) => setDepartment(e.target.value)}
//                 required
//               >
//                 <option value="">Select Department</option>
//                 {departments.map((dept, idx) => (
//                   <option key={idx} value={dept}>
//                     {dept}
//                   </option>
//                 ))}
//               </select> */}
//               <select
//                 multiple
//                 style={styles.adminFormInput}
//                 value={department}
//                 onChange={(e) => {
//                   const selected = Array.from(
//                     e.target.selectedOptions,
//                     (option) => option.value
//                   );
//                   if (selected.includes("All Departments")) {
//                     setDepartment(["All Departments"]);
//                   } else {
//                     setDepartment(selected);
//                   }
//                 }}
//                 required
//               >
//                 {departments.map((dept, idx) => (
//                   <option key={idx} value={dept}>
//                     {dept}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>Semester:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={semester}
//                 onChange={(e) => setSemester(e.target.value)}
//                 required
//               >
//                 <option value="">Select Semester</option>
//                 {semesters.map((sem) => (
//                   <option key={sem} value={sem}>
//                     Semester {sem}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label style={styles.adminFormLabel}>Division:</label>
//               <select
//                 style={styles.adminFormInput}
//                 value={division}
//                 onChange={(e) => setDivision(e.target.value)}
//                 required
//               >
//                 <option value="">Select Division</option>
//                 {divisions.map((div) => (
//                   <option key={div} value={div}>
//                     Division {div}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 style={styles.adminFormButton}
//                 disabled={loading}
//               >
//                 {loading ? "Posting..." : "Submit"}
//               </button>
//             </div>
//           </form>

//           {message && (
//             <p style={{ color: "#00bcd4", marginTop: "20px" }}>{message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAnnouncementPage;
// ----------------------------------------------------------------

import React, { useState } from "react";
import Admin from "../components/AdminSidebar";

const AdminAnnouncementPage = () => {
  const [announcement, setAnnouncement] = useState("");
  const [department, setDepartment] = useState([]);
  const [semester, setSemester] = useState([]);
  const [division, setDivision] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const departments = [
    "BCA",
    "IMCA",
    "MBA",
    "Bsc.It",
    "MCA",
    "IMBA",
    "Engineering",
    "Pharmacy",
    "Media",
    "All Departments",
  ];

  const semesters = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "All Semesters",
  ];
  const divisions = ["A", "B", "C", "D", "E", "F", "G", "All Divisions"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");

    const selectedDepartment = department.includes("All Departments")
      ? ["All Departments"]
      : department;

    const selectedSemester = semester.includes("All Semesters")
      ? ["All Semesters"]
      : semester;

    const selectedDivision = division.includes("All Divisions")
      ? ["All Divisions"]
      : division;

    const announcementData = {
      announcement,
      department: selectedDepartment,
      semester: selectedSemester,
      division: selectedDivision,
    };

    try {
      const response = await fetch("http://localhost:5000/api/announcements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(announcementData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Announcement posted successfully!");
        setAnnouncement("");
        setDepartment([]);
        setSemester([]);
        setDivision([]);
      } else {
        setMessage(data.message || "Failed to post announcement.");
      }
    } catch (error) {
      setMessage("An error occurred while posting the announcement.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    adminAttendanceContainer: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif",
      background: "#121212",
      color: "#fff",
      overflow: "hidden",
    },
    sidebarContainer: {
      position: "fixed",
      top: "0",
      left: "0",
      bottom: "0",
      width: "250px",
      height: "100vh",
      backgroundColor: "#121212",
      overflowY: "auto",
    },
    adminAttendanceContent: {
      flex: 1,
      backgroundColor: "#1a1a1a",
      padding: "40px",
      borderRadius: "10px",
      marginLeft: "250px",
      overflowY: "auto",
      height: "100vh",
    },
    adminAttendanceHeader: {
      marginBottom: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    adminAttendanceTitle: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#00bcd4",
      textAlign: "center",
    },
    adminFormContainer: {
      backgroundColor: "#212121",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      width: "100%",
      maxWidth: "650px",
      margin: "auto",
      paddingBottom: "70px",
    },
    adminFormLabel: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "12px",
      color: "#fff",
    },
    adminFormInput: {
      width: "100%",
      fontSize: "16px",
      border: "2px solid #444",
      borderRadius: "12px",
      backgroundColor: "#333",
      color: "#fff",
      marginBottom: "20px",
      outline: "none",
      padding: "15px",
      transition: "all 0.3s ease",
    },
    adminFormTextArea: {
      width: "100%",
      fontSize: "16px",
      border: "2px solid #444",
      borderRadius: "12px",
      backgroundColor: "#333",
      color: "#fff",
      marginBottom: "20px",
      outline: "none",
      resize: "none",
      height: "180px",
      transition: "all 0.3s ease",
    },
    adminFormButton: {
      padding: "15px 30px",
      backgroundColor: "#00bcd4",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      width: "100%",
      fontSize: "18px",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div style={styles.adminAttendanceContainer}>
      <div style={styles.sidebarContainer}>
        <Admin />
      </div>
      <div style={styles.adminAttendanceContent}>
        <div style={styles.adminAttendanceHeader}>
          <div style={styles.adminAttendanceTitle}>Make Announcement</div>
        </div>
        <div style={styles.adminFormContainer}>
          <form onSubmit={handleSubmit}>
            <div>
              <label style={styles.adminFormLabel}>Announcement:</label>
              <textarea
                style={styles.adminFormTextArea}
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                placeholder="Enter the announcement"
                rows="4"
                required
              />
            </div>

            <div>
              <label style={styles.adminFormLabel}>Department:</label>
              {/* <select
                style={styles.adminFormInput}
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept, idx) => (
                  <option key={idx} value={dept}>
                    {dept}
                  </option>
                ))}
              </select> */}
              <select
                multiple
                style={styles.adminFormInput}
                value={department}
                onChange={(e) => {
                  const selected = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  );
                  if (selected.includes("All Departments")) {
                    setDepartment(["All Departments"]);
                  } else {
                    setDepartment(selected);
                  }
                }}
                required
              >
                {departments.map((dept, idx) => (
                  <option key={idx} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={styles.adminFormLabel}>Semester:</label>
              <select
                style={styles.adminFormInput}
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              >
                <option value="">Select Semester</option>
                {semesters.map((sem) => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={styles.adminFormLabel}>Division:</label>
              <select
                style={styles.adminFormInput}
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                required
              >
                <option value="">Select Division</option>
                {divisions.map((div) => (
                  <option key={div} value={div}>
                    Division {div}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                style={styles.adminFormButton}
                disabled={loading}
              >
                {loading ? "Posting..." : "Submit"}
              </button>
            </div>
          </form>

          {message && (
            <p style={{ color: "#00bcd4", marginTop: "20px" }}>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAnnouncementPage;
