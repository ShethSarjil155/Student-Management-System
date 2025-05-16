// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking solved/unsolved

// const ComplaintPage = () => {
//   // Static Data for Complaints
//   const complaints = [];
//   for (let i = 1; i <= 15; i++) {
//     complaints.push({
//       id: i,
//       name: `Student ${i}`,
//       department: i % 2 === 0 ? "MBA" : "MCA", // Alternating departments for diversity
//       semester: `${(i % 4) + 1}th`, // Alternate semester numbers for variety
//       complaint: `This is a sample complaint from Student ${i}.`,
//       status: "Pending",
//     });
//   }

//   const [complaintList, setComplaintList] = useState(complaints);

//   // Toggle Complaint Status
//   const toggleComplaintStatus = (id) => {
//     setComplaintList((prevComplaints) =>
//       prevComplaints.map((complaint) =>
//         complaint.id === id
//           ? {
//               ...complaint,
//               status: complaint.status === "Pending" ? "Solved" : "Pending",
//             }
//           : complaint
//       )
//     );
//   };

//   const styles = {
//     complaintPageContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     complaintPageContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa", // Light background
//       padding: "20px",
//     },
//     complaintHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     complaintBoxContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     complaintBox: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     complaintBoxTitle: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       color: "#333",
//       marginBottom: "10px",
//     },
//     complaintBoxDetails: {
//       fontSize: "14px",
//       color: "#555",
//       marginBottom: "10px",
//     },
//     complaintBoxDescription: {
//       fontSize: "14px",
//       color: "#777",
//       marginBottom: "15px",
//     },
//     solveButton: {
//       cursor: "pointer",
//       padding: "8px 16px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       transition: "all 0.3s ease",
//     },
//     pendingButton: {
//       backgroundColor: "#FF6347", // Red for pending
//       color: "white",
//     },
//     solvedButton: {
//       backgroundColor: "#64DFDF", // Teal for solved
//       color: "white",
//     },
//   };

//   return (
//     <div style={styles.complaintPageContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.complaintPageContent}>
//         {/* Header */}
//         <div style={styles.complaintHeader}>Student Complaints</div>

//         {/* Complaint Boxes */}
//         <div style={styles.complaintBoxContainer}>
//           {complaintList.map((complaint) => (
//             <div key={complaint.id} style={styles.complaintBox}>
//               <div style={styles.complaintBoxTitle}>{complaint.name}</div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Department:</strong> Admin: {complaint.department}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Semester:</strong> {complaint.semester}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Complaint:</strong> {complaint.complaint}
//               </div>
//               <button
//                 style={{
//                   ...styles.solveButton,
//                   ...(complaint.status === "Pending"
//                     ? styles.pendingButton
//                     : styles.solvedButton),
//                 }}
//                 onClick={() => toggleComplaintStatus(complaint.id)}
//               >
//                 {complaint.status === "Pending" ? (
//                   <FaTimesCircle style={{ marginRight: "8px" }} />
//                 ) : (
//                   <FaCheckCircle style={{ marginRight: "8px" }} />
//                 )}
//                 {complaint.status}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintPage;

// import React, { useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking solved/unsolved

// const ComplaintPage = () => {
//   const complaints = [];
//   for (let i = 1; i <= 15; i++) {
//     complaints.push({
//       id: i,
//       name: `Student ${i}`,
//       department: i % 2 === 0 ? "MBA" : "MCA", // Alternating departments
//       semester: `${(i % 4) + 1}th`, // Alternating semester numbers
//       complaint: `This is a sample complaint from Student ${i}.`,
//       status: "Pending",
//     });
//   }

//   const [complaintList, setComplaintList] = useState(complaints);
//   const [currentPage, setCurrentPage] = useState(1);
//   const complaintsPerPage = 9;

//   // Toggle Complaint Status
//   const toggleComplaintStatus = (id) => {
//     setComplaintList((prevComplaints) =>
//       prevComplaints.map((complaint) =>
//         complaint.id === id
//           ? {
//               ...complaint,
//               status: complaint.status === "Pending" ? "Solved" : "Pending",
//             }
//           : complaint
//       )
//     );
//   };

