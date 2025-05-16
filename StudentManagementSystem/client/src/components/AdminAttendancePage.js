// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking attendance

// const AdminAttendancePage = () => {
//   // Static Data for Students
//   const students = [];
//   for (let i = 1; i <= 25; i++) {
//     students.push({
//       index: i,
//       name: `Student ${i}`,
//       department: i % 2 === 0 ? "MBA" : "MCA", // Alternating departments for diversity
//       enrollment: `ENR202300${i}`,
//       semester: `${(i % 4) + 1}th`, // Alternate semester numbers for variety
//     });
//   }

//   // Set default attendance status for all students to "Present"
//   const initialAttendance = students.reduce((acc, student) => {
//     acc[student.index] = "Present";
//     return acc;
//   }, {});

//   const [attendanceStatus, setAttendanceStatus] = useState(initialAttendance);

//   // Toggle Attendance
//   const toggleAttendance = (index) => {
//     setAttendanceStatus((prevStatus) => ({
//       ...prevStatus,
//       [index]: prevStatus[index] === "Present" ? "Absent" : "Present",
//     }));
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
//     adminAttendanceTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminAttendanceTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminAttendanceTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminAttendanceTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminAttendanceTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminAttendanceTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     adminAttendanceButton: {
//       cursor: "pointer",
//       padding: "6px 12px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       transition: "all 0.3s ease",
//     },
//     adminPresentButton: {
//       backgroundColor: "#64DFDF", // Teal for present
//       color: "white",
//     },
//     adminAbsentButton: {
//       backgroundColor: "#FF6347", // Red for absent
//       color: "white",
//     },
//     adminAttendanceTableRowHover: {
//       backgroundColor: "#f1f1f1",
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
//           <div style={styles.adminAttendanceTitle}>Student Attendance</div>
//         </div>

//         {/* Attendance Table */}
//         <div style={styles.adminAttendanceTableContainer}>
//           <table style={styles.adminAttendanceTable}>
//             <thead style={styles.adminAttendanceTableHeader}>
//               <tr>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Index</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Name</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Department
//                 </th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Enrollment No.
//                 </th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Semester</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Attendance
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr
//                   key={student.index}
//                   style={styles.adminAttendanceTableRow}
//                   onMouseEnter={(e) =>
//                     (e.target.style.backgroundColor =
//                       styles.adminAttendanceTableRowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.index}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.name}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.department}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.enrollment}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.semester}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     <button
//                       style={{
//                         ...styles.adminAttendanceButton,
//                         ...(attendanceStatus[student.index] === "Present"
//                           ? styles.adminPresentButton
//                           : styles.adminAbsentButton),
//                       }}
//                       onClick={() => toggleAttendance(student.index)}
//                     >
//                       {attendanceStatus[student.index] === "Present" ? (
//                         <FaCheckCircle style={{ marginRight: "8px" }} />
//                       ) : (
//                         <FaTimesCircle style={{ marginRight: "8px" }} />
//                       )}
//                       {attendanceStatus[student.index]}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAttendancePage;

// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking attendance

// const AdminAttendancePage = () => {
//   // Static Data for Students
//   const students = [];
//   for (let i = 1; i <= 25; i++) {
//     students.push({
//       index: i,
//       name: `Student ${i}`,
//       department: i % 2 === 0 ? "MBA" : "MCA", // Alternating departments for diversity
//       enrollment: `ENR202300${i}`,
//       semester: `${(i % 4) + 1}th`, // Alternate semester numbers for variety
//     });
//   }

//   // Set default attendance status for all students to "Present"
//   const initialAttendance = students.reduce((acc, student) => {
//     acc[student.index] = "Present";
//     return acc;
//   }, {});

//   const [attendanceStatus, setAttendanceStatus] = useState(initialAttendance);

//   // Pagination States
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 9;

//   // Get current records to display based on currentPage
//   const indexOfLastRecord = currentPage * recordsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//   const currentStudents = students.slice(indexOfFirstRecord, indexOfLastRecord);

//   // Toggle Attendance
//   const toggleAttendance = (index) => {
//     setAttendanceStatus((prevStatus) => ({
//       ...prevStatus,
//       [index]: prevStatus[index] === "Present" ? "Absent" : "Present",
//     }));
//   };

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Calculate total pages
//   const totalPages = Math.ceil(students.length / recordsPerPage);

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
//     adminAttendanceTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminAttendanceTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminAttendanceTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminAttendanceTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminAttendanceTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminAttendanceTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     adminAttendanceButton: {
//       cursor: "pointer",
//       padding: "6px 12px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       transition: "all 0.3s ease",
//     },
//     adminPresentButton: {
//       backgroundColor: "#64DFDF", // Teal for present
//       color: "white",
//     },
//     adminAbsentButton: {
//       backgroundColor: "#FF6347", // Red for absent
//       color: "white",
//     },
//     adminAttendanceTableRowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//     paginationContainer: {
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "20px",
//     },
//     paginationButton: {
//       padding: "8px 16px",
//       margin: "0 5px",
//       cursor: "pointer",
//       backgroundColor: "#64DFDF",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//     paginationDisabled: {
//       backgroundColor: "#ccc",
//       cursor: "not-allowed",
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
//           <div style={styles.adminAttendanceTitle}>Student Attendance</div>
//         </div>

