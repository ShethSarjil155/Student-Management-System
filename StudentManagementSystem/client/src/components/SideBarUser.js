// import React from "react";
// import {
//   FaHome,
//   FaUserCheck,
//   FaBell,
//   FaBullhorn,
//   FaExclamationCircle,
//   FaChartBar,
//   FaCog,
//   FaHeadset,
//   FaSignOutAlt,
// } from "react-icons/fa";

// import "./sidebar.css";
// import studenticon from "../Images/graduate.png";
// import { NavLink, useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate(); // Initialize the hook

//   const dashboard = () => {
//     navigate("/userdashboard"); // Navigate to /userdashboard
//   };

//   const complaints = () => {
//     navigate("/complain-form"); // Navigate to /complain-form
//   };

//   const attendance = () => {
//     navigate("/attendance"); // Navigate to /complain-form
//   };
//   const notifications = () => {
//     navigate("/notifications"); // Navigate to /complain-form
//   };

//   const announcement = () => {
//     navigate("/announcement"); // Navigate to /complain-form
//   };

//   const results = () => {
//     navigate("/results"); // Navigate to /complain-form
//   };

//   const logout = () => {
//     navigate("/student-login"); // Navigate to /complain-form
//   };

//   return (
//     <div className="sidebar">
//       {/* Logo */}
//       <div className="logo">
//         <h2>Dashboard</h2>
//       </div>

//       {/* Profile */}
//       <div className="profile">
//         <img src={studenticon} alt="Profile" className="profile-image" />
//         <h3>Sarjil Sheth</h3>
//         <p>21018501210061</p>
//       </div>

//       {/* Menu */}
//       <nav className="menu">
//         <ul>
//           <li onClick={dashboard}>
//             <FaHome /> Dashboard
//           </li>

//           <li onClick={attendance}>
//             <FaUserCheck /> Attendance
//           </li>
//           <li onClick={notifications}>
//             <FaBell /> Notifications
//           </li>
//           <li onClick={announcement}>
//             <FaBullhorn /> Announcements
//           </li>

//           <li onClick={complaints}>
//             <FaExclamationCircle /> Complaints
//           </li>

//           <li onClick={results}>
//             <FaChartBar /> Results
//           </li>
//         </ul>
//       </nav>

//       {/* Preferences */}
//       <div className="preferences">
//         {/* Logout Button */}
//         <button className="logout" onClick={logout}>
//           <FaSignOutAlt /> Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useState } from "react";
// import {
//   FaHome,
//   FaUserCheck,
//   FaBell,
//   FaBullhorn,
//   FaExclamationCircle,
//   FaChartBar,
//   FaSignOutAlt,
// } from "react-icons/fa";

// import "./sidebar.css";
// import studenticon from "../Images/graduate.png";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [userName, setUserName] = useState("Loading...");
//   const [enrollment, setEnrollment] = useState("Loading...");
//   const navigate = useNavigate();

//   // Fetch the current user's details
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("Session expired. Please log in again.");
//           navigate("/student-login");
//           return;
//         }

//         const response = await fetch("http://localhost:5000/api/validuser", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setUserName(data.validUser.fname);
//           setEnrollment(data.validUser.enrollment);
//         } else {
//           alert("Error fetching user details. Please log in again.");
//           navigate("/student-login");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         alert("An error occurred. Please log in again.");
//         navigate("/student-login");
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   // Logout Functionality
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token from local storage
//     navigate("/student-login"); // Navigate to login page
//   };

//   // Navigation handlers
//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="sidebar">
//       {/* Logo */}
//       <div className="logo">
//         <h2>Dashboard</h2>
//       </div>

//       {/* Profile */}
//       <div className="profile">
//         <img src={studenticon} alt="Profile" className="profile-image" />
//         <h3>{userName}</h3>
//         <p>{enrollment}</p>
//       </div>

