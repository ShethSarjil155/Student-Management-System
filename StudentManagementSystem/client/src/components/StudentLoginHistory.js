// import React from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const LoginHistoryPage = () => {
//   const styles = {
//     container: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     content: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background for the right section
//       padding: "20px",
//     },
//     header: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     tableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     tableHeader: {
//       backgroundColor: "#64DFDF", // Teal header for the table
//       color: "white",
//     },
//     headerCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     row: {
//       borderBottom: "1px solid #ddd",
//     },
//     cell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     rowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//   };

//   // Static Data for Login History
//   const loginHistory = [
//     {
//       name: "John Doe",
//       department: "MBA",
//       enrollment: "MBA2023001",
//       loginTime: "2025-01-15 08:00 AM",
//       logoutTime: "2025-01-15 04:00 PM",
//     },
//     {
//       name: "Jane Smith",
//       department: "MCA",
//       enrollment: "MCA2023002",
//       loginTime: "2025-01-15 09:00 AM",
//       logoutTime: "2025-01-15 05:30 PM",
//     },
//     {
//       name: "Robert Brown",
//       department: "IMCA",
//       enrollment: "IMCA2023003",
//       loginTime: "2025-01-15 07:45 AM",
//       logoutTime: "2025-01-15 03:30 PM",
//     },
//     {
//       name: "Emily Davis",
//       department: "BSCIT",
//       enrollment: "BSCIT2023004",
//       loginTime: "2025-01-15 10:15 AM",
//       logoutTime: "2025-01-15 06:15 PM",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.content}>
//         <div style={styles.header}>Login History</div>

//         {/* Table */}
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead style={styles.tableHeader}>
//               <tr>
//                 <th style={styles.headerCell}>Name</th>
//                 <th style={styles.headerCell}>Department</th>
//                 <th style={styles.headerCell}>Enrollment</th>
//                 <th style={styles.headerCell}>Login Time</th>
//                 <th style={styles.headerCell}>Logout Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loginHistory.map((record, index) => (
//                 <tr
//                   key={index}
//                   style={styles.row}
//                   onMouseEnter={(e) =>
//                     (e.target.parentNode.style.backgroundColor =
//                       styles.rowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.parentNode.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.cell}>{record.name}</td>
//                   <td style={styles.cell}>{record.department}</td>
//                   <td style={styles.cell}>{record.enrollment}</td>
//                   <td style={styles.cell}>{record.loginTime}</td>
//                   <td style={styles.cell}>{record.logoutTime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginHistoryPage;

// import React, { useEffect, useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const LoginHistoryPage = () => {
//   const [loginHistory, setLoginHistory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const styles = {
//     container: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     content: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background for the right section
//       padding: "20px",
//     },
//     header: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     tableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     tableHeader: {
//       backgroundColor: "#64DFDF", // Teal header for the table
//       color: "white",
//     },
//     headerCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     row: {
//       borderBottom: "1px solid #ddd",
//     },
//     cell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     rowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//     errorMessage: {
//       color: "red",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//   };

//   // Fetch login history data
//   useEffect(() => {
//     const fetchLoginHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(
//           "http://localhost:5000/api/student-history",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch login history.");
//         }

//         const data = await response.json();
//         setLoginHistory(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLoginHistory();
//   }, []);

//   if (loading) {
//     return <div style={styles.content}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div style={styles.content}>
//         <span style={styles.errorMessage}>{error}</span>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.content}>
//         <div style={styles.header}>Login History</div>

//         {/* Table */}
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead style={styles.tableHeader}>
//               <tr>
//                 <th style={styles.headerCell}>Name</th>
//                 <th style={styles.headerCell}>Department</th>
//                 <th style={styles.headerCell}>Enrollment</th>
//                 <th style={styles.headerCell}>Login Time</th>
//                 <th style={styles.headerCell}>Logout Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loginHistory.map((record, index) => (
//                 <tr
//                   key={index}
//                   style={styles.row}
//                   onMouseEnter={(e) =>
//                     (e.target.parentNode.style.backgroundColor =
//                       styles.rowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.parentNode.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.cell}>{record.fname}</td>
//                   <td style={styles.cell}>{record.department}</td>
//                   <td style={styles.cell}>{record.userName}</td>
//                   <td style={styles.cell}>
//                     {new Date(record.loginTime).toLocaleString()}
//                   </td>
//                   <td style={styles.cell}>
//                     {record.logoutTime
//                       ? new Date(record.logoutTime).toLocaleString()
//                       : "N/A"}
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

