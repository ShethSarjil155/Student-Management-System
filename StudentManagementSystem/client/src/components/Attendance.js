// import React from "react";
// import Sidebar from "./SideBarUser"; // Your existing Sidebar component
// import { Line } from "react-chartjs-2"; // Importing Line chart from react-chartjs-2
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
// import "./attendance.css";

// // Registering necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AttendancePage = () => {
//   // Static Data for the Line Chart
//   const attendanceData = {
//     labels: ["January", "February", "March", "April", "May", "June", "July"], // Months
//     datasets: [
//       {
//         label: "Present Days",
//         data: [20, 22, 24, 25, 23, 21, 24], // Sample data for Present Days
//         borderColor: "#4CAF50", // Green Line for Present
//         backgroundColor: "rgba(76, 175, 80, 0.2)", // Transparent green
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: "Absent Days",
//         data: [5, 3, 1, 2, 4, 6, 3], // Sample data for Absent Days
//         borderColor: "#F44336", // Red Line for Absent
//         backgroundColor: "rgba(244, 67, 54, 0.2)", // Transparent red
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   // Chart Options
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Monthly Attendance Overview",
//       },
//     },
//   };

//   return (
//     <div className="attendance-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="attendance-content">
//         <h2 className="attendance-title">Attendance Overview</h2>
//         <div className="attendance-summary">
//           <div className="summary-card present">
//             <h3>Present Days</h3>
//             <p>159</p>
//           </div>
//           <div className="summary-card absent">
//             <h3>Absent Days</h3>
//             <p>21</p>
//           </div>
//           <div className="summary-card total">
//             <h3>Total Days</h3>
//             <p>180</p>
//           </div>
//         </div>

//         {/* Attendance Graph */}
//         <div className="attendance-graph">
//           <Line data={attendanceData} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;

// import React, { useEffect, useState } from "react";
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
// import "./attendance.css";

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

// const AttendancePage = () => {
//   const [attendance, setAttendance] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/student/attendance",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch attendance");
//         }

//         const data = await response.json();
//         setAttendance(data);
//       } catch (error) {
//         console.error("Error fetching attendance:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAttendance();
//   }, [token]);

//   // Process data for the chart
//   const presentDays = attendance.filter(
//     (record) => record.status === "Present"
//   ).length;
//   const absentDays = attendance.filter(
//     (record) => record.status === "Absent"
//   ).length;
//   const totalDays = attendance.length;

//   const chartData = {
//     labels: ["Present", "Absent"],
//     datasets: [
//       {
//         label: "Attendance Count",
//         data: [presentDays, absentDays],
//         backgroundColor: ["#4CAF50", "#F44336"],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Attendance Overview",
//       },
//     },
//   };

//   return (
//     <div className="attendance-page">
//       <Sidebar />
//       <div className="attendance-content">
//         <h2 className="attendance-title">Your Attendance</h2>
//         {loading ? (
//           <p>Loading attendance...</p>
//         ) : attendance.length === 0 ? (
//           <p>No attendance records found.</p>
//         ) : (
//           <>
//             <div className="attendance-summary">
//               <div className="summary-card present">
//                 <h3>Present Days</h3>
//                 <p>{presentDays}</p>
//               </div>
//               <div className="summary-card absent">
//                 <h3>Absent Days</h3>
//                 <p>{absentDays}</p>
//               </div>
//               <div className="summary-card total">
//                 <h3>Total Days</h3>
//                 <p>{totalDays}</p>
//               </div>
//             </div>
//             <div className="attendance-graph">
//               <Line data={chartData} options={chartOptions} />
//             </div>
//             <table className="attendance-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Department</th>
//                   <th>Semester</th>
//                   <th>Division</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {attendance.map((record, index) => (
//                   <tr key={index}>
//                     <td>{new Date(record.date).toLocaleDateString()}</td>
//                     <td>{record.department}</td>
//                     <td>{record.semester}</td>
//                     <td>{record.division}</td>
//                     <td
//                       style={{
//                         color: record.status === "Present" ? "green" : "red",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {record.status}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;

import React, { useEffect, useState } from "react";
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
import "./attendance.css";

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

const AttendancePage = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("graph"); // "graph" or "table"
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/student/attendance",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch attendance");
        }

        const data = await response.json();
        setAttendance(data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, [token]);

  // Calculate attendance summary
  const presentDays = attendance.filter(
    (record) => record.status === "Present"
  ).length;
  const absentDays = attendance.filter(
    (record) => record.status === "Absent"
  ).length;
  const totalDays = attendance.length;

  // Chart Data
  // Updated Chart Data with Gradient Effect
  const chartData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance Count",
        data: [presentDays, absentDays],
        backgroundColor: ["rgba(76, 175, 80, 0.5)", "rgba(244, 67, 54, 0.5)"],
        borderColor: ["#4CAF50", "#F44336"],
        borderWidth: 3, // Thicker lines
        pointBackgroundColor: ["#4CAF50", "#F44336"],
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6, // Bigger points for visibility
        tension: 0.4, // Smooth curves
      },
    ],
  };

  // Updated Chart Options for Better Visibility
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Makes it responsive
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // White text for dark theme
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Attendance Overview",
        color: "#ffffff",
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // White axis labels
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Light grid lines
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
  };

  // Pagination Logic
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = attendance.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(attendance.length / recordsPerPage);

  return (
    <div className="attendance-page">
      <Sidebar />
      <div className="attendance-content">
        <h2 className="attendance-title">Your Attendance</h2>

        {loading ? (
          <p>Loading attendance...</p>
        ) : attendance.length === 0 ? (
          <p>No attendance records found.</p>
        ) : (
          <>
            <div className="attendance-summary">
              <div className="summary-card present">
                <h3>Present Days</h3>
                <p>{presentDays}</p>
              </div>
              <div className="summary-card absent">
                <h3>Absent Days</h3>
                <p>{absentDays}</p>
              </div>
              <div className="summary-card total">
                <h3>Total Days</h3>
                <p>{totalDays}</p>
              </div>
            </div>

            {/* Toggle Button */}
            <button
              className="toggle-button"
              onClick={() =>
                setViewMode(viewMode === "graph" ? "table" : "graph")
              }
            >
              {viewMode === "graph"
                ? "Show Attendance Records"
                : "Show Attendance Graph"}
            </button>

            {/* Graph View */}
            {viewMode === "graph" && (
              <div className="attendance-graph">
                <Line data={chartData} options={chartOptions} />
              </div>
            )}

            {/* Table View with Pagination */}
            {viewMode === "table" && (
              <>
                <table className="attendance-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Department</th>
                      <th>Semester</th>
                      <th>Division</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentRecords.map((record, index) => (
                      <tr key={index}>
                        <td>{new Date(record.date).toLocaleDateString()}</td>
                        <td>{record.department}</td>
                        <td>{record.semester}</td>
                        <td>{record.division}</td>
                        <td
                          style={{
                            color:
                              record.status === "Present" ? "green" : "red",
                            fontWeight: "bold",
                          }}
                        >
                          {record.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination Controls */}
                <div className="pagination">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AttendancePage;
