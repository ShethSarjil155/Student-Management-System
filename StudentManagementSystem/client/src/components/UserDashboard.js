// import React from "react";
// import Sidebar from "./SideBarUser"; // Sidebar Component
// import "./dashboard.css";

// const DashboardPage = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h2>Welcome, Iqbaal Ramadhan!</h2>
//           <div className="header-right">
//             <input type="text" placeholder="Search..." />
//             <button className="notification-btn">🔔</button>
//           </div>
//         </div>

//         {/* Content Sections */}
//         <div className="content">
//           {/* Calendar */}
//           <div className="calendar">
//             <h3>Calendar</h3>
//             {/* Embed Calendar here */}
//             <div className="calendar-box">📅 Calendar Component</div>
//           </div>

//           {/* Attendance Graph */}
//           <div className="attendance-graph">
//             <h3>Attendance Overview</h3>
//             {/* Embed Graph */}
//             <div className="graph-box">📊 Graph Component</div>
//           </div>

//           {/* Progress Tracker */}
//           <div className="progress-tracker">
//             <h3>Course Progress</h3>
//             <ul>
//               <li>English: 50% Completed</li>
//               <li>Biology: 20% Completed</li>
//               <li>Mathematics: 40% Completed</li>
//             </ul>
//           </div>

//           {/* Tasks & Deadlines */}
//           <div className="tasks">
//             <h3>Upcoming Tasks</h3>
//             <ul>
//               <li>Submit Biology Assignment - Due: 12th Jan</li>
//               <li>English Quiz - Due: 15th Jan</li>
//             </ul>
//           </div>

//           {/* Announcements */}
//           <div className="announcements">
//             <h3>Announcements</h3>
//             <ul>
//               <li>Biology extra class scheduled for 13th Jan</li>
//               <li>Exam schedule released - Check your email</li>
//             </ul>
//           </div>

//           {/* Rewards */}
//           <div className="rewards">
//             <h3>Rewards</h3>
//             <p>You have earned 5 badges this month! 🏅</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React from "react";
// import Sidebar from "./SideBarUser";
// import Calendar from "./Calendar";
// import Graph from "./Graph";
// import "./dashboard.css";

// const DashboardPage = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h2>Welcome, Sarjil Sheth!</h2>
//           <div className="header-right">
//             <input type="text" placeholder="Search..." />
//             <button className="notification-btn">🔔</button>
//           </div>
//         </div>

//         {/* Content Sections */}
//         <div className="content">
//           {/* Calendar */}
//           <div className="calendar">
//             <Calendar />
//           </div>

//           {/* Attendance Graph */}
//           <div className="attendance-graph-userdashboard">
//             <Graph />
//           </div>

//           {/* Progress Tracker */}
//           <div className="progress-tracker">
//             <h3>Course Progress</h3>
//             <ul>
//               <li>English: 50% Completed</li>
//               <li>Biology: 20% Completed</li>
//               <li>Mathematics: 40% Completed</li>
//             </ul>
//           </div>

//           {/* Tasks & Deadlines */}
//           <div className="tasks">
//             <h3>Upcoming Tasks</h3>
//             <ul>
//               <li>Submit Biology Assignment - Due: 12th Jan</li>
//               <li>English Quiz - Due: 15th Jan</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import Calendar from "./Calendar";
// import Graph from "./Graph";
// import "./dashboard.css";

// const DashboardPage = () => {
//   const [user, setUser] = useState(null);

//   // Retrieve user data from localStorage when the component mounts
//   useEffect(() => {
//     const storedUser = localStorage.getItem("currentUser");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Parse the stored JSON data
//     } else {
//       // If no user is logged in, redirect to the login page
//       window.location.href = "/login";
//     }
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>; // Display a loading state while user data is being retrieved
//   }

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h2>Welcome, {user.name}!</h2>
//           <div className="header-right">
//             <input type="text" placeholder="Search..." />
//             <button className="notification-btn">🔔</button>
//           </div>
//         </div>

//         {/* Content Sections */}
//         <div className="content">
//           {/* Calendar */}
//           <div className="calendar">
//             <Calendar />
//           </div>

//           {/* Attendance Graph */}
//           <div className="attendance-graph-userdashboard">
//             <Graph />
//           </div>

//           {/* Progress Tracker */}
//           <div className="progress-tracker">
//             <h3>Course Progress</h3>
//             <ul>
//               <li>English: 50% Completed</li>
//               <li>Biology: 20% Completed</li>
//               <li>Mathematics: 40% Completed</li>
//             </ul>
//           </div>

//           {/* Tasks & Deadlines */}
//           <div className="tasks">
//             <h3>Upcoming Tasks</h3>
//             <ul>
//               <li>Submit Biology Assignment - Due: 12th Jan</li>
//               <li>English Quiz - Due: 15th Jan</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import Calendar from "./Calendar";
// import Graph from "./Graph";
// import "./dashboard.css";

// const DashboardPage = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Fetch the current user details
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("currentUser"); // Get the token from localStorage

//       if (!token) {
//         // If no token is found, redirect to the login page
//         window.location.href = "/login";
//         return;
//       }

//       try {
//         const response = await fetch("/validuser", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token, // Send the token in the Authorization header
//           },
//         });

//         const data = await response.json();