//   // Pagination calculation
//   const indexOfLastComplaint = currentPage * complaintsPerPage;
//   const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
//   const currentComplaints = complaintList.slice(
//     indexOfFirstComplaint,
//     indexOfLastComplaint
//   );

//   const totalPages = Math.ceil(complaintList.length / complaintsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const styles = {
//     complaintPageContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     complaintPageContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//     },
//     complaintHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     complaintBoxContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     complaintBox: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     complaintBoxTitle: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       color: "#333",
//       marginBottom: "10px",
//     },
//     complaintBoxDetails: {
//       fontSize: "14px",
//       color: "#555",
//       marginBottom: "10px",
//     },
//     complaintBoxDescription: {
//       fontSize: "14px",
//       color: "#777",
//       marginBottom: "15px",
//     },
//     solveButton: {
//       cursor: "pointer",
//       padding: "8px 16px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       transition: "all 0.3s ease",
//     },
//     pendingButton: {
//       backgroundColor: "#FF6347", // Red for pending
//       color: "white",
//     },
//     solvedButton: {
//       backgroundColor: "#64DFDF", // Teal for solved
//       color: "white",
//     },
//     pagination: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//     pageButton: {
//       margin: "0 5px",
//       padding: "10px 15px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       cursor: "pointer",
//       backgroundColor: "#fff",
//       fontSize: "14px",
//       fontWeight: "bold",
//       transition: "background-color 0.3s ease, color 0.3s ease",
//     },
//     activePageButton: {
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "1px solid #007bff",
//     },
//     hoverButton: {
//       backgroundColor: "#e0e0e0",
//       borderColor: "#b3b3b3",
//     },
//     paginationButton: {
//       backgroundColor: "#ddd", // Style for next/previous buttons
//       fontSize: "14px",
//       borderRadius: "50%",
//       padding: "8px 12px",
//     },
//     disabledPaginationButton: {
//       backgroundColor: "#f1f1f1",
//       cursor: "not-allowed",
//     },
//   };

//   return (
//     <div style={styles.complaintPageContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.complaintPageContent}>
//         {/* Header */}
//         <div style={styles.complaintHeader}>Student Complaints</div>

//         {/* Complaint Boxes */}
//         <div style={styles.complaintBoxContainer}>
//           {currentComplaints.map((complaint) => (
//             <div key={complaint.id} style={styles.complaintBox}>
//               <div style={styles.complaintBoxTitle}>{complaint.name}</div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Department:</strong> {complaint.department}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Semester:</strong> {complaint.semester}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Complaint:</strong> {complaint.complaint}
//               </div>
//               <button
//                 style={{
//                   ...styles.solveButton,
//                   ...(complaint.status === "Pending"
//                     ? styles.pendingButton
//                     : styles.solvedButton),
//                 }}
//                 onClick={() => toggleComplaintStatus(complaint.id)}
//               >
//                 {complaint.status === "Pending" ? (
//                   <FaTimesCircle style={{ marginRight: "8px" }} />
//                 ) : (
//                   <FaCheckCircle style={{ marginRight: "8px" }} />
//                 )}
//                 {complaint.status}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div style={styles.pagination}>
//           {/* Previous Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.disabledPaginationButton : {}),
//             }}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             &lt; Prev
//           </button>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               style={{
//                 ...styles.pageButton,
//                 ...(index + 1 === currentPage && styles.activePageButton),
//               }}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           {/* Next Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages
//                 ? styles.disabledPaginationButton
//                 : {}),
//             }}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintPage;

// import React, { useEffect, useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking solved/unsolved

// const ComplaintPage = () => {
//   const [complaintList, setComplaintList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const complaintsPerPage = 9;

//   // Fetch complaints from the backend
//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("Token:", token); // Check the token
//         const response = await fetch("http://localhost:5000/api/complaints", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         console.log(data); // Log the data to check the response
//         if (response.ok) {
//           setComplaintList(data);
//           console.log("Response OK:", response.ok);
//           console.log("Response Status:", response.status);
//         } else {
//           alert("Failed to fetch complaints");
//         }
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//         alert("Something went wrong while fetching complaints.");
//       }
//     };

//     fetchComplaints();
//   }, []);

