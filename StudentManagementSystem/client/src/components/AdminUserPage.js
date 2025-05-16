// import React from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const AdminUsersPage = () => {
//   const styles = {
//     adminUserContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminUserContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     adminUserHeader: {
//       marginBottom: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminUserTitle: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     adminUserSearchInput: {
//       width: "300px",
//       padding: "10px 15px",
//       fontSize: "16px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       outline: "none",
//       transition: "border 0.3s ease",
//     },
//     adminUserSearchInputFocus: {
//       border: "1px solid #64DFDF", // Teal border on focus
//     },
//     adminUserTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminUserTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminUserTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminUserTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminUserTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminUserTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     adminUserTableRowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//   };

//   // Static Data for Students
//   // Static Data for Students
//   const students = [
//     {
//       index: 1,
//       name: "John Doe",
//       department: "MBA",
//       enrollment: "MBA2023001",
//       semester: "1st",
//     },
//     {
//       index: 2,
//       name: "Jane Smith",
//       department: "MCA",
//       enrollment: "MCA2023002",
//       semester: "3rd",
//     },
//     {
//       index: 3,
//       name: "Robert Brown",
//       department: "IMCA",
//       enrollment: "IMCA2023003",
//       semester: "5th",
//     },
//     {
//       index: 4,
//       name: "Emily Davis",
//       department: "BSCIT",
//       enrollment: "BSCIT2023004",
//       semester: "6th",
//     },
//     {
//       index: 5,
//       name: "Michael Johnson",
//       department: "MBA",
//       enrollment: "MBA2023005",
//       semester: "2nd",
//     },
//     {
//       index: 6,
//       name: "Sophia Williams",
//       department: "MCA",
//       enrollment: "MCA2023006",
//       semester: "4th",
//     },
//     {
//       index: 7,
//       name: "James Taylor",
//       department: "IMCA",
//       enrollment: "IMCA2023007",
//       semester: "6th",
//     },
//     {
//       index: 8,
//       name: "Isabella Anderson",
//       department: "BSCIT",
//       enrollment: "BSCIT2023008",
//       semester: "1st",
//     },
//     {
//       index: 9,
//       name: "Daniel Martinez",
//       department: "MBA",
//       enrollment: "MBA2023009",
//       semester: "3rd",
//     },
//     {
//       index: 10,
//       name: "Mia Thompson",
//       department: "MCA",
//       enrollment: "MCA2023010",
//       semester: "5th",
//     },
//   ];

//   return (
//     <div style={styles.adminUserContainer} className="admin-user-container">
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminUserContent} className="admin-user-content">
//         {/* Header */}
//         <div style={styles.adminUserHeader} className="admin-user-header">
//           <div style={styles.adminUserTitle} className="admin-user-title">
//             Student Management
//           </div>
//           <input
//             type="text"
//             placeholder="Search by name or enrollment..."
//             style={styles.adminUserSearchInput}
//             className="admin-user-search-input"
//             onFocus={(e) =>
//               (e.target.style.border = styles.adminUserSearchInputFocus.border)
//             }
//             onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
//           />
//         </div>

