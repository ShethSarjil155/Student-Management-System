// import React, { useState } from "react";
// import Sidebar from "./SideBarUser"; // Your existing Sidebar component
// import "./results.css";

// const ResultsPage = () => {
//   // Static Data for Results
//   const [results] = useState([
//     { subject: "Mathematics", marks: 85, maxMarks: 100, grade: "A" },
//     { subject: "Physics", marks: 78, maxMarks: 100, grade: "B+" },
//     { subject: "Chemistry", marks: 90, maxMarks: 100, grade: "A+" },
//     { subject: "Biology", marks: 88, maxMarks: 100, grade: "A" },
//     { subject: "English", marks: 92, maxMarks: 100, grade: "A+" },
//   ]);

//   return (
//     <div className="results-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="results-content">
//         <h2 className="results-title">Results</h2>

//         {/* Search Section */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//           />
//           <button className="search-button-result">Enter</button>
//         </div>

//         {/* Results Table */}
//         <div className="results-table-container">
//           <table className="results-table">
//             <thead>
//               <tr>
//                 <th>Subject</th>
//                 <th>Marks Obtained</th>
//                 <th>Maximum Marks</th>
//                 <th>Grade</th>
//               </tr>
//             </thead>
//             <tbody>
//               {results.map((result, index) => (
//                 <tr key={index}>
//                   <td>{result.subject}</td>
//                   <td>{result.marks}</td>
//                   <td>{result.maxMarks}</td>
//                   <td>{result.grade}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

// import React, { useState } from "react";
// import Sidebar from "./SideBarUser"; // Your existing Sidebar component
// import { Line } from "react-chartjs-2"; // Import Line chart from react-chartjs-2
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./results.css";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ResultsPage = () => {
//   // Static Data for Results
//   const [results] = useState([
//     { subject: "Mathematics", marks: 85, maxMarks: 100, grade: "A" },
//     { subject: "Physics", marks: 78, maxMarks: 100, grade: "B+" },
//     { subject: "Chemistry", marks: 90, maxMarks: 100, grade: "A+" },
//     { subject: "Biology", marks: 88, maxMarks: 100, grade: "A" },
//     { subject: "English", marks: 92, maxMarks: 100, grade: "A+" },
//   ]);

//   // Prepare data for the graph
//   const chartData = {
//     labels: results.map((result) => result.subject), // Subjects
//     datasets: [
//       {
//         label: "Marks Obtained",
//         data: results.map((result) => result.marks), // Marks
//         borderColor: "#007bff", // Line color
//         backgroundColor: "rgba(0, 123, 255, 0.2)", // Fill color
//         tension: 0.4, // Curve of the line
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#ffffff", // Legend color for dark theme
//         },
//       },
//       title: {
//         display: true,
//         text: "Student Performance",
//         color: "#ffffff", // Title color for dark theme
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#ffffff", // X-axis labels color for dark theme
//         },
//       },
//       y: {
//         ticks: {
//           color: "#ffffff", // Y-axis labels color for dark theme
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="results-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="results-content">
//         <h2 className="results-title">Results</h2>

//         {/* Search Section */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//           />
//           <button className="search-button-result">Enter</button>
//         </div>

//         {/* Results Table */}
//         <div className="results-table-container">
//           <table className="results-table">
//             <thead>
//               <tr>
//                 <th>Subject</th>
//                 <th>Marks Obtained</th>
//                 <th>Maximum Marks</th>
//                 <th>Grade</th>
//               </tr>
//             </thead>
//             <tbody>
//               {results.map((result, index) => (
//                 <tr key={index}>
//                   <td>{result.subject}</td>
//                   <td>{result.marks}</td>
//                   <td>{result.maxMarks}</td>
//                   <td>{result.grade}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Graph Section */}
//         <div className="graph-container">
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

// import React, { useState, useEffect } from "react";
// import Sidebar from "./SideBarUser"; // Your Sidebar component
// import { Line } from "react-chartjs-2"; // Chart.js for graph
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./results.css";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ResultsPage = () => {
//   const [enrollment, setEnrollment] = useState(""); // Enrollment input
//   const [results, setResults] = useState([]); // Store fetched results
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [studentInfo, setStudentInfo] = useState(null); // Store student details