//       {/* Menu */}
//       <nav className="menu">
//         <ul>
//           <li onClick={() => navigateTo("/userdashboard")}>
//             <FaHome /> Dashboard
//           </li>
//           <li onClick={() => navigateTo("/attendance")}>
//             <FaUserCheck /> Attendance
//           </li>
//           <li onClick={() => navigateTo("/notifications")}>
//             <FaBell /> Notifications
//           </li>
//           <li onClick={() => navigateTo("/announcement")}>
//             <FaBullhorn /> Announcements
//           </li>
//           <li onClick={() => navigateTo("/complain-form")}>
//             <FaExclamationCircle /> Complaints
//           </li>
//           <li onClick={() => navigateTo("/results")}>
//             <FaChartBar /> Results
//           </li>
//         </ul>
//       </nav>

//       {/* Preferences */}
//       <div className="preferences">
//         {/* Logout Button */}
//         <button className="logout" onClick={handleLogout}>
//           <FaSignOutAlt /> Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaUserCheck,
//   FaBell,
//   FaBullhorn,
//   FaExclamationCircle,
//   FaChartBar,
//   FaSignOutAlt,
//   FaRegClipboard,
// } from "react-icons/fa";

// import studenticon from "../Images/graduate.png"; // Replace with the correct path
// import "./sidebar.css";

// const Sidebar = () => {
//   const [userName, setUserName] = useState("Loading...");
//   const [enrollment, setEnrollment] = useState("Loading...");
//   const navigate = useNavigate();

//   // Fetch the current user's details
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           alert("Session expired. Please log in again.");
//           navigate("/student-login");
//           return;
//         }

//         const response = await fetch("http://localhost:5000/api/validuser", {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setUserName(data.validUser.fname);
//           setEnrollment(data.validUser.enrollment);
//         } else {
//           alert("Error fetching user details. Please log in again.");
//           navigate("/student-login");
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         alert("An error occurred. Please log in again.");
//         navigate("/student-login");
//       }
//     };

//     fetchUserDetails();
//   }, [navigate]);

//   // Logout Functionality
//   // const handleLogout = async () => {
//   //   try {
//   //     const token = localStorage.getItem("token");

//   //     if (!token) {
//   //       alert("No session found. Redirecting to login.");
//   //       navigate("/student-login");
//   //       return;
//   //     }

//   //     const response = await fetch("http://localhost:5000/api/student-logout", {
//   //       method: "GET",
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //       },
//   //       credentials: "include", // Include cookies in the request
//   //     });

//   //     if (!response.ok) {
//   //       const errorData = await response.json();
//   //       throw new Error(errorData.error || "Logout failed");
//   //     }

//   //     localStorage.removeItem("token");
//   //     alert("Logout successful");
//   //     navigate("/student-login");
//   //   } catch (error) {
//   //     console.error("Logout error:", error.message);
//   //     alert("Failed to logout. Please try again.");
//   //   }
//   // };

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         alert("No session found. Redirecting to login.");
//         navigate("/student-login"); // Redirect immediately if no token
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/student-logout", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Logout failed");
//       }

//       // Successfully logged out
//       localStorage.removeItem("token"); // Remove the token from localStorage
//       console.log("Token removed:", !localStorage.getItem("token"));
//       alert("Logout successful");

//       // Ensure navigation happens after logout is successful
//       navigate("/student-login");
//     } catch (error) {
//       console.error("Logout error:", error.message);
//       alert("Failed to logout. Please try again.");
//     }
//   };

//   // Navigation handlers
//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="sidebar">
//       {/* Logo */}
//       <div className="logo">
//         <h2>Dashboard</h2>
//       </div>

//       {/* Profile */}
//       <div className="profile">
//         <img src={studenticon} alt="Profile" className="profile-image" />
//         <h3>{userName}</h3>
//         <p>{enrollment}</p>
//       </div>

//       {/* Menu */}
//       <nav className="menu">
//         <ul>
//           <li onClick={() => navigateTo("/userdashboard")}>
//             <FaHome /> Dashboard
//           </li>
//           <li onClick={() => navigateTo("/attendance")}>
//             <FaUserCheck /> Attendance
//           </li>
//           <li onClick={() => navigateTo("/notifications")}>
//             <FaBell /> Notifications
//           </li>
//           <li onClick={() => navigateTo("/announcement")}>
//             <FaBullhorn /> Announcements
//           </li>
//           <li onClick={() => navigateTo("/complain-form")}>
//             <FaExclamationCircle /> Complaints
//           </li>
//           <li onClick={() => navigateTo("/results")}>
//             <FaChartBar /> Results
//           </li>
//           <li onClick={() => navigateTo("/your-complaints")}>
//             <FaRegClipboard /> View Complaints
//           </li>
//         </ul>
//       </nav>