//         if (response.status === 201) {
//           setUser(data.validUserOne); // Set the user details from the response
//         } else {
//           console.error(data.message || "Failed to fetch user details");
//           window.location.href = "/login"; // Redirect to login if unauthorized
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         window.location.href = "/login"; // Redirect to login on error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (!user) {
//     return null; // Prevent rendering if user is not available
//   }

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h2>Welcome, {user.fname}!</h2>
//           <div className="header-right">
//             <input type="text" placeholder="Search..." />
//             <button className="notification-btn">🔔</button>
//           </div>
//         </div>

//         {/* Content Sections */}
//         <div className="content">
//           {/* Calendar */}
//           <div className="calendar">
//             <Calendar />
//           </div>

//           {/* Attendance Graph */}
//           <div className="attendance-graph-userdashboard">
//             <Graph />
//           </div>

//           {/* Progress Tracker */}
//           <div className="progress-tracker">
//             <h3>Course Progress</h3>
//             <ul>
//               <li>English: 50% Completed</li>
//               <li>Biology: 20% Completed</li>
//               <li>Mathematics: 40% Completed</li>
//             </ul>
//           </div>

//           {/* Tasks & Deadlines */}
//           <div className="tasks">
//             <h3>Upcoming Tasks</h3>
//             <ul>
//               <li>Submit Biology Assignment - Due: 12th Jan</li>
//               <li>English Quiz - Due: 15th Jan</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import Calendar from "./Calendar";
// import Graph from "./Graph";
// import "./dashboard.css";

// const DashboardPage = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // To handle loading state

//   // Fetch the current user details
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("usersdatatoken"); // Get the token from localStorage

//       console.log(token);
//       if (!token) {
//         // If no token is found, redirect to the login page
//         window.location.href = "/student-login";
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:5000/api/validuser", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: token, // Send the token in the Authorization header
//           },
//         });

//         const data = await response.json();

//         if (response.status === 200) {
//           setUser(data.validUser); // Set the user details from the response
//         } else {
//           console.error(data.message || "Failed to fetch user details");
//           localStorage.removeItem("usersdatatoken"); // Remove invalid token
//           window.location.href = "/student-login"; // Redirect to login if unauthorized
//         }
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//         localStorage.removeItem("usersdatatoken"); // Remove invalid token
//         window.location.href = "/student-login"; // Redirect to login on error
//       } finally {
//         setLoading(false); // Hide the loading spinner
//       }
//     };

//     fetchUser();
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <h2>Loading...</h2>
//       </div>
//     ); // Show loading message while fetching user data
//   }

//   if (!user) {
//     return null; // Prevent rendering if user is not available
//   }

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <Sidebar userData={user} />

//       {/* Main Content */}
//       <div className="main-content">
//         {/* Header */}
//         <div className="header">
//           <h2>Welcome, {user.fname}!</h2>
//           <div className="header-right">
//             <input type="text" placeholder="Search..." />
//             <button className="notification-btn">🔔</button>
//           </div>
//         </div>

//         {/* Content Sections */}
//         <div className="content">
//           {/* Calendar */}
//           <div className="calendar">
//             <Calendar />
//           </div>

//           {/* Attendance Graph */}
//           <div className="attendance-graph-userdashboard">
//             <Graph />
//           </div>

//           {/* Progress Tracker */}
//           <div className="progress-tracker">
//             <h3>Course Progress</h3>
//             <ul>
//               <li>English: 50% Completed</li>
//               <li>Biology: 20% Completed</li>
//               <li>Mathematics: 40% Completed</li>
//             </ul>
//           </div>

//           {/* Tasks & Deadlines */}
//           <div className="tasks">
//             <h3>Upcoming Tasks</h3>
//             <ul>
//               <li>Submit Biology Assignment - Due: 12th Jan</li>
//               <li>English Quiz - Due: 15th Jan</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useEffect, useState } from "react";
import Sidebar from "./SideBarUser";
import Calendar from "./Calendar";
import Graph from "./Graph";
import "./dashboard.css";

const DashboardPage = () => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from local storage
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
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
          setUserName(data.validUser.fname); // Set the user's name
        } else {
          setError(data.message || "Session expired. Please log in again.");
        }
      } catch (error) {
        setError("Failed to fetch user data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>Error: {error}</h2>
          ) : (
            <h2>Welcome, {userName}</h2>
          )}
          <div className="header-right">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="notification-btn">🔔</button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="content">
          {/* Calendar */}
          <div className="calendar">
            <Calendar />
          </div>

          {/* Attendance Graph */}
          <div className="attendance-graph-userdashboard">
            <Graph />
          </div>

          {/* Progress Tracker */}
          <div className="progress-tracker">
            <h3>Course Progress</h3>
            <ul>
              <li>
                <strong>English:</strong> 50% Completed
              </li>
              <li>
                <strong>Biology:</strong> 20% Completed
              </li>
              <li>
                <strong>Mathematics:</strong> 40% Completed
              </li>
            </ul>
          </div>

          {/* Tasks & Deadlines */}
          <div className="tasks">
            <h3>Upcoming Tasks</h3>
            <ul>
              <li>
                Submit <strong>Biology Assignment</strong> -{" "}
                <em>Due: 12th Jan</em>
              </li>
              <li>
                <strong>English Quiz</strong> - <em>Due: 15th Jan</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