//         {/* User Table */}
//         <div
//           style={styles.adminUserTableContainer}
//           className="admin-user-table-container"
//         >
//           <table style={styles.adminUserTable} className="admin-user-table">
//             <thead className="admin-user-table-header">
//               <tr>
//                 <th
//                   style={styles.adminUserTableHeaderCell}
//                   className="admin-user-table-header-cell"
//                 >
//                   Index
//                 </th>
//                 <th
//                   style={styles.adminUserTableHeaderCell}
//                   className="admin-user-table-header-cell"
//                 >
//                   Name
//                 </th>
//                 <th
//                   style={styles.adminUserTableHeaderCell}
//                   className="admin-user-table-header-cell"
//                 >
//                   Department
//                 </th>
//                 <th
//                   style={styles.adminUserTableHeaderCell}
//                   className="admin-user-table-header-cell"
//                 >
//                   Enrollment No.
//                 </th>
//                 <th
//                   style={styles.adminUserTableHeaderCell}
//                   className="admin-user-table-header-cell"
//                 >
//                   Semester
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr
//                   key={index}
//                   style={styles.adminUserTableRow}
//                   className="admin-user-table-row"
//                   onMouseEnter={(e) =>
//                     (e.target.style.backgroundColor =
//                       styles.adminUserTableRowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td
//                     style={styles.adminUserTableCell}
//                     className="admin-user-table-cell"
//                   >
//                     {student.index}
//                   </td>
//                   <td
//                     style={styles.adminUserTableCell}
//                     className="admin-user-table-cell"
//                   >
//                     {student.name}
//                   </td>
//                   <td
//                     style={styles.adminUserTableCell}
//                     className="admin-user-table-cell"
//                   >
//                     {student.department}
//                   </td>
//                   <td
//                     style={styles.adminUserTableCell}
//                     className="admin-user-table-cell"
//                   >
//                     {student.enrollment}
//                   </td>
//                   <td
//                     style={styles.adminUserTableCell}
//                     className="admin-user-table-cell"
//                   >
//                     {student.semester}
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

// export default AdminUsersPage;

// import React, { useState, useEffect } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { useNavigate } from "react-router-dom";

// const AdminUsersPage = () => {
//   const [students, setStudents] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStudents = async () => {
//       const token = localStorage.getItem("token"); // Get the token from localStorage
//       if (!token) {
//         alert("Unauthorized! Redirecting to login...");
//         navigate("/admin-login"); // Redirect to login if token is missing
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:5000/api/students", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`, // Attach token to request
//           },
//         });

//         if (response.status === 200) {
//           const data = await response.json();
//           setStudents(data); // Update students state
//         } else if (response.status === 401) {
//           alert("Session expired. Please login again.");
//           navigate("/admin-login"); // Redirect to login
//         } else {
//           const error = await response.json();
//           setErrorMessage(error.message || "Failed to fetch students.");
//         }
//       } catch (err) {
//         console.error("Error fetching students:", err);
//         setErrorMessage("Something went wrong.");
//       }
//     };

//     fetchStudents();
//   }, [navigate]);

//   const styles = {
//     adminUserContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminUserContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     adminUserHeader: {
//       marginBottom: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminUserTitle: {
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     adminUserTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminUserTable: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     adminUserTableHeader: {
//       backgroundColor: "#64DFDF", // Teal header
//       color: "white",
//     },
//     adminUserTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminUserTableRow: {
//       borderBottom: "1px solid #ddd",
//     },
//     adminUserTableCell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//   };

//   return (
//     <div style={styles.adminUserContainer} className="admin-user-container">
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.adminUserContent} className="admin-user-content">
//         <div style={styles.adminUserHeader} className="admin-user-header">
//           <div style={styles.adminUserTitle} className="admin-user-title">
//             Student Management
//           </div>
//         </div>

//         {/* User Table */}
//         <div
//           style={styles.adminUserTableContainer}
//           className="admin-user-table-container"
//         >
//           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//           <table style={styles.adminUserTable} className="admin-user-table">
//             <thead className="admin-user-table-header">
//               <tr>
//                 <th style={styles.adminUserTableHeaderCell}>Index</th>
//                 <th style={styles.adminUserTableHeaderCell}>Name</th>
//                 <th style={styles.adminUserTableHeaderCell}>Department</th>
//                 <th style={styles.adminUserTableHeaderCell}>Enrollment No.</th>
//                 <th style={styles.adminUserTableHeaderCell}>Semester</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((student, index) => (
//                 <tr key={index} style={styles.adminUserTableRow}>
//                   <td style={styles.adminUserTableCell}>{index + 1}</td>
//                   <td style={styles.adminUserTableCell}>{student.fname}</td>
//                   <td style={styles.adminUserTableCell}>
//                     {student.department}
//                   </td>
//                   <td style={styles.adminUserTableCell}>
//                     {student.enrollment}
//                   </td>
//                   <td style={styles.adminUserTableCell}>{student.semester}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminUsersPage;