// export default LoginHistoryPage;

// import React, { useEffect, useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const LoginHistoryPage = () => {
//   const [taskHistory, setTaskHistory] = useState([]); // Rename to taskHistory to reflect new data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const styles = {
//     container: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     content: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background for the right section
//       padding: "20px",
//     },
//     header: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     tableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     tableHeader: {
//       backgroundColor: "#64DFDF", // Teal header for the table
//       color: "white",
//     },
//     headerCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     row: {
//       borderBottom: "1px solid #ddd",
//     },
//     cell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     rowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//     errorMessage: {
//       color: "red",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//   };

//   // Fetch task history data
//   useEffect(() => {
//     const fetchTaskHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(
//           "http://localhost:5000/api/student-history", // Update endpoint if needed
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch task history.");
//         }

//         const data = await response.json();
//         setTaskHistory(data); // Save data in taskHistory
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTaskHistory();
//   }, []);

//   if (loading) {
//     return <div style={styles.content}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div style={styles.content}>
//         <span style={styles.errorMessage}>{error}</span>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.content}>
//         <div style={styles.header}>Task History</div>

//         {/* Table */}
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead style={styles.tableHeader}>
//               <tr>
//                 <th style={styles.headerCell}>Name</th>
//                 <th style={styles.headerCell}>Enrollment</th>
//                 <th style={styles.headerCell}>Department</th>
//                 <th style={styles.headerCell}>Username</th>
//                 <th style={styles.headerCell}>Semester</th>
//                 <th style={styles.headerCell}>Task</th>
//                 <th style={styles.headerCell}>Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {taskHistory.map((record, index) => (
//                 <tr
//                   key={index}
//                   style={styles.row}
//                   onMouseEnter={(e) =>
//                     (e.target.parentNode.style.backgroundColor =
//                       styles.rowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.parentNode.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.cell}>{record.fname}</td> {/* Full Name */}
//                   <td style={styles.cell}>{record.userName}</td>{" "}
//                   {/* Enrollment Number */}
//                   <td style={styles.cell}>{record.department}</td>{" "}
//                   {/* Department */}
//                   <td style={styles.cell}>{record.userName}</td>{" "}
//                   {/* Username */}
//                   <td style={styles.cell}>{record.semester}</td>{" "}
//                   {/* Semester */}
//                   <td style={styles.cell}>{record.task}</td>{" "}
//                   {/* Task (Login/Logout) */}
//                   <td style={styles.cell}>
//                     {new Date(record.loginTime).toLocaleString()}{" "}
//                     {/* Task Time */}
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

// export default LoginHistoryPage;

// import React, { useEffect, useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component

// const LoginHistoryPage = () => {
//   const [taskHistory, setTaskHistory] = useState([]); // Store all task history
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // Track current page
//   const itemsPerPage = 13; // Number of records per page

//   const styles = {
//     container: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     content: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background for the right section
//       padding: "20px",
//     },
//     header: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     tableContainer: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },
//     tableHeader: {
//       backgroundColor: "#64DFDF", // Teal header for the table
//       color: "white",
//     },
//     headerCell: {
//       padding: "12px",
//       textAlign: "left",
//       fontSize: "16px",
//       fontWeight: "600",
//     },
//     row: {
//       borderBottom: "1px solid #ddd",
//     },
//     cell: {
//       padding: "12px",
//       fontSize: "14px",
//       color: "#555",
//     },
//     rowHover: {
//       backgroundColor: "#f1f1f1",
//     },
//     errorMessage: {
//       color: "red",
//       fontSize: "16px",
//       fontWeight: "bold",
//     },
//     pagination: {
//       marginTop: "20px",
//       textAlign: "center",
//     },
//     pageButton: {
//       padding: "8px 16px",
//       margin: "0 5px",
//       backgroundColor: "#64DFDF",
//       border: "none",
//       borderRadius: "5px",
//       color: "white",
//       cursor: "pointer",
//       fontWeight: "600",
//     },
//     disabledButton: {
//       backgroundColor: "#ddd",
//       cursor: "not-allowed",
//     },
//   };

//   // Fetch task history data
//   useEffect(() => {
//     const fetchTaskHistory = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await fetch(
//           "http://localhost:5000/api/student-history", // Update endpoint if needed
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch task history.");
//         }

//         const data = await response.json();
//         setTaskHistory(data); // Save data in taskHistory
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTaskHistory();
//   }, []);

