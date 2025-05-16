// import React from "react";
// import Sidebar from "./SideBarUser"; // Your existing Sidebar component
// import { FaBullhorn, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";
// import "./announcements.css";

// const AnnouncementsPage = () => {
//   // Static Announcements Data
//   const announcements = [
//     {
//       id: 1,
//       title: "System Maintenance",
//       message:
//         "Scheduled maintenance will occur on January 20th, from 1:00 AM to 5:00 AM. Some services may be unavailable during this time.",
//       date: "Posted on January 10, 2025",
//       icon: <FaBullhorn />,
//     },
//     {
//       id: 2,
//       title: "New Feature Update",
//       message:
//         "Dark mode is now available! Switch to dark mode in your settings for a better visual experience.",
//       date: "Posted on January 8, 2025",
//       icon: <FaInfoCircle />,
//     },
//     {
//       id: 3,
//       title: "Holiday Notice",
//       message:
//         "Our offices will remain closed on January 26th for Republic Day. Normal operations will resume on January 27th.",
//       date: "Posted on January 5, 2025",
//       icon: <FaCalendarAlt />,
//     },
//     {
//       id: 4,
//       title: "Event Announcement",
//       message:
//         "Join us for the annual Tech Fest on February 15th at the Main Auditorium.",
//       date: "Posted on January 3, 2025",
//       icon: <FaBullhorn />,
//     },
//   ];

//   return (
//     <div className="announcement-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="announcement-content">
//         <h2 className="announcement-title">Announcements</h2>
//         <div className="announcement-list">
//           {announcements.map((announcement) => (
//             <div key={announcement.id} className="announcement-card">
//               <div className="announcement-card-header">
//                 <div className="announcement-icon">{announcement.icon}</div>
//                 <h3 className="announcement-card-title">
//                   {announcement.title}
//                 </h3>
//               </div>
//               <p className="announcement-card-message">
//                 {announcement.message}
//               </p>
//               <p className="announcement-card-date">{announcement.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnnouncementsPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser"; // Sidebar component
// import { FaBullhorn, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";
// import "./announcements.css";

// const AnnouncementsPage = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve token

//         const response = await fetch(
//           "http://localhost:5000/api/getannouncements",
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
//         <h2 className="announcement-title">Announcements</h2>

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
//                 <p className="announcement-card-date">
//                   Posted on {new Date(announcement.createdAt).toDateString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnnouncementsPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser"; // Sidebar component
// import { FaBullhorn, FaInfoCircle } from "react-icons/fa";
// import "./announcements.css";

// const AnnouncementsPage = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const announcementsPerPage = 4; // Show 4 announcements per page

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Retrieve token

//         const response = await fetch(
//           "http://localhost:5000/api/getannouncements",
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

//   // Get current announcements for pagination
//   const indexOfLastAnnouncement = currentPage * announcementsPerPage;
//   const indexOfFirstAnnouncement =
//     indexOfLastAnnouncement - announcementsPerPage;
//   const currentAnnouncements = announcements.slice(
//     indexOfFirstAnnouncement,
//     indexOfLastAnnouncement
//   );

//   // Pagination handlers
//   const nextPage = () => {
//     if (currentPage < Math.ceil(announcements.length / announcementsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="announcement-page">
//       <Sidebar />

//       <div className="announcement-content">
//         <h2 className="announcement-title">Announcements</h2>

//         {loading ? (
//           <p>Loading announcements...</p>
//         ) : error ? (
//           <p style={{ color: "red" }}>{error}</p>
//         ) : announcements.length === 0 ? (
//           <p>No announcements available.</p>
//         ) : (
//           <>
//             <div className="announcement-list">
//               {currentAnnouncements.map((announcement) => (
//                 <div key={announcement._id} className="announcement-card">
//                   <div className="announcement-card-header">
//                     <div className="announcement-icon">
//                       {announcement.department === "All Departments" ? (
//                         <FaBullhorn />
//                       ) : (
//                         <FaInfoCircle />
//                       )}
//                     </div>
//                     <h3 className="announcement-card-title">
//                       {announcement.announcement}
//                     </h3>
//                   </div>
//                   <p className="announcement-card-date">
//                     Posted on {new Date(announcement.createdAt).toDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination Controls */}
//             <div className="pagination">
//               <button onClick={prevPage} disabled={currentPage === 1}>
//                 Previous
//               </button>
//               <span>
//                 Page {currentPage} of{" "}
//                 {Math.ceil(announcements.length / announcementsPerPage)}
//               </span>
//               <button
//                 onClick={nextPage}
//                 disabled={
//                   currentPage ===
//                   Math.ceil(announcements.length / announcementsPerPage)
//                 }
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AnnouncementsPage;

import React, { useEffect, useState } from "react";
import Sidebar from "./SideBarUser"; // Sidebar component
import { FaBullhorn, FaInfoCircle } from "react-icons/fa";
import "./announcements.css";

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 2; // Show 4 announcements per page

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token

        const response = await fetch(
          "http://localhost:5000/api/getannouncements",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token for authentication
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

    fetchAnnouncements();
  }, []);

  // Get current announcements for pagination
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement =
    indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstAnnouncement,
    indexOfLastAnnouncement
  );

  // Pagination handlers
  const nextPage = () => {
    if (currentPage < Math.ceil(announcements.length / announcementsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="announcement-page">
      <Sidebar />

      <div className="announcement-content">
        <h2 className="announcement-title">Announcements</h2>

        {loading ? (
          <p>Loading announcements...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : announcements.length === 0 ? (
          <p>No announcements available.</p>
        ) : (
          <>
            <div className="announcement-list">
              {currentAnnouncements.map((announcement) => (
                <div key={announcement._id} className="announcement-card">
                  <div className="announcement-card-header">
                    <div className="announcement-icon">
                      {announcement.department === "All Departments" ? (
                        <FaBullhorn />
                      ) : (
                        <FaInfoCircle />
                      )}
                    </div>
                    <h3 className="announcement-card-title">
                      {announcement.announcement}
                    </h3>
                  </div>
                  <p className="announcement-card-details">
                    <strong>Department:</strong>{" "}
                    {announcement.department === "All Departments"
                      ? "All Departments"
                      : announcement.department}
                    <br />
                    <strong>Semester:</strong>{" "}
                    {announcement.semester === "All Semesters"
                      ? "All Semesters"
                      : announcement.semester}
                    <br />
                    <strong>Division:</strong>{" "}
                    {announcement.division === "All Divisions"
                      ? "All Divisions"
                      : announcement.division}
                  </p>
                  <p className="announcement-card-date">
                    Posted on {new Date(announcement.createdAt).toDateString()}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(announcements.length / announcementsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(announcements.length / announcementsPerPage)
                }
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
