// import React from "react";
// import Sidebar from "./SideBarUser"; // Your existing Sidebar component
// import { FaBullhorn, FaBell } from "react-icons/fa";
// import "./notifications.css";

// const NotificationsPage = () => {
//   // Static Notifications Data
//   const notifications = [
//     {
//       id: 1,
//       title: "New Announcement",
//       message:
//         "Semester exams will start from March 15th. Prepare accordingly.",
//       type: "announcement",
//       date: "January 10, 2025",
//     },
//     {
//       id: 2,
//       title: "Attendance Reminder",
//       message: "Please mark your attendance for today's lectures.",
//       type: "reminder",
//       date: "January 11, 2025",
//     },
//     {
//       id: 3,
//       title: "Event Update",
//       message:
//         "Cultural Fest 2025 will be held on February 20th. Join the fun!",
//       type: "event",
//       date: "January 5, 2025",
//     },
//     {
//       id: 4,
//       title: "Assignment Deadline",
//       message: "Submit your project reports by January 20th.",
//       type: "deadline",
//       date: "January 8, 2025",
//     },
//   ];

//   return (
//     <div className="notifications-page">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="notifications-content">
//         <h2 className="notifications-title">Notifications</h2>
//         <div className="notifications-list">
//           {notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className={`notification-card ${notification.type}`}
//             >
//               <div className="notification-header">
//                 {notification.type === "announcement" && (
//                   <FaBullhorn className="notification-icon announcement" />
//                 )}
//                 {notification.type === "reminder" && (
//                   <FaBell className="notification-icon reminder" />
//                 )}
//                 {notification.type === "event" && (
//                   <FaBell className="notification-icon event" />
//                 )}
//                 {notification.type === "deadline" && (
//                   <FaBullhorn className="notification-icon deadline" />
//                 )}
//                 <h3>{notification.title}</h3>
//               </div>
//               <p className="notification-message">{notification.message}</p>
//               <p className="notification-date">{notification.date}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import { FaBullhorn, FaBell, FaTrash } from "react-icons/fa";
// import "./notifications.css";

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch("http://localhost:5000/api/notifications", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       setNotifications(data);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const clearNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       await fetch("http://localhost:5000/api/notifications/clear", {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setNotifications([]);
//     } catch (error) {
//       console.error("Error clearing notifications:", error);
//     }
//   };

//   return (
//     <div className="notifications-page">
//       <Sidebar />
//       <div className="notifications-content">
//         <h2 className="notifications-title">Notifications</h2>
//         <button className="clear-btn" onClick={clearNotifications}>
//           <FaTrash /> Clear All
//         </button>
//         {notifications.length === 0 ? (
//           <p>No new notifications.</p>
//         ) : (
//           <div className="notifications-list">
//             {notifications.map((notification) => (
//               <div
//                 key={notification._id}
//                 className={`notification-card ${notification.type}`}
//               >
//                 <div className="notification-header">
//                   {notification.type === "announcement" && (
//                     <FaBullhorn className="notification-icon announcement" />
//                   )}
//                   {notification.type === "reminder" && (
//                     <FaBell className="notification-icon reminder" />
//                   )}
//                   {notification.type === "event" && (
//                     <FaBell className="notification-icon event" />
//                   )}
//                   {notification.type === "deadline" && (
//                     <FaBullhorn className="notification-icon deadline" />
//                   )}
//                   <h3>{notification.title}</h3>
//                 </div>
//                 <p className="notification-message">{notification.message}</p>
//                 <p className="notification-date">
//                   {new Date(notification.createdAt).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import { FaBullhorn, FaBell, FaTrash } from "react-icons/fa";
// import "./notifications.css";

// const NotificationsPage = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [visibleNotifications, setVisibleNotifications] = useState([]);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch("http://localhost:5000/api/notifications", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await response.json();
//       setNotifications(data);

//       // Load cleared notifications from localStorage
//       const clearedNotifications =
//         JSON.parse(localStorage.getItem("clearedNotifications")) || [];
//       const filteredNotifications = data.filter(
//         (notification) => !clearedNotifications.includes(notification._id)
//       );

//       setVisibleNotifications(filteredNotifications);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   const clearNotifications = () => {
//     // Store cleared notifications in localStorage
//     const clearedNotificationIds = visibleNotifications.map(
//       (notification) => notification._id
//     );
//     localStorage.setItem(
//       "clearedNotifications",
//       JSON.stringify(clearedNotificationIds)
//     );

//     setVisibleNotifications([]); // Hide notifications
//   };

//   return (
//     <div className="notifications-page">
//       <Sidebar />
//       <div className="notifications-content">
//         <div className="notifications-header">
//           <h2 className="notifications-title">Notifications</h2>
//           {visibleNotifications.length > 0 && (
//             <button className="clear-btn" onClick={clearNotifications}>
//               <FaTrash /> Clear All
//             </button>
//           )}
//         </div>
//         {visibleNotifications.length === 0 ? (
//           <p className="no-notifications">No new notifications.</p>
//         ) : (
//           <div className="notifications-list">
//             {visibleNotifications.map((notification) => (
//               <div
//                 key={notification._id}
//                 className={`notification-card ${notification.type}`}
//               >
//                 <div className="notification-header">
//                   {notification.type === "announcement" && (
//                     <FaBullhorn className="notification-icon announcement" />
//                   )}
//                   {notification.type === "reminder" && (
//                     <FaBell className="notification-icon reminder" />
//                   )}
//                   {notification.type === "event" && (
//                     <FaBell className="notification-icon event" />
//                   )}
//                   {notification.type === "deadline" && (
//                     <FaBullhorn className="notification-icon deadline" />
//                   )}
//                   <h3>{notification.title}</h3>
//                 </div>
//                 {/* <p className="notification-message">{notification.message}</p> */}
//                 <p className="notification-date">
//                   {new Date(notification.createdAt).toLocaleString()}
//                 </p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;

import React, { useEffect, useState } from "react";
import Sidebar from "./SideBarUser";
import { FaBullhorn, FaBell, FaTrash } from "react-icons/fa";
import "./notifications.css";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 4; // 4 notifications per page

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/notifications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setNotifications(data);

      // Load cleared notifications from localStorage
      const clearedNotifications =
        JSON.parse(localStorage.getItem("clearedNotifications")) || [];
      const filteredNotifications = data.filter(
        (notification) => !clearedNotifications.includes(notification._id)
      );

      setVisibleNotifications(filteredNotifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // const clearNotifications = () => {
  //   // Store cleared notifications in localStorage
  //   const clearedNotificationIds = visibleNotifications.map(
  //     (notification) => notification._id
  //   );
  //   localStorage.setItem(
  //     "clearedNotifications",
  //     JSON.stringify(clearedNotificationIds)
  //   );

  //   setVisibleNotifications([]); // Hide notifications
  // };

  // Pagination logic

  const clearNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/notifications/clear",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to clear notifications.");
      }

      setVisibleNotifications([]); // Hide notifications from UI
      localStorage.removeItem("clearedNotifications"); // Remove cleared notifications from localStorage
    } catch (error) {
      console.error("Error clearing notifications:", error);
      alert("Error clearing notifications. Please try again.");
    }
  };

  const indexOfLastNotification = currentPage * notificationsPerPage;
  const indexOfFirstNotification =
    indexOfLastNotification - notificationsPerPage;
  const currentNotifications = visibleNotifications.slice(
    indexOfFirstNotification,
    indexOfLastNotification
  );

  const nextPage = () => {
    if (
      currentPage <
      Math.ceil(visibleNotifications.length / notificationsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="notifications-page">
      <Sidebar />
      <div className="notifications-content">
        <div className="notifications-header">
          <h2 className="notifications-title">Notifications</h2>
          {visibleNotifications.length > 0 && (
            <button className="clear-btn" onClick={clearNotifications}>
              <FaTrash /> Clear All
            </button>
          )}
        </div>
        {currentNotifications.length === 0 ? (
          <p className="no-notifications">No new notifications.</p>
        ) : (
          <div className="notifications-list">
            {currentNotifications.map((notification) => (
              <div
                key={notification._id}
                className={`notification-card ${notification.type}`}
              >
                <div className="notification-header">
                  {notification.type === "announcement" && (
                    <FaBullhorn className="notification-icon announcement" />
                  )}
                  {notification.type === "reminder" && (
                    <FaBell className="notification-icon reminder" />
                  )}
                  {notification.type === "event" && (
                    <FaBell className="notification-icon event" />
                  )}
                  {notification.type === "deadline" && (
                    <FaBullhorn className="notification-icon deadline" />
                  )}
                  <h3>{notification.title}</h3>
                </div>
                <p className="notification-date">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {visibleNotifications.length > notificationsPerPage && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(visibleNotifications.length / notificationsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={
                currentPage ===
                Math.ceil(visibleNotifications.length / notificationsPerPage)
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