//   // Paginate the task history
//   const indexOfLastRecord = currentPage * itemsPerPage;
//   const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
//   const currentRecords = taskHistory.slice(
//     indexOfFirstRecord,
//     indexOfLastRecord
//   );

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Total pages calculation
//   const totalPages = Math.ceil(taskHistory.length / itemsPerPage);

//   if (loading) {
//     return <div style={styles.content}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div style={styles.content}>
//         <span style={styles.errorMessage}>{error}</span>
//       </div>
//     );
//   }

//   return (
//     <div style={styles.container}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.content}>
//         <div style={styles.header}>Task History</div>

//         {/* Table */}
//         <div style={styles.tableContainer}>
//           <table style={styles.table}>
//             <thead style={styles.tableHeader}>
//               <tr>
//                 <th style={styles.headerCell}>Name</th>
//                 <th style={styles.headerCell}>Enrollment</th>
//                 <th style={styles.headerCell}>Department</th>

//                 <th style={styles.headerCell}>Semester</th>
//                 <th style={styles.headerCell}>Task</th>
//                 <th style={styles.headerCell}>Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRecords.map((record, index) => (
//                 <tr
//                   key={index}
//                   style={styles.row}
//                   onMouseEnter={(e) =>
//                     (e.target.parentNode.style.backgroundColor =
//                       styles.rowHover.backgroundColor)
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.parentNode.style.backgroundColor = "transparent")
//                   }
//                 >
//                   <td style={styles.cell}>{record.fname}</td> {/* Full Name */}
//                   <td style={styles.cell}>{record.userName}</td>{" "}
//                   {/* Enrollment Number */}
//                   <td style={styles.cell}>{record.department}</td>{" "}
//                   {/* Department */}
//                   {/* Username */}
//                   <td style={styles.cell}>{record.semester}</td>{" "}
//                   {/* Semester */}
//                   <td style={styles.cell}>{record.task}</td>{" "}
//                   {/* Task (Login/Logout) */}
//                   <td style={styles.cell}>
//                     {new Date(record.loginTime).toLocaleString()}{" "}
//                     {/* Task Time */}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination Controls */}
//         <div style={styles.pagination}>
//           <button
//             style={{
//               ...styles.pageButton,
//               ...(currentPage === 1 ? styles.disabledButton : {}),
//             }}
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             Previous
//           </button>
//           <span>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             style={{
//               ...styles.pageButton,
//               ...(currentPage === totalPages ? styles.disabledButton : {}),
//             }}
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginHistoryPage;

import React, { useEffect, useState } from "react";
import Admin from "../components/AdminSidebar";

const LoginHistoryPage = () => {
  const [taskHistory, setTaskHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); // Search state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchTaskHistory();
  }, [search]);

  // ✅ Fetch history with search query
  const fetchTaskHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/student-history/?search=${search}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch task history");

      const data = await response.json();
      setTaskHistory(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle delete action with confirmation
  const handleDeleteHistory = async () => {
    if (!window.confirm("Are you sure you want to delete all login history?"))
      return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/loginhistorydelete",
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) throw new Error("Failed to delete login history");

      alert("All login history deleted successfully!");
      fetchTaskHistory();
    } catch (error) {
      alert("Error deleting history: " + error.message);
    }
  };

  // ✅ Pagination logic
  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const currentRecords = taskHistory.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(taskHistory.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Admin />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h2>Task History</h2>

        {/* ✅ Search Input */}
        <input
          type="text"
          placeholder="Search by Name or Enrollment..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        {/* ✅ Delete Button */}
        <button
          onClick={handleDeleteHistory}
          style={{
            padding: "10px 15px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Delete All History
        </button>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead style={{ backgroundColor: "#64DFDF", color: "white" }}>
              <tr>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>Enrollment</th>
                <th style={{ padding: "12px" }}>Department</th>
                <th style={{ padding: "12px" }}>Semester</th>
                <th style={{ padding: "12px" }}>Task</th>
                <th style={{ padding: "12px" }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((record, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "12px" }}>{record.fname}</td>
                  <td style={{ padding: "12px" }}>{record.userName}</td>
                  <td style={{ padding: "12px" }}>{record.department}</td>
                  <td style={{ padding: "12px" }}>{record.semester}</td>
                  <td style={{ padding: "12px" }}>{record.task}</td>
                  <td style={{ padding: "12px" }}>
                    {new Date(record.loginTime).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ✅ Pagination */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span>
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginHistoryPage;