//   useEffect(() => {
//     // Fetch student details using JWT token
//     const fetchStudentDetails = async () => {
//       const token = localStorage.getItem("token"); // Get token from local storage
//       if (!token) {
//         setError("No authentication token found.");
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:5000/api/students", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setStudentInfo(data);
//         } else {
//           setError(data.message || "Failed to fetch student details.");
//         }
//       } catch (err) {
//         console.error("Error fetching student details:", err);
//         setError("Error fetching student details.");
//       }
//     };

//     fetchStudentDetails();
//   }, []);

//   // Handle search functionality
//   const handleSearch = async () => {
//     if (!enrollment) {
//       setError("Please enter your enrollment number.");
//       return;
//     }

//     if (!studentInfo) {
//       setError("Student information not available.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `http://localhost:5000/api/results?enrollment=${enrollment}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the JWT token
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         if (data.length === 0) {
//           setError("No results found for this enrollment number.");
//         } else {
//           setResults(data);
//         }
//       } else {
//         setError(data.message || "Error fetching results.");
//       }
//     } catch (error) {
//       console.error("Error fetching results:", error);
//       setError("Error fetching results.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Prepare data for the graph
//   const chartData = {
//     labels: results.map((result) => result.subject), // Subjects
//     datasets: [
//       {
//         label: "Marks Obtained",
//         data: results.map((result) => result.marks), // Marks
//         borderColor: "#007bff",
//         backgroundColor: "rgba(0, 123, 255, 0.2)",
//         tension: 0.4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: "top", labels: { color: "#ffffff" } },
//       title: { display: true, text: "Student Performance", color: "#ffffff" },
//     },
//     scales: {
//       x: { ticks: { color: "#ffffff" } },
//       y: { ticks: { color: "#ffffff" }, beginAtZero: true },
//     },
//   };

//   return (
//     <div className="results-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="results-content">
//         <h2 className="results-title">Results</h2>

//         {/* Search Section */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//             value={enrollment}
//             onChange={(e) => setEnrollment(e.target.value)}
//           />
//           <button
//             className="search-button-result"
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Enter"}
//           </button>
//         </div>

//         {/* Error Message */}
//         {error && <p className="error-message">{error}</p>}

//         {/* Results Table */}
//         {results.length > 0 && (
//           <div className="results-table-container">
//             <table className="results-table">
//               <thead>
//                 <tr>
//                   <th>Subject</th>
//                   <th>Marks Obtained</th>
//                   <th>Maximum Marks</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((result, index) => (
//                   <tr key={index}>
//                     <td>{result.subject}</td>
//                     <td>{result.marks}</td>
//                     <td>100</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Graph Section */}
//         {results.length > 0 && (
//           <div className="graph-container">
//             <Line data={chartData} options={chartOptions} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

// -----------working-----------------------------------
// import React, { useState } from "react";

// const ResultsPage = () => {
//   const [enrollment, setEnrollment] = useState("");
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!enrollment) {
//       setError("Please enter your enrollment number.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `http://localhost:5000/api/results?enrollment=${enrollment}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         if (data.length === 0) {
//           setError("No results found for this enrollment number.");
//         } else {
//           setResults(data);
//         }
//       } else {
//         setError(data.message || "Error fetching results.");
//       }
//     } catch (error) {
//       console.error("Error fetching results:", error);
//       setError("Error fetching results.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Check Your Results</h2>
//       <input
//         type="text"
//         placeholder="Enter Enrollment Number"
//         value={enrollment}
//         onChange={(e) => setEnrollment(e.target.value)}
//       />
//       <button onClick={handleSearch} disabled={loading}>
//         {loading ? "Loading..." : "Search"}
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {results.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Subject</th>
//               <th>Marks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {results.map((result, index) => (
//               <tr key={index}>
//                 <td>{result.subject}</td>
//                 <td>{result.marks}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ResultsPage;
// ------------------------------------------------------

// import React, { useState } from "react";
// import Sidebar from "./SideBarUser"; // Import Sidebar Component
// import { Line } from "react-chartjs-2"; // Import Chart
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./results.css"; // Import custom styles

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ResultsPage = () => {
//   const [enrollment, setEnrollment] = useState("");
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSearch = async () => {
//     if (!enrollment) {
//       setError("Please enter your enrollment number.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `http://localhost:5000/api/results?enrollment=${enrollment}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         if (data.length === 0) {
//           setError("No results found for this enrollment number.");
//           setResults([]);
//         } else {
//           setResults(data);
//         }
//       } else {
//         setError(data.message || "Error fetching results.");
//         setResults([]);
//       }
//     } catch (error) {
//       console.error("Error fetching results:", error);
//       setError("Error fetching results.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Prepare data for the graph
//   const chartData = {
//     labels: results.map((result) => result.subject), // Subjects
//     datasets: [
//       {
//         label: "Marks Obtained",
//         data: results.map((result) => result.marks), // Marks
//         borderColor: "#007bff", // Line color
//         backgroundColor: "rgba(0, 123, 255, 0.2)", // Fill color
//         tension: 0.4, // Smooth curve
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#ffffff", // Legend color for dark theme
//         },
//       },
//       title: {
//         display: true,
//         text: "Student Performance",
//         color: "#ffffff", // Title color for dark theme
//       },
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: "#ffffff", // X-axis labels color for dark theme
//         },
//       },
//       y: {
//         ticks: {
//           color: "#ffffff", // Y-axis labels color for dark theme
//         },
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="results-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="results-content">
//         <h2 className="results-title">Check Your Results</h2>

//         {/* Search Section */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//             value={enrollment}
//             onChange={(e) => setEnrollment(e.target.value)}
//           />
//           <button
//             className="search-button-result"
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </div>

//         {/* Display Error Message */}
//         {error && <p className="error-message">{error}</p>}

//         {/* Results Table */}
//         {results.length > 0 && (
//           <div className="results-table-container">
//             <table className="results-table">
//               <thead>
//                 <tr>
//                   <th>Subject</th>
//                   <th>Marks Obtained</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {results.map((result, index) => (
//                   <tr key={index}>
//                     <td>{result.subject}</td>
//                     <td>{result.marks}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* Graph Section */}
//         {results.length > 0 && (
//           <div className="graph-container">
//             <Line data={chartData} options={chartOptions} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

// import React, { useState, useEffect } from "react";
// import Sidebar from "./SideBarUser"; // Sidebar Component
// import { Line } from "react-chartjs-2"; // Chart Library
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable"; // PDF Table Support
// import "./results.css"; // Styles

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ResultsPage = () => {
//   const [enrollment, setEnrollment] = useState("");
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [loggedEnrollment, setLoggedEnrollment] = useState("");

//   // Fetch logged-in student enrollment from token
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetch("http://localhost:5000/api/validuser", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setLoggedEnrollment(data.validUser.enrollment); // Fetch enrollment
//           } else {
//             console.error("Error fetching user:", data.message);
//           }
//         })
//         .catch((err) => console.error("Error fetching user:", err));
//     }
//   }, []);

//   const handleSearch = async () => {
//     if (!enrollment) {
//       setError("Please enter your enrollment number.");
//       return;
//     }

//     if (enrollment !== loggedEnrollment) {
//       setError("You can only view your own results.");
//       setResults([]);
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:5000/api/results?enrollment=${enrollment}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         if (data.length === 0) {
//           setError("No results found for this enrollment number.");
//           setResults([]);
//         } else {
//           setResults(data);
//         }
//       } else {
//         setError(data.message || "Error fetching results.");
//         setResults([]);
//       }
//     } catch (error) {
//       console.error("Error fetching results:", error);
//       setError("Error fetching results.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Prepare data for the graph
//   const chartData = {
//     labels: results.map((result) => result.subject),
//     datasets: [
//       {
//         label: "Marks Obtained",
//         data: results.map((result) => result.marks),
//         borderColor: "#007bff",
//         backgroundColor: "rgba(0, 123, 255, 0.2)",
//         tension: 0.4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false, // Allow resizing
//     plugins: {
//       legend: { position: "top", labels: { color: "#ffffff" } },
//       title: { display: true, text: "Student Performance", color: "#ffffff" },
//     },
//     scales: {
//       x: { ticks: { color: "#ffffff" } },
//       y: { ticks: { color: "#ffffff" }, beginAtZero: true },
//     },
//   };

//   // Download results as PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Results for Enrollment: ${enrollment}`, 20, 10);

//     const tableColumn = ["Subject", "Marks Obtained"];
//     const tableRows = results.map((result) => [result.subject, result.marks]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//     });

//     doc.save(`Results_${enrollment}.pdf`);
//   };

//   return (
//     <div className="results-page">
//       <Sidebar />

//       <div className="results-content">
//         <h2 className="results-title">Check Your Results</h2>

//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//             value={enrollment}
//             onChange={(e) => setEnrollment(e.target.value)}
//           />
//           <button
//             className="search-button-result"
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </div>

//         {error && <p className="error-message">{error}</p>}

//         {results.length > 0 && (
//           <>
//             <div className="results-table-container">
//               <table className="results-table">
//                 <thead>
//                   <tr>
//                     <th>Subject</th>
//                     <th>Marks Obtained</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {results.map((result, index) => (
//                     <tr key={index}>
//                       <td>{result.subject}</td>
//                       <td>{result.marks}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Graph Container */}
//             <div
//               className="graph-container"
//               style={{ height: "300px", width: "600px" }}
//             >
//               <Line data={chartData} options={chartOptions} />
//             </div>

//             {/* Download Button */}
//             <button className="download-button" onClick={handleDownloadPDF}>
//               Download PDF
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

//previous---------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import Sidebar from "./SideBarUser";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable";
// import "./results.css";

// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ResultsPage = () => {
//   const [enrollment, setEnrollment] = useState("");
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [loggedEnrollment, setLoggedEnrollment] = useState("");

//   // Fetch logged-in student enrollment from token
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetch("http://localhost:5000/api/validuser", {
//         method: "GET",
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.status === 200) {
//             setLoggedEnrollment(data.validUser.enrollment);
//           } else {
//             console.error("Error fetching user:", data.message);
//           }
//         })
//         .catch((err) => console.error("Error fetching user:", err));
//     }
//   }, []);

//   const handleSearch = async () => {
//     if (!enrollment) {
//       setError("Please enter your enrollment number.");
//       return;
//     }

//     if (enrollment !== loggedEnrollment) {
//       setError("You can only view your own results.");
//       setResults([]);
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(
//         `http://localhost:5000/api/results?enrollment=${enrollment}`,
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         if (data.length === 0) {
//           setError("No results found for this enrollment number.");
//           setResults([]);
//         } else {
//           setResults(data);
//         }
//       } else {
//         setError(data.message || "Error fetching results.");
//         setResults([]);
//       }
//     } catch (error) {
//       console.error("Error fetching results:", error);
//       setError("Error fetching results.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate percentage
//   const totalMarks = results.reduce((acc, result) => acc + result.marks, 0);
//   const percentage =
//     results.length > 0
//       ? ((totalMarks / (results.length * 100)) * 100).toFixed(2)
//       : 0;

//   // Prepare data for the graph
//   const chartData = {
//     labels: results.map((result) => result.subject),
//     datasets: [
//       {
//         label: "Marks Obtained",
//         data: results.map((result) => result.marks),
//         borderColor: "#007bff",
//         backgroundColor: "rgba(0, 123, 255, 0.2)",
//         tension: 0.4,
//         pointBackgroundColor: "#007bff",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top", labels: { color: "#ffffff" } },
//       title: { display: true, text: "Student Performance", color: "#ffffff" },
//     },
//     scales: {
//       x: { ticks: { color: "#ffffff" } },
//       y: { ticks: { color: "#ffffff" }, beginAtZero: true },
//     },
//   };

//   // Download results as PDF
//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text(`Results for Enrollment: ${enrollment}`, 20, 10);

//     const tableColumn = ["Subject", "Marks Obtained", "Percentage"];
//     const tableRows = results.map((result) => [
//       result.subject,
//       result.marks,
//       ((result.marks / 100) * 100).toFixed(2) + " %",
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 20,
//     });

//     doc.text(
//       `Total Percentage: ${percentage} %`,
//       20,
//       doc.autoTable.previous.finalY + 10
//     );

//     doc.save(`Results_${enrollment}.pdf`);
//   };

//   return (
//     <div className="results-page">
//       <Sidebar />

//       <div className="results-content">
//         <h2 className="results-title">Check Your Results</h2>

//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Enter Enrollment Number"
//             className="search-input"
//             value={enrollment}
//             onChange={(e) => setEnrollment(e.target.value)}
//           />
//           <button
//             className="search-button-result"
//             onClick={handleSearch}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </div>

//         {error && <p className="error-message">{error}</p>}

//         {results.length > 0 && (
//           <>
//             <div className="results-table-container">
//               <table className="results-table">
//                 <thead>
//                   <tr>
//                     <th>Subject</th>
//                     <th>Marks Obtained</th>
//                     <th>Percentage</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {results.map((result, index) => (
//                     <tr key={index}>
//                       <td>{result.subject}</td>
//                       <td>{result.marks}</td>
//                       <td>{((result.marks / 100) * 100).toFixed(2)} %</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Graph Container - Increased width */}
//             <div
//               className="graph-container"
//               style={{
//                 height: "300px",
//                 width: "800px",
//                 margin: "20px auto",
//               }}
//             >
//               <Line data={chartData} options={chartOptions} />
//             </div>

//             {/* Percentage Display */}
//             <h3 className="percentage-text">
//               Total Percentage: <span>{percentage} %</span>
//             </h3>

//             {/* Download Button - Styled */}
//             <button className="download-button" onClick={handleDownloadPDF}>
//               📄 Download PDF
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;
// -------------------------------------------------------------

import React, { useState, useEffect } from "react";
import Sidebar from "./SideBarUser";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "./results.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResultsPage = () => {
  const [enrollment, setEnrollment] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedEnrollment, setLoggedEnrollment] = useState("");
  const [attendancePercentage, setAttendancePercentage] = useState(0);
  const [note, setNote] = useState("");

  // Fetch logged-in student enrollment from token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5000/api/validuser", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            setLoggedEnrollment(data.validUser.enrollment);
          } else {
            console.error("Error fetching user:", data.message);
          }
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  const handleSearch = async () => {
    if (!enrollment) {
      setError("Please enter your enrollment number.");
      return;
    }

    if (enrollment !== loggedEnrollment) {
      setError("You can only view your own results.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/results?enrollment=${enrollment}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        if (data.results.length === 0) {
          setError("No results found for this enrollment number.");
          setResults([]);
        } else {
          setResults(data.results);
          setAttendancePercentage(data.attendancePercentage);
          setNote(data.note);
        }
      } else {
        setError(data.message || "Error fetching results.");
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      setError("Error fetching results.");
    } finally {
      setLoading(false);
    }
  };

  const totalMarks = results.reduce((acc, result) => acc + result.marks, 0);
  const percentage =
    results.length > 0
      ? ((totalMarks / (results.length * 100)) * 100).toFixed(2)
      : 0;

  // Prepare data for the graph
  const chartData = {
    labels: results.map((result) => result.subject),
    datasets: [
      {
        label: "Marks Obtained",
        data: results.map((result) => result.marks),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#007bff",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { color: "#ffffff" } },
      title: { display: true, text: "Student Performance", color: "#ffffff" },
    },
    scales: {
      x: { ticks: { color: "#ffffff" } },
      y: { ticks: { color: "#ffffff" }, beginAtZero: true },
    },
  };

  // Download results as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Results for Enrollment: ${enrollment}`, 20, 10);

    const tableColumn = ["Subject", "Marks Obtained", "Percentage"];
    const tableRows = results.map((result) => [
      result.subject,
      result.marks,
      ((result.marks / 100) * 100).toFixed(2) + " %",
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.text(
      `Total Percentage: ${percentage} %`,
      20,
      doc.autoTable.previous.finalY + 10
    );

    // Display attendance percentage
    doc.text(
      `Attendance Percentage: ${attendancePercentage.toFixed(2)} %`,
      20,
      doc.autoTable.previous.finalY + 20
    );

    // Display note if attendance < 50%
    if (note) {
      doc.text(note, 20, doc.autoTable.previous.finalY + 30);
    }

    doc.save(`Results_${enrollment}.pdf`);
  };

  return (
    <div className="results-page">
      <Sidebar />

      <div className="results-content">
        <h2 className="results-title">Check Your Results</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Enter Enrollment Number"
            className="search-input"
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
          />
          <button
            className="search-button-result"
            onClick={handleSearch}
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && <p className="error-message">{error}</p>}

        {note && <p className="warning-message">{note}</p>}

        {results.length > 0 && (
          <>
            <div className="results-table-container">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td>{result.subject}</td>
                      <td>{result.marks}</td>
                      <td>{((result.marks / 100) * 100).toFixed(2)} %</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Graph Container - Increased width */}
            <div
              className="graph-container"
              style={{
                height: "300px",
                width: "800px",
                margin: "20px auto",
              }}
            >
              <Line data={chartData} options={chartOptions} />
            </div>

            {/* Percentage Display */}
            <h3 className="percentage-text">
              Total Percentage: <span>{percentage} %</span>
            </h3>

            {/* Download Button - Styled */}
            <button className="download-button" onClick={handleDownloadPDF}>
              📄 Download PDF
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