//         {/* Attendance Table */}
//         <div style={styles.adminAttendanceTableContainer}>
//           <table style={styles.adminAttendanceTable}>
//             <thead style={styles.adminAttendanceTableHeader}>
//               <tr>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Index</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Name</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Department
//                 </th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Enrollment No.
//                 </th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>Semester</th>
//                 <th style={styles.adminAttendanceTableHeaderCell}>
//                   Attendance
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentStudents.map((student) => (
//                 <tr
//                   key={student.index}
//                   style={styles.adminAttendanceTableRow}
//                   onMouseEnter={(e) =>
//                     (e.target.style.backgroundColor =
//                       styles.adminAttendanceTableRowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.index}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.name}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.department}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.enrollment}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     {student.semester}
//                   </td>
//                   <td style={styles.adminAttendanceTableCell}>
//                     <button
//                       style={{
//                         ...styles.adminAttendanceButton,
//                         ...(attendanceStatus[student.index] === "Present"
//                           ? styles.adminPresentButton
//                           : styles.adminAbsentButton),
//                       }}
//                       onClick={() => toggleAttendance(student.index)}
//                     >
//                       {attendanceStatus[student.index] === "Present" ? (
//                         <FaCheckCircle style={{ marginRight: "8px" }} />
//                       ) : (
//                         <FaTimesCircle style={{ marginRight: "8px" }} />
//                       )}
//                       {attendanceStatus[student.index]}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         <div style={styles.paginationContainer}>
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.paginationDisabled : {}),
//             }}
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//           {[...Array(totalPages).keys()].map((number) => (
//             <button
//               key={number}
//               style={styles.paginationButton}
//               onClick={() => paginate(number + 1)}
//             >
//               {number + 1}
//             </button>
//           ))}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages ? styles.paginationDisabled : {}),
//             }}
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminAttendancePage;

// import React, { useState, useEffect } from "react";
// import Admin from "../components/AdminSidebar";

// const AdminAttendancePage = () => {
//   const [department, setDepartment] = useState("");
//   const [semester, setSemester] = useState("");
//   const [division, setDivision] = useState("");
//   const [students, setStudents] = useState([]);
//   const [attendanceStatus, setAttendanceStatus] = useState({});
//   const [date, setDate] = useState("");
//   const [loading, setLoading] = useState(false);
//   const token = localStorage.getItem("token"); // Fetch stored token

//   useEffect(() => {
//     if (department && semester && division) {
//       fetchStudents();
//     }
//   }, [department, semester, division]);

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(
//         `http://localhost:5000/api/students?department=${department}&semester=${semester}&division=${division}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch students");
//       }

//       const data = await response.json();
//       setStudents(data);

//       // Set default attendance to "Absent"
//       const initialAttendance = {};
//       data.forEach((student) => {
//         initialAttendance[student._id] = "Absent";
//       });
//       setAttendanceStatus(initialAttendance);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Set attendance for a student
//   const markAttendance = (studentId, status) => {
//     setAttendanceStatus((prev) => ({
//       ...prev,
//       [studentId]: status,
//     }));
//   };

//   // Submit attendance
//   const submitAttendance = async () => {
//     if (!date || !department || !semester || !division) {
//       alert("Please select all fields!");
//       return;
//     }

//     const attendanceData = {
//       date,
//       department,
//       semester,
//       division,
//       students: students.map((student) => ({
//         studentId: student._id,
//         name: student.fname, // Include name
//         enrollment: student.enrollment, // Include enrollment
//         status: attendanceStatus[student._id],
//       })),
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/attendance", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(attendanceData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit attendance");
//       }

//       alert("Attendance recorded successfully!");
//     } catch (error) {
//       console.error("Error submitting attendance:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         fontFamily: "'Poppins', sans-serif",
//       }}
//     >
//       <Admin />

//       <div style={{ flex: 1, backgroundColor: "#f8f9fa", padding: "20px" }}>
//         <h2>Student Attendance</h2>

//         {/* Filters */}
//         <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//           <select
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//           >
//             <option value="">Select Department</option>
//             <option value="BCA">BCA</option>
//             <option value="IMCA">IMCA</option>
//             <option value="MBA">MBA</option>
//             <option value="Bsc.It">Bsc.It</option>
//             <option value="MCA">MCA</option>
//             <option value="IMBA">IMBA</option>
//             <option value="Engineering">Engineering</option>
//             <option value="Pharmacy">Pharmacy</option>
//             <option value="Media">Media</option>
//           </select>

//           <select
//             value={semester}
//             onChange={(e) => setSemester(e.target.value)}
//           >
//             <option value="">Select Semester</option>
//             {Array.from({ length: 10 }, (_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>

//           <select
//             value={division}
//             onChange={(e) => setDivision(e.target.value)}
//           >
//             <option value="">Select Division</option>
//             {["A", "B", "C", "D", "E", "F", "G"].map((div) => (
//               <option key={div} value={div}>
//                 {div}
//               </option>
//             ))}
//           </select>

//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>

//         {/* Attendance Table */}
//         {loading ? (
//           <p>Loading students...</p>
//         ) : students.length === 0 ? (
//           <p>No students found.</p>
//         ) : (
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               backgroundColor: "white",
//               borderRadius: "10px",
//               padding: "20px",
//               boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <thead style={{ backgroundColor: "#64DFDF", color: "white" }}>
//               <tr>
//                 <th style={{ padding: "12px", textAlign: "left" }}>Index</th>
//                 <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
//                 <th style={{ padding: "12px", textAlign: "left" }}>
//                   Enrollment
//                 </th>
//                 <th style={{ padding: "12px", textAlign: "left" }}>
//                   Attendance
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr
//                   key={student._id}
//                   style={{ borderBottom: "1px solid #ddd" }}
//                 >
//                   <td style={{ padding: "12px" }}>{index + 1}</td>
//                   <td style={{ padding: "12px" }}>{student.name}</td>
//                   <td style={{ padding: "12px" }}>{student.enrollment}</td>
//                   <td style={{ padding: "12px" }}>
//                     <button
//                       style={{
//                         cursor: "pointer",
//                         padding: "6px 12px",
//                         marginRight: "10px",
//                         borderRadius: "6px",
//                         fontSize: "14px",
//                         fontWeight: "bold",
//                         backgroundColor: "#28a745",
//                         color: "white",
//                       }}
//                       onClick={() => markAttendance(student._id, "Present")}
//                     >
//                       Present
//                     </button>
//                     <button
//                       style={{
//                         cursor: "pointer",
//                         padding: "6px 12px",
//                         borderRadius: "6px",
//                         fontSize: "14px",
//                         fontWeight: "bold",
//                         backgroundColor: "#FF6347",
//                         color: "white",
//                       }}
//                       onClick={() => markAttendance(student._id, "Absent")}
//                     >
//                       Absent
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}