//   // Toggle Complaint Status (Admin resolving the complaint)
//   const resolveComplaint = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:5000/api/resolve/${id}`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         setComplaintList((prevComplaints) =>
//           prevComplaints.map((complaint) =>
//             complaint._id === id
//               ? { ...complaint, status: "Resolved" }
//               : complaint
//           )
//         );
//       } else {
//         alert(data.message || "Failed to resolve complaint");
//       }
//     } catch (error) {
//       console.error("Error resolving complaint:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   // Pagination logic
//   const indexOfLastComplaint = currentPage * complaintsPerPage;
//   const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
//   const currentComplaints = complaintList.slice(
//     indexOfFirstComplaint,
//     indexOfLastComplaint
//   );

//   const totalPages = Math.ceil(complaintList.length / complaintsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const styles = {
//     complaintPageContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     complaintPageContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//     },
//     complaintHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     complaintBoxContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     complaintBox: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     complaintBoxTitle: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       color: "#333",
//       marginBottom: "10px",
//     },
//     complaintBoxDetails: {
//       fontSize: "14px",
//       color: "#555",
//       marginBottom: "10px",
//     },
//     complaintBoxDescription: {
//       fontSize: "14px",
//       color: "#777",
//       marginBottom: "15px",
//     },
//     solveButton: {
//       cursor: "pointer",
//       padding: "8px 16px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       transition: "all 0.3s ease",
//     },
//     pendingButton: {
//       backgroundColor: "#FF6347", // Red for pending
//       color: "white",
//     },
//     solvedButton: {
//       backgroundColor: "#64DFDF", // Teal for solved
//       color: "white",
//     },
//     pagination: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//     pageButton: {
//       margin: "0 5px",
//       padding: "10px 15px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       cursor: "pointer",
//       backgroundColor: "#fff",
//       fontSize: "14px",
//       fontWeight: "bold",
//       transition: "background-color 0.3s ease, color 0.3s ease",
//     },
//     activePageButton: {
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "1px solid #007bff",
//     },
//     hoverButton: {
//       backgroundColor: "#e0e0e0",
//       borderColor: "#b3b3b3",
//     },
//     paginationButton: {
//       backgroundColor: "#ddd", // Style for next/previous buttons
//       fontSize: "14px",
//       borderRadius: "50%",
//       padding: "8px 12px",
//     },
//     disabledPaginationButton: {
//       backgroundColor: "#f1f1f1",
//       cursor: "not-allowed",
//     },
//   };

//   return (
//     <div style={styles.complaintPageContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.complaintPageContent}>
//         {/* Header */}
//         <div style={styles.complaintHeader}>Student Complaints</div>

//         {/* Complaint Boxes */}
//         <div style={styles.complaintBoxContainer}>
//           {currentComplaints.map((complaint) => (
//             <div key={complaint._id} style={styles.complaintBox}>
//               <div style={styles.complaintBoxTitle}>
//                 {complaint.studentId.fname}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Department:</strong> {complaint.studentId.department}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Semester:</strong> {complaint.studentId.semester}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Subject:</strong> {complaint.subject}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Complaint:</strong> {complaint.description}
//               </div>
//               <button
//                 style={{
//                   ...styles.solveButton,
//                   ...(complaint.status === "Pending"
//                     ? styles.pendingButton
//                     : styles.solvedButton),
//                 }}
//                 onClick={() => resolveComplaint(complaint._id)}
//               >
//                 {complaint.status === "Pending" ? (
//                   <FaTimesCircle style={{ marginRight: "8px" }} />
//                 ) : (
//                   <FaCheckCircle style={{ marginRight: "8px" }} />
//                 )}
//                 {complaint.status}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div style={styles.pagination}>
//           {/* Previous Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.disabledPaginationButton : {}),
//             }}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             &lt; Prev
//           </button>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               style={{
//                 ...styles.pageButton,
//                 ...(index + 1 === currentPage && styles.activePageButton),
//               }}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           {/* Next Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages
//                 ? styles.disabledPaginationButton
//                 : {}),
//             }}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintPage;

// import React, { useEffect, useState } from "react";
// import Admin from "../components/AdminSidebar"; // Sidebar Component
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking solved/unsolved

// const ComplaintPage = () => {
//   const [complaintList, setComplaintList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const complaintsPerPage = 9;