// import React, { useState, useEffect } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { useNavigate } from "react-router-dom";

// const AdminUsersPage = () => {
//   const [students, setStudents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState(""); // Search state
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudents();
//   }, [searchTerm]); // Fetch students when search term changes

//   const fetchStudents = async () => {
//     const token = localStorage.getItem("token"); // Get token
//     if (!token) {
//       alert("Unauthorized! Redirecting to login...");
//       navigate("/admin-login"); // Redirect if token is missing
//       return;
//     }

//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/students?search=${searchTerm}`, // Include search query
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         const data = await response.json();
//         setStudents(data);
//       } else if (response.status === 401) {
//         alert("Session expired. Please login again.");
//         navigate("/admin-login");
//       } else {
//         const error = await response.json();
//         setErrorMessage(error.message || "Failed to fetch students.");
//       }
//     } catch (err) {
//       console.error("Error fetching students:", err);
//       setErrorMessage("Something went wrong.");
//     }
//   };

//   const styles = {
//     adminUserContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     adminUserContent: { flex: 1, backgroundColor: "#f8f9fa", padding: "20px" },
//     adminUserHeader: {
//       marginBottom: "20px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
//     adminUserTitle: { fontSize: "24px", fontWeight: "bold", color: "#333" },
//     searchInput: {
//       padding: "10px",
//       fontSize: "16px",
//       border: "1px solid #ccc",
//       borderRadius: "5px",
//       outline: "none",
//       width: "250px",
//     },
//     adminUserTableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     adminUserTable: { width: "100%", borderCollapse: "collapse" },
//     adminUserTableHeader: { backgroundColor: "#64DFDF", color: "white" },
//     adminUserTableHeaderCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     adminUserTableRow: { borderBottom: "1px solid #ddd" },
//     adminUserTableCell: { padding: "12px", fontSize: "14px", color: "#555" },
//   };

//   return (
//     <div style={styles.adminUserContainer} className="admin-user-container">
//       <Admin />

//       <div style={styles.adminUserContent} className="admin-user-content">
//         <div style={styles.adminUserHeader} className="admin-user-header">
//           <div style={styles.adminUserTitle} className="admin-user-title">
//             Student Management
//           </div>
//           <input
//             type="text"
//             placeholder="Search by Name or Enrollment"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={styles.searchInput}
//           />
//         </div>

//         <div
//           style={styles.adminUserTableContainer}
//           className="admin-user-table-container"
//         >
//           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
//           <table style={styles.adminUserTable} className="admin-user-table">
//             <thead className="admin-user-table-header">
//               <tr>
//                 <th style={styles.adminUserTableHeaderCell}>Index</th>
//                 <th style={styles.adminUserTableHeaderCell}>Name</th>
//                 <th style={styles.adminUserTableHeaderCell}>Department</th>
//                 <th style={styles.adminUserTableHeaderCell}>Enrollment No.</th>
//                 <th style={styles.adminUserTableHeaderCell}>Semester</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.length > 0 ? (
//                 students.map((student, index) => (
//                   <tr key={index} style={styles.adminUserTableRow}>
//                     <td style={styles.adminUserTableCell}>{index + 1}</td>
//                     <td style={styles.adminUserTableCell}>{student.fname}</td>
//                     <td style={styles.adminUserTableCell}>
//                       {student.department}
//                     </td>
//                     <td style={styles.adminUserTableCell}>
//                       {student.enrollment}
//                     </td>
//                     <td style={styles.adminUserTableCell}>
//                       {student.semester}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="5"
//                     style={{
//                       textAlign: "center",
//                       padding: "12px",
//                       color: "#777",
//                     }}
//                   >
//                     No students found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminUsersPage;

import React, { useState, useEffect } from "react";
import Admin from "../components/AdminSidebar"; // Sidebar Component
import { useNavigate } from "react-router-dom";

