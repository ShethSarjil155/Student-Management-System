// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminBlockUsersPage = () => {
//   const styles = {
//     adminBlockContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminBlockContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     adminBlockHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     adminBlockTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminBlockTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminBlockTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminBlockTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminBlockTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminBlockTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     adminBlockButton: {
//       padding: "8px 16px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     },
//     blockButton: {
//       backgroundColor: "#dc3545", // Red for block
//       color: "white",
//     },
//     unblockButton: {
//       backgroundColor: "#007bff", // Blue for unblock
//       color: "white",
//     },
//   };

//   // Static Data for Students
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       department: "MBA",
//       enrollment: "MBA2023001",
//       semester: "1st",
//       rollno: "001",
//       blocked: false,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       department: "MCA",
//       enrollment: "MCA2023002",
//       semester: "3rd",
//       rollno: "002",
//       blocked: false,
//     },
//     {
//       id: 3,
//       name: "Robert Brown",
//       department: "IMCA",
//       enrollment: "IMCA2023003",
//       semester: "5th",
//       rollno: "003",
//       blocked: true,
//     },
//     {
//       id: 4,
//       name: "Emily Davis",
//       department: "BSCIT",
//       enrollment: "BSCIT2023004",
//       semester: "6th",
//       rollno: "004",
//       blocked: false,
//     },
//     {
//       id: 5,
//       name: "Michael Johnson",
//       department: "MBA",
//       enrollment: "MBA2023005",
//       semester: "2nd",
//       rollno: "005",
//       blocked: false,
//     },
//   ]);

//   // Toggle Block/Unblock User
//   const toggleBlock = (id) => {
//     setStudents((prevStudents) =>
//       prevStudents.map((student) =>
//         student.id === id ? { ...student, blocked: !student.blocked } : student
//       )
//     );
//   };

//   return (
//     <div style={styles.adminBlockContainer} className="admin-block-container">
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminBlockContent} className="admin-block-content">
//         <div style={styles.adminBlockHeader} className="admin-block-header">
//           Block/Unblock Students
//         </div>

//         {/* User Table */}
//         <div
//           style={styles.adminBlockTableContainer}
//           className="admin-block-table-container"
//         >
//           <table style={styles.adminBlockTable} className="admin-block-table">
//             <thead className="admin-block-table-header">
//               <tr>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Roll No
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Name
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Department
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Enrollment No.
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Semester
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student) => (
//                 <tr
//                   key={student.id}
//                   style={styles.adminBlockTableRow}
//                   className="admin-block-table-row"
//                 >
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.rollno}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.name}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.department}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.enrollment}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.semester}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     <button
//                       style={{
//                         ...styles.adminBlockButton,
//                         ...(student.blocked
//                           ? styles.unblockButton
//                           : styles.blockButton),
//                       }}
//                       onClick={() => toggleBlock(student.id)}
//                       className={
//                         student.blocked
//                           ? "admin-block-unblock-button"
//                           : "admin-block-block-button"
//                       }
//                     >
//                       {student.blocked ? "Unblock" : "Block"}
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

// export default AdminBlockUsersPage;

// import React, { useState, useEffect } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminBlockUsersPage = () => {
//   const styles = {
//     adminBlockContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminBlockContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     adminBlockHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     adminBlockTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminBlockTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminBlockTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminBlockTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminBlockTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminBlockTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     adminBlockButton: {
//       padding: "8px 16px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "5px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     },
//     blockButton: {
//       backgroundColor: "#dc3545", // Red for block
//       color: "white",
//     },
//     unblockButton: {
//       backgroundColor: "#007bff", // Blue for unblock
//       color: "white",
//     },
//   };

//   const [students, setStudents] = useState([]);

//   // Fetch students from API
//   const fetchStudents = async () => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage

//       if (!token) {
//         throw new Error("Token is missing! Unauthorized request.");
//       }

//       const response = await fetch("http://localhost:5000/api/students", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach token to request headers
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch students");
//       }

//       const data = await response.json();
//       setStudents(data); // Set students in state
//     } catch (error) {
//       console.error("Error fetching students:", error.message);
//     }
//   };

//   // Block student API call
//   const blockStudent = async (enrollment) => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       if (!token) {
//         throw new Error("Token is missing! Unauthorized request.");
//       }

//       const response = await fetch(
//         `http://localhost:5000/api/blocked/student/${enrollment}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Attach token to request headers
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to block student");
//       }

//       // Refresh the students list after blocking
//       fetchStudents();
//     } catch (error) {
//       console.error("Error blocking student:", error.message);
//     }
//   };