//   // Fetch complaints from the backend
//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log("Token:", token); // Check the token
//         const response = await fetch("http://localhost:5000/api/complaints", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await response.json();
//         console.log(data); // Log the data to check the response

//         if (response.ok) {
//           // Filter out resolved complaints
//           const filteredComplaints = data.filter(
//             (complaint) => complaint.status !== "Resolved"
//           );
//           setComplaintList(filteredComplaints);
//           console.log("Filtered Complaints:", filteredComplaints);
//         } else {
//           alert("Failed to fetch complaints");
//         }
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//         alert("Something went wrong while fetching complaints.");
//       }
//     };

//     fetchComplaints();
//   }, []);

//   // Toggle Complaint Status (Admin resolving the complaint)
//   const resolveComplaint = async (id) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`http://localhost:5000/api/resolve/${id}`, {
//         method: "PATCH",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         // Remove the resolved complaint from the list
//         setComplaintList((prevComplaints) =>
//           prevComplaints.filter((complaint) => complaint._id !== id)
//         );
//       } else {
//         alert(data.message || "Failed to resolve complaint");
//       }
//     } catch (error) {
//       console.error("Error resolving complaint:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   // Pagination logic
//   const indexOfLastComplaint = currentPage * complaintsPerPage;
//   const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
//   const currentComplaints = complaintList.slice(
//     indexOfFirstComplaint,
//     indexOfLastComplaint
//   );

//   const totalPages = Math.ceil(complaintList.length / complaintsPerPage);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const styles = {
//     complaintPageContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Poppins', sans-serif",
//     },
//     complaintPageContent: {
//       flex: 1,
//       backgroundColor: "#f8f9fa",
//       padding: "20px",
//     },
//     complaintHeader: {
//       marginBottom: "20px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       color: "#333",
//     },
//     complaintBoxContainer: {
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//       gap: "20px",
//     },
//     complaintBox: {
//       backgroundColor: "white",
//       borderRadius: "10px",
//       padding: "20px",
//       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     },
//     complaintBoxTitle: {
//       fontSize: "18px",
//       fontWeight: "bold",
//       color: "#333",
//       marginBottom: "10px",
//     },
//     complaintBoxDetails: {
//       fontSize: "14px",
//       color: "#555",
//       marginBottom: "10px",
//     },
//     complaintBoxDescription: {
//       fontSize: "14px",
//       color: "#777",
//       marginBottom: "15px",
//     },
//     solveButton: {
//       cursor: "pointer",
//       padding: "8px 16px",
//       borderRadius: "6px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       border: "none",
//       transition: "all 0.3s ease",
//     },
//     pendingButton: {
//       backgroundColor: "#FF6347", // Red for pending
//       color: "white",
//     },
//     solvedButton: {
//       backgroundColor: "#64DFDF", // Teal for solved
//       color: "white",
//     },
//     pagination: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//     pageButton: {
//       margin: "0 5px",
//       padding: "10px 15px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       cursor: "pointer",
//       backgroundColor: "#fff",
//       fontSize: "14px",
//       fontWeight: "bold",
//       transition: "background-color 0.3s ease, color 0.3s ease",
//     },
//     activePageButton: {
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "1px solid #007bff",
//     },
//     hoverButton: {
//       backgroundColor: "#e0e0e0",
//       borderColor: "#b3b3b3",
//     },
//     paginationButton: {
//       backgroundColor: "#ddd", // Style for next/previous buttons
//       fontSize: "14px",
//       borderRadius: "50%",
//       padding: "8px 12px",
//     },
//     disabledPaginationButton: {
//       backgroundColor: "#f1f1f1",
//       cursor: "not-allowed",
//     },
//   };

//   return (
//     <div style={styles.complaintPageContainer}>
//       {/* Sidebar */}
//       <Admin />

//       {/* Main Content */}
//       <div style={styles.complaintPageContent}>
//         {/* Header */}
//         <div style={styles.complaintHeader}>Student Complaints</div>

