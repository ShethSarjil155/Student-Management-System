import React, { useState } from "react";
import Admin from "../components/AdminSidebar"; // Sidebar Component
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Icons for marking attendance

const AdminAttendancePage = () => {
  // Set default attendance status as "Present" for all students
  const [attendanceStatus, setAttendanceStatus] = useState({
    1: "Present",
    2: "Present",
    3: "Present",
    4: "Present",
  });

  const toggleAttendance = (index) => {
    setAttendanceStatus((prevStatus) => ({
      ...prevStatus,
      [index]: prevStatus[index] === "Present" ? "Absent" : "Present",
    }));
  };

  // Static Data for Students
  const students = [
    {
      index: 1,
      name: "John Doe",
      department: "MBA",
      enrollment: "MBA2023001",
      semester: "1st",
    },
    {
      index: 2,
      name: "Jane Smith",
      department: "MCA",
      enrollment: "MCA2023002",
      semester: "3rd",
    },
    {
      index: 3,
      name: "Robert Brown",
      department: "IMCA",
      enrollment: "IMCA2023003",
      semester: "5th",
    },
    {
      index: 4,
      name: "Emily Davis",
      department: "BSCIT",
      enrollment: "BSCIT2023004",
      semester: "6th",
    },
  ];

  const styles = {
    admin-attendance-container: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif",
    },
    admin-attendance-content: {
      flex: 1,
      backgroundColor: "#f8f9fa", // Light background
      padding: "20px",
    },
    admin-attendance-header: {
      marginBottom: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    admin-attendance-title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    admin-attendance-table-container: {
      backgroundColor: "white",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    admin-attendance-table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    admin-attendance-table-header: {
      backgroundColor: "#64DFDF", // Teal header
      color: "white",
    },
    admin-attendance-table-header-cell: {
      padding: "12px",
      textAlign: "left",
      fontSize: "16px",
      fontWeight: "600",
    },
    admin-attendance-table-row: {
      borderBottom: "1px solid #ddd",
    },
    admin-attendance-table-cell: {
      padding: "12px",
      fontSize: "14px",
      color: "#555",
    },
    admin-attendance-button: {
      cursor: "pointer",
      padding: "6px 12px",
      borderRadius: "6px",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    admin-present-button: {
      backgroundColor: "#64DFDF", // Teal for present
      color: "white",
    },
    admin-absent-button: {
      backgroundColor: "#FF6347", // Red for absent
      color: "white",
    },
    admin-attendance-table-row-hover: {
      backgroundColor: "#f1f1f1",
    },
  };

  return (
    <div style={styles["admin-attendance-container"]}>
      {/* Sidebar */}
      <Admin />

      {/* Main Content */}
      <div style={styles["admin-attendance-content"]}>
        {/* Header */}
        <div style={styles["admin-attendance-header"]}>
          <div style={styles["admin-attendance-title"]}>Student Attendance</div>
        </div>

        {/* Attendance Table */}
        <div style={styles["admin-attendance-table-container"]}>
          <table style={styles["admin-attendance-table"]}>
            <thead style={styles["admin-attendance-table-header"]}>
              <tr>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Index
                </th>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Name
                </th>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Department
                </th>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Enrollment No.
                </th>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Semester
                </th>
                <th style={styles["admin-attendance-table-header-cell"]}>
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.index}
                  style={styles["admin-attendance-table-row"]}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      styles["admin-attendance-table-row-hover"].backgroundColor)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "transparent")
                  }
                >
                  <td style={styles["admin-attendance-table-cell"]}>
                    {student.index}
                  </td>
                  <td style={styles["admin-attendance-table-cell"]}>
                    {student.name}
                  </td>
                  <td style={styles["admin-attendance-table-cell"]}>
                    {student.department}
                  </td>
                  <td style={styles["admin-attendance-table-cell"]}>
                    {student.enrollment}
                  </td>
                  <td style={styles["admin-attendance-table-cell"]}>
                    {student.semester}
                  </td>
                  <td style={styles["admin-attendance-table-cell"]}>
                    <button
                      style={{
                        ...styles["admin-attendance-button"],
                        ...(attendanceStatus[student.index] === "Present"
                          ? styles["admin-present-button"]
                          : styles["admin-absent-button"]),
                      }}
                      onClick={() => toggleAttendance(student.index)}
                    >
                      {attendanceStatus[student.index] === "Present" ? (
                        <FaCheckCircle style={{ marginRight: "8px" }} />
                      ) : (
                        <FaTimesCircle style={{ marginRight: "8px" }} />
                      )}
                      {attendanceStatus[student.index]}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendancePage;