//   const unblockStudent = async (enrollment) => {
//     try {
//       const token = localStorage.getItem("token"); // Get token from localStorage
//       if (!token) {
//         throw new Error("Token is missing! Unauthorized request.");
//       }

//       const response = await fetch(
//         `http://localhost:5000/api/unblocked/student/${enrollment}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Attach token to request headers
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to unblock student");
//       }

//       // Refresh the students list after unblocking
//       fetchStudents();
//     } catch (error) {
//       console.error("Error unblocking student:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchStudents(); // Fetch students when the component mounts
//   }, []);

//   return (
//     <div style={styles.adminBlockContainer} className="admin-block-container">
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminBlockContent} className="admin-block-content">
//         <div style={styles.adminBlockHeader} className="admin-block-header">
//           Block/Unblock Students
//         </div>

//         {/* User Table */}
//         <div
//           style={styles.adminBlockTableContainer}
//           className="admin-block-table-container"
//         >
//           <table style={styles.adminBlockTable} className="admin-block-table">
//             <thead className="admin-block-table-header">
//               <tr>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Index
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Name
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Department
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Enrollment No.
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Semester
//                 </th>
//                 <th
//                   style={styles.adminBlockTableHeaderCell}
//                   className="admin-block-table-header-cell"
//                 >
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr
//                   key={student.enrollment}
//                   style={styles.adminBlockTableRow}
//                   className="admin-block-table-row"
//                 >
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {index + 1}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.fname}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.department}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.enrollment}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     {student.semester}
//                   </td>
//                   <td
//                     style={styles.adminBlockTableCell}
//                     className="admin-block-table-cell"
//                   >
//                     <button
//                       style={{
//                         ...styles.adminBlockButton,
//                         ...(student.isBlocked === "y"
//                           ? styles.unblockButton
//                           : styles.blockButton),
//                       }}
//                       onClick={() =>
//                         student.isBlocked === "y"
//                           ? unblockStudent(student.enrollment)
//                           : blockStudent(student.enrollment)
//                       }
//                       className={
//                         student.isBlocked === "y"
//                           ? "admin-block-unblock-button"
//                           : "admin-block-block-button"
//                       }
//                     >
//                       {student.isBlocked === "y" ? "Unblock" : "Block"}
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

// export default AdminBlockUsersPage;

import React, { useState, useEffect } from "react";
import Admin from "../components/AdminSidebar"; // Sidebar Component

const AdminBlockUsersPage = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch students from API
  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing! Unauthorized request.");
      }

      const response = await fetch("http://localhost:5000/api/students", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error.message);
    }
  };

  // Block student API call
  const blockStudent = async (enrollment) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing! Unauthorized request.");
      }

      const response = await fetch(
        `http://localhost:5000/api/blocked/student/${enrollment}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to block student");
      }

      fetchStudents();
    } catch (error) {
      console.error("Error blocking student:", error.message);
    }
  };

  // Unblock student API call
  const unblockStudent = async (enrollment) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing! Unauthorized request.");
      }

      const response = await fetch(
        `http://localhost:5000/api/unblocked/student/${enrollment}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to unblock student");
      }

      fetchStudents();
    } catch (error) {
      console.error("Error unblocking student:", error.message);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.enrollment.toString().includes(searchQuery)
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Sidebar */}
      <Admin />

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: "#f8f9fa", padding: "20px" }}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Block/Unblock Students
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or enrollment..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "98%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />

        {/* User Table */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#64DFDF", color: "white" }}>
                <th style={{ padding: "12px", textAlign: "left" }}>Index</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Department
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Enrollment No.
                </th>
                <th style={{ padding: "12px", textAlign: "left" }}>Semester</th>
                <th style={{ padding: "12px", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr
                    key={student.enrollment}
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    <td style={{ padding: "12px", color: "#555" }}>
                      {index + 1}
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {student.fname}
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {student.department}
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {student.enrollment}
                    </td>
                    <td style={{ padding: "12px", color: "#555" }}>
                      {student.semester}
                    </td>
                    <td style={{ padding: "12px" }}>
                      <button
                        style={{
                          padding: "8px 16px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          backgroundColor:
                            student.isBlocked === "y" ? "#007bff" : "#dc3545",
                          color: "white",
                          transition: "background-color 0.3s ease",
                        }}
                        onClick={() =>
                          student.isBlocked === "y"
                            ? unblockStudent(student.enrollment)
                            : blockStudent(student.enrollment)
                        }
                      >
                        {student.isBlocked === "y" ? "Unblock" : "Block"}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      color: "#555",
                    }}
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBlockUsersPage;