//         {/* Complaint Boxes */}
//         <div style={styles.complaintBoxContainer}>
//           {currentComplaints.map((complaint) => (
//             <div key={complaint._id} style={styles.complaintBox}>
//               <div style={styles.complaintBoxTitle}>
//                 {complaint.studentId.fname}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Department:</strong> {complaint.studentId.department}
//               </div>
//               <div style={styles.complaintBoxDetails}>
//                 <strong>Semester:</strong> {complaint.studentId.semester}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Subject:</strong> {complaint.subject}
//               </div>
//               <div style={styles.complaintBoxDescription}>
//                 <strong>Complaint:</strong> {complaint.description}
//               </div>
//               <button
//                 style={{
//                   ...styles.solveButton,
//                   ...(complaint.status === "Pending"
//                     ? styles.pendingButton
//                     : styles.solvedButton),
//                 }}
//                 onClick={() => resolveComplaint(complaint._id)}
//               >
//                 {complaint.status === "Pending" ? (
//                   <FaTimesCircle style={{ marginRight: "8px" }} />
//                 ) : (
//                   <FaCheckCircle style={{ marginRight: "8px" }} />
//                 )}
//                 {complaint.status}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div style={styles.pagination}>
//           {/* Previous Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === 1 ? styles.disabledPaginationButton : {}),
//             }}
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             &lt; Prev
//           </button>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               style={{
//                 ...styles.pageButton,
//                 ...(index + 1 === currentPage && styles.activePageButton),
//               }}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}

//           {/* Next Button */}
//           <button
//             style={{
//               ...styles.paginationButton,
//               ...(currentPage === totalPages
//                 ? styles.disabledPaginationButton
//                 : {}),
//             }}
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next &gt;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintPage;

import React, { useEffect, useState } from "react";
import Admin from "../components/AdminSidebar";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ComplaintPage = () => {
  const [complaintList, setComplaintList] = useState([]);
  const [filter, setFilter] = useState("Pending"); // Default filter
  const [currentPage, setCurrentPage] = useState(1);
  const complaintsPerPage = 9;

  // Fetch complaints based on filter
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `http://localhost:5000/api/complaints?status=${filter}`, // Send filter to backend
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setComplaintList(data);
        } else {
          alert("Failed to fetch complaints");
        }
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, [filter]); // Re-fetch when filter changes

  // Toggle Complaint Status
  const resolveComplaint = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/resolve/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setComplaintList((prev) => prev.filter((c) => c._id !== id)); // Remove resolved complaint
      } else {
        alert(data.message || "Failed to resolve complaint");
      }
    } catch (error) {
      console.error("Error resolving complaint:", error);
    }
  };

  // Pagination logic
  const indexOfLastComplaint = currentPage * complaintsPerPage;
  const indexOfFirstComplaint = indexOfLastComplaint - complaintsPerPage;
  const currentComplaints = complaintList.slice(
    indexOfFirstComplaint,
    indexOfLastComplaint
  );
  const totalPages = Math.ceil(complaintList.length / complaintsPerPage);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Poppins" }}>
      <Admin />
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#f8f9fa" }}>
        <div
          style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}
        >
          Student Complaints
        </div>

        {/* Filter Dropdown */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
        >
          <option value="All">All Complaints</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {currentComplaints.map((complaint) => (
            <div
              key={complaint._id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                {complaint.studentId.fname}
              </div>
              <div>
                <strong>Department:</strong> {complaint.studentId.department}
              </div>
              <div>
                <strong>Semester:</strong> {complaint.studentId.semester}
              </div>
              <div>
                <strong>Subject:</strong> {complaint.subject}
              </div>
              <div>
                <strong>Complaint:</strong> {complaint.description}
              </div>
              <button
                style={{
                  marginTop: "10px",
                  padding: "8px",
                  borderRadius: "5px",
                  backgroundColor:
                    complaint.status === "Pending" ? "#FF6347" : "#64DFDF",
                  color: "white",
                  fontSize: "14px",
                }}
                onClick={() => resolveComplaint(complaint._id)}
              >
                {complaint.status === "Pending" ? (
                  <FaTimesCircle />
                ) : (
                  <FaCheckCircle />
                )}{" "}
                {complaint.status}
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            style={{ margin: "0 5px", padding: "8px", borderRadius: "5px" }}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                margin: "0 5px",
                padding: "8px",
                borderRadius: "5px",
                background: currentPage === index + 1 ? "#007bff" : "#fff",
                color: currentPage === index + 1 ? "#fff" : "#000",
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            style={{ margin: "0 5px", padding: "8px", borderRadius: "5px" }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