//         {/* Submit Button */}
//         <button
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             backgroundColor: "#007bff",
//             color: "white",
//             fontSize: "16px",
//             fontWeight: "bold",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//           onClick={submitAttendance}
//         >
//           Submit Attendance
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminAttendancePage;

import React, { useState, useEffect } from "react";
import Admin from "../components/AdminSidebar";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Import Icons

const AdminAttendancePage = () => {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [students, setStudents] = useState([]);
  const [attendanceStatus, setAttendanceStatus] = useState({});
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token"); // Fetch stored token

  useEffect(() => {
    if (department && semester && division) {
      fetchStudents();
    }
  }, [department, semester, division]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/students?department=${department}&semester=${semester}&division=${division}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data);

      // Set default attendance to "Absent"
      const initialAttendance = {};
      data.forEach((student) => {
        initialAttendance[student._id] = "Absent";
      });
      setAttendanceStatus(initialAttendance);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  // Set attendance for a student
  const markAttendance = (studentId, status) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [studentId]: status,
    }));

    // Show a confirmation message
    alert(`Attendance marked as "${status}" successfully!`);
  };

  // Submit attendance
  const submitAttendance = async () => {
    if (!date || !department || !semester || !division) {
      alert("Please select all fields!");
      return;
    }

    const attendanceData = {
      date,
      department,
      semester,
      division,
      students: students.map((student) => ({
        studentId: student._id,
        name: student.fname || student.fullname, // Fixing name issue
        enrollment: student.enrollment,
        status: attendanceStatus[student._id],
      })),
    };

    try {
      const response = await fetch("http://localhost:5000/api/attendance", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(attendanceData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit attendance");
      }

      alert("Attendance recorded successfully!");
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Admin />

      <div style={{ flex: 1, backgroundColor: "#f8f9fa", padding: "20px" }}>
        <h2>Student Attendance</h2>

        {/* Filters */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">Select Semester</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">Select Division</option>
            {["A", "B", "C", "D", "E", "F", "G"].map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Attendance Table */}
        {loading ? (
          <p>Loading students...</p>
        ) : students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <thead style={{ backgroundColor: "#64DFDF", color: "white" }}>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>Index</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Enrollment
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student._id}
                  style={{ borderBottom: "1px solid #ddd" }}
                >
                  <td style={{ padding: "12px" }}>{index + 1}</td>
                  <td style={{ padding: "12px" }}>
                    {student.fname || student.fullname}
                  </td>
                  <td style={{ padding: "12px" }}>{student.enrollment}</td>
                  <td style={{ padding: "12px" }}>
                    <button
                      style={{
                        cursor: "pointer",
                        padding: "6px 12px",
                        marginRight: "10px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        backgroundColor: "#28a745",
                        color: "white",
                      }}
                      onClick={() => markAttendance(student._id, "Present")}
                    >
                      ✅ Present
                    </button>
                    <button
                      style={{
                        cursor: "pointer",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        backgroundColor: "#FF6347",
                        color: "white",
                      }}
                      onClick={() => markAttendance(student._id, "Absent")}
                    >
                      ❌ Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Submit Button */}
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={submitAttendance}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default AdminAttendancePage;