//       {/* Preferences */}
//       <div className="preferences">
//         {/* Logout Button */}
//         <button className="logout" onClick={handleLogout}>
//           <FaSignOutAlt /> Log Out
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserCheck,
  FaBell,
  FaBullhorn,
  FaExclamationCircle,
  FaChartBar,
  FaSignOutAlt,
  FaRegClipboard,
} from "react-icons/fa";

import studenticon from "../Images/graduate.png";
import "./sidebar.css";

const Sidebar = () => {
  const [userName, setUserName] = useState("Loading...");
  const [enrollment, setEnrollment] = useState("Loading...");
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();

  // Fetch user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Session expired. Please log in again.");
          navigate("/student-login");
          return;
        }

        const response = await fetch("http://localhost:5000/api/validuser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserName(data.validUser.fname);
          setEnrollment(data.validUser.enrollment);
        } else {
          alert("Error fetching user details. Please log in again.");
          navigate("/student-login");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        alert("An error occurred. Please log in again.");
        navigate("/student-login");
      }
    };

    fetchUserDetails();
  }, [navigate]);

  // Fetch notifications count
  useEffect(() => {
    fetchNotificationCount();

    // Poll for new notifications every 10 seconds (optional)
    const interval = setInterval(fetchNotificationCount, 3000000000000);

    return () => clearInterval(interval);
  }, []);

  const fetchNotificationCount = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      // Get the last seen timestamp
      const lastSeen = localStorage.getItem("lastSeenNotification");

      // Filter only new notifications
      const newNotifications = lastSeen
        ? data.filter(
            (notification) =>
              new Date(notification.createdAt) > new Date(lastSeen)
          )
        : data;

      setNotificationCount(newNotifications.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Handle Notifications Page Navigation
  const navigateTo = (path) => {
    if (path === "/notifications") {
      setNotificationCount(0); // Reset count in UI when visiting

      // Store the last time the user visited notifications
      localStorage.setItem("lastSeenNotification", new Date().toISOString());
    }

    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("No session found. Redirecting to login.");
        navigate("/student-login");
        return;
      }

      const response = await fetch("http://localhost:5000/api/student-logout", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Logout failed");
      }

      localStorage.removeItem("token");
      alert("Logout successful");
      navigate("/student-login");
    } catch (error) {
      console.error("Logout error:", error.message);
      alert("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="logo">
        <h2>Dashboard</h2>
      </div>

      {/* Profile */}
      <div className="profile">
        <img src={studenticon} alt="Profile" className="profile-image" />
        <h3>{userName}</h3>
        <p>{enrollment}</p>
      </div>

      {/* Menu */}
      <nav className="menu">
        <ul>
          <li onClick={() => navigateTo("/userdashboard")}>
            <FaHome /> Dashboard
          </li>
          <li onClick={() => navigateTo("/attendance")}>
            <FaUserCheck /> Attendance
          </li>
          <li
            onClick={() => navigateTo("/notifications")}
            style={{ position: "relative" }}
          >
            <FaBell /> Notifications
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </li>
          <li onClick={() => navigateTo("/announcement")}>
            <FaBullhorn /> Announcements
          </li>
          <li onClick={() => navigateTo("/complain-form")}>
            <FaExclamationCircle /> Complaints
          </li>
          <li onClick={() => navigateTo("/results")}>
            <FaChartBar /> Results
          </li>
          <li onClick={() => navigateTo("/your-complaints")}>
            <FaRegClipboard /> View Complaints
          </li>
        </ul>
      </nav>

      {/* Preferences */}
      <div className="preferences">
        {/* Logout Button */}
        <button className="logout" onClick={handleLogout}>
          <FaSignOutAlt /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
