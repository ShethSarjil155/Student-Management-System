// import React, { useEffect, useState } from "react";
// import Sidebar from "./AdminSidebar"; // Admin sidebar component
// import { FaBullhorn, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";
// import "./announcements.css";

// const AdminAnnouncementsPage = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve token

//         const response = await fetch(
//           "http://localhost:5000/api/admin/getannouncements",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`, // Send token for authentication
//             },
//           }
//         );

//         const data = await response.json();

//         if (response.ok) {
//           setAnnouncements(data);
//         } else {
//           setError(data.message || "Failed to fetch announcements.");
//         }
//       } catch (error) {
//         setError("An error occurred while fetching announcements.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnnouncements();
//   }, []);

//   return (
//     <div className="announcement-page">
//       <Sidebar />

//       <div className="announcement-content">
//         <h2 className="announcement-title">All Announcements</h2>

//         {loading ? (
//           <p>Loading announcements...</p>
//         ) : error ? (
//           <p style={{ color: "red" }}>{error}</p>
//         ) : announcements.length === 0 ? (
//           <p>No announcements available.</p>
//         ) : (
//           <div className="announcement-list">
//             {announcements.map((announcement) => (
//               <div key={announcement._id} className="announcement-card">
//                 <div className="announcement-card-header">
//                   <div className="announcement-icon">
//                     {announcement.department === "All Departments" ? (
//                       <FaBullhorn />
//                     ) : (
//                       <FaInfoCircle />
//                     )}
//                   </div>
//                   <h3 className="announcement-card-title">
//                     {announcement.announcement}
//                   </h3>
//                 </div>
//                 <p className="announcement-card-meta">
//                   <strong>Department:</strong>{" "}
//                   {announcement.department === "All Departments"
//                     ? "All Students"
//                     : announcement.department}
//                 </p>
//                 <p className="announcement-card-meta">
//                   <strong>Semester:</strong>{" "}
//                   {announcement.semester === "All Semesters"
//                     ? "All Semesters"
//                     : announcement.semester}
//                 </p>
//                 <p className="announcement-card-meta">
//                   <strong>Division:</strong>{" "}
//                   {announcement.division === "All Divisions"
//                     ? "All Divisions"
//                     : announcement.division}
//                 </p>
//                 <p className="announcement-card-date">
//                   <FaCalendarAlt /> Posted on{" "}
//                   {new Date(announcement.createdAt).toDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminAnnouncementsPage;

import React, { useEffect, useState } from "react";
import Sidebar from "./AdminSidebar"; // Admin sidebar component
import {
  FaBullhorn,
  FaInfoCircle,
  FaCalendarAlt,
  FaTrash,
} from "react-icons/fa";

const AdminAnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 2; // Show 2 announcements per page

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/admin/getannouncements",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAnnouncements(data);
      } else {
        setError(data.message || "Failed to fetch announcements.");
      }
    } catch (error) {
      setError("An error occurred while fetching announcements.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this announcement?"))
      return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `http://localhost:5000/api/admin/deleteannouncement/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setAnnouncements(
          announcements.filter((announcement) => announcement._id !== id)
        );
      } else {
        alert("Failed to delete announcement.");
      }
    } catch (error) {
      alert("An error occurred while deleting the announcement.");
    }
  };

  // Pagination Logic
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement =
    indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement
  );

  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

  return (
    <div style={styles.page}>
      <Sidebar />

      <div style={styles.content}>
        <h2 style={styles.title}>All Announcements</h2>

        {loading ? (
          <p>Loading announcements...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : announcements.length === 0 ? (
          <p>No announcements available.</p>
        ) : (
          <div>
            <div style={styles.list}>
              {currentAnnouncements.map((announcement) => (
                <div key={announcement._id} style={styles.card}>
                  <button
                    style={styles.deleteBtn}
                    onClick={() => handleDelete(announcement._id)}
                  >
                    <FaTrash />
                  </button>
                  <div style={styles.cardHeader}>
                    <div style={styles.icon}>
                      {announcement.department === "All Departments" ? (
                        <FaBullhorn />
                      ) : (
                        <FaInfoCircle />
                      )}
                    </div>
                    <h3 style={styles.cardTitle}>
                      {announcement.announcement}
                    </h3>
                  </div>
                  <p style={styles.cardMeta}>
                    <strong>Department:</strong>{" "}
                    {announcement.department === "All Departments"
                      ? "All Students"
                      : announcement.department}
                  </p>
                  <p style={styles.cardMeta}>
                    <strong>Semester:</strong>{" "}
                    {announcement.semester === "All Semesters"
                      ? "All Semesters"
                      : announcement.semester}
                  </p>
                  <p style={styles.cardMeta}>
                    <strong>Division:</strong>{" "}
                    {announcement.division === "All Divisions"
                      ? "All Divisions"
                      : announcement.division}
                  </p>
                  <p style={styles.cardDate}>
                    <FaCalendarAlt /> Posted on{" "}
                    {new Date(announcement.createdAt).toDateString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div style={styles.pagination}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                style={styles.pageBtn}
              >
                Previous
              </button>
              <span style={styles.pageInfo}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                style={styles.pageBtn}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Internal CSS Styles
// const styles = {
//   page: {
//     display: "flex",
//   },
//   content: {
//     flex: 1,
//     padding: "20px",
//     backgroundColor: "#f8f9fa",
//     minHeight: "100vh",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#333",
//   },
//   list: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   card: {
//     position: "relative",
//     backgroundColor: "#fff",
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     borderLeft: "6px solid #007bff",
//   },
//   deleteBtn: {
//     position: "absolute",
//     top: "10px",
//     right: "10px",
//     backgroundColor: "red",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//     padding: "8px",
//     borderRadius: "50%",
//     fontSize: "14px",
//   },
//   cardHeader: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "10px",
//   },
//   icon: {
//     fontSize: "20px",
//     color: "#007bff",
//   },
//   cardTitle: {
//     margin: 0,
//     fontSize: "18px",
//     fontWeight: "bold",
//   },
//   cardMeta: {
//     fontSize: "14px",
//     color: "#555",
//   },
//   cardDate: {
//     fontSize: "12px",
//     color: "#777",
//     display: "flex",
//     alignItems: "center",
//     gap: "5px",
//   },
//   pagination: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "20px",
//     gap: "10px",
//   },
//   pageBtn: {
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     padding: "8px 15px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "14px",
//   },
//   pageInfo: {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#333",
//   },
// };

const styles = {
  page: {
    display: "flex",
    backgroundColor: "#000", // Black Background
    minHeight: "100vh",
    color: "#00ffff", // Aqua Blue Font
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#00ffff", // Aqua Blue Font
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  card: {
    position: "relative",
    backgroundColor: "#111", // Dark Grey for Contrast
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.1)",
    borderLeft: "6px solid #00ffff", // Aqua Blue Left Border
    color: "#00ffff", // Aqua Blue Font
  },
  deleteBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    color: "red", // Red Delete Icon
    border: "none",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "50%",
    fontSize: "16px",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "20px",
    color: "#00ffff", // Aqua Blue Icon
  },
  cardTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "bold",
    color: "#00ffff", // Aqua Blue Font
  },
  cardMeta: {
    fontSize: "14px",
    color: "#00ffff", // Aqua Blue Font
  },
  cardDate: {
    fontSize: "12px",
    color: "#00ffff", // Aqua Blue Font
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    gap: "10px",
  },
  pageBtn: {
    backgroundColor: "#007bff", // Blue Pagination Buttons
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  pageInfo: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#00ffff", // Aqua Blue Font
  },
};

export default AdminAnnouncementsPage;