const AdminUsersPage = () => {
  const [students, setStudents] = useState([]);
  const [department, setDepartment] = useState(""); // Selected Department
  const [semester, setSemester] = useState(""); // Selected Semester
  const [division, setDivision] = useState(""); // Selected Division
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Fetch students when the page loads
  useEffect(() => {
    fetchStudents();
  }, []);

  // Fetch students based on selected filters
  const fetchStudents = async () => {
    const token = localStorage.getItem("token"); // Get token
    if (!token) {
      alert("Unauthorized! Redirecting to login...");
      navigate("/admin-login"); // Redirect if token is missing
      return;
    }

    try {
      const queryParams = new URLSearchParams();
      if (department) queryParams.append("department", department);
      if (semester) queryParams.append("semester", semester);
      if (division) queryParams.append("division", division);

      const response = await fetch(
        `http://localhost:5000/api/students?${queryParams.toString()}`, // Dynamic URL with filters
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setStudents(data);
      } else if (response.status === 401) {
        alert("Session expired. Please login again.");
        navigate("/admin-login");
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "Failed to fetch students.");
      }
    } catch (err) {
      console.error("Error fetching students:", err);
      setErrorMessage("Something went wrong.");
    }
  };

  const styles = {
    adminUserContainer: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif",
    },
    adminUserContent: { flex: 1, backgroundColor: "#f8f9fa", padding: "20px" },
    adminUserHeader: {
      marginBottom: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    adminUserTitle: { fontSize: "24px", fontWeight: "bold", color: "#333" },
    dropdown: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      outline: "none",
      width: "200px",
      marginRight: "10px",
    },
    searchButton: {
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    adminUserTableContainer: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    adminUserTable: { width: "100%", borderCollapse: "collapse" },
    adminUserTableHeader: { backgroundColor: "#64DFDF", color: "white" },
    adminUserTableHeaderCell: {
      padding: "12px",
      textAlign: "left",
      fontSize: "16px",
      fontWeight: "600",
    },
    adminUserTableRow: { borderBottom: "1px solid #ddd" },
    adminUserTableCell: { padding: "12px", fontSize: "14px", color: "#555" },
  };

  return (
    <div style={styles.adminUserContainer} className="admin-user-container">
      <Admin />

      <div style={styles.adminUserContent} className="admin-user-content">
        <div style={styles.adminUserHeader} className="admin-user-header">
          <div style={styles.adminUserTitle} className="admin-user-title">
            Student Management
          </div>

          {/* Dropdown Filters */}
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            style={styles.dropdown}
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
            style={styles.dropdown}
          >
            <option value="">Select Semester</option>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                Semester {i + 1}
              </option>
            ))}
          </select>

          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            style={styles.dropdown}
          >
            <option value="">Select Division</option>
            {["A", "B", "C", "D", "E", "F", "G", "H"].map((div) => (
              <option key={div} value={div}>
                {div}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button onClick={fetchStudents} style={styles.searchButton}>
            Search
          </button>
        </div>

        <div
          style={styles.adminUserTableContainer}
          className="admin-user-table-container"
        >
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <table style={styles.adminUserTable} className="admin-user-table">
            <thead className="admin-user-table-header">
              <tr>
                <th style={styles.adminUserTableHeaderCell}>Index</th>
                <th style={styles.adminUserTableHeaderCell}>Name</th>
                <th style={styles.adminUserTableHeaderCell}>Department</th>
                <th style={styles.adminUserTableHeaderCell}>Enrollment No.</th>
                <th style={styles.adminUserTableHeaderCell}>Semester</th>
                <th style={styles.adminUserTableHeaderCell}>Division</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} style={styles.adminUserTableRow}>
                    <td style={styles.adminUserTableCell}>{index + 1}</td>
                    <td style={styles.adminUserTableCell}>{student.fname}</td>
                    <td style={styles.adminUserTableCell}>
                      {student.department}
                    </td>
                    <td style={styles.adminUserTableCell}>
                      {student.enrollment}
                    </td>
                    <td style={styles.adminUserTableCell}>
                      {student.semester}
                    </td>
                    <td style={styles.adminUserTableCell}>
                      {student.division}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      textAlign: "center",
                      padding: "12px",
                      color: "#777",
                    }}
                  >
                    No students found.
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

export default AdminUsersPage;
