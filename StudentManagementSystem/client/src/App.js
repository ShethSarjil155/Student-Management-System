// import { Route, Routes, useNavigate } from "react-router-dom";
// import Header from "./components/Header";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import { useContext, useEffect } from "react";
// import { LoginContext } from "./components/ContextProvider/Context";
// import Edit from "./components/Edit";
// import StudentRegister from "./components/StudentRegister";
// import Sidebar from "./components/SideBarUser";
// import DashboardPage from "./components/UserDashboard";
// import ComplaintForm from "./components/ComplaintForm";
// import AttendancePage from "./components/Attendance";
// import NotificationsPage from "./components/Notifications";
// import ResultsPage from "./components/Result";
// import StudentLogin from "./components/StudentLogin";
// import AdminLogin from "./components/AdminLogin";
// import Admin from "./components/AdminSidebar";
// import AnnouncementsPage from "./components/Announcement";
// import AdminUsersPage from "./components/AdminUserPage";
// import AdminBlockUsersPage from "./components/AdminBlockUsersPage";
// import LoginHistoryPage from "./components/StudentLoginHistory";
// import AdminAttendancePage from "./components/AdminAttendancePage";
// import AdminAnnouncementPage from "./components/AdminAnnouncementPage";
// import ComplaintPage from "./components/AdminComplainPage";
// import AdminResultPage from "./components/AdminResultPage";

// function App() {
//   const { logindata, setLoginData } = useContext(LoginContext);

//   const navigate = useNavigate();

//   const DashboardValid = async () => {
//     let token = localStorage.getItem("usersdatatoken");

//     if (token) {
//       const res = await fetch("/validuser", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token,
//         },
//       });

//       const data = await res.json();

//       if (data.status == 401 || !data) {
//         console.log("user not valid");
//       } else {
//         console.log("user verify");
//         setLoginData(data);
//         navigate("/userdashboard");
//       }
//     }
//     console.log("user not verify");
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       DashboardValid();
//     }, 2000);
//   }, []);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<StudentRegister />} />
//         <Route path="/sidebar" element={<Sidebar />} />
//         <Route path="/userdashboard" element={<DashboardPage />} />
//         <Route path="/complain-form" element={<ComplaintForm />} />
//         <Route path="/attendance" element={<AttendancePage />} />
//         <Route path="/notifications" element={<NotificationsPage />} />
//         <Route path="/announcement" element={<AnnouncementsPage />} />
//         <Route path="/results" element={<ResultsPage />} />
//         <Route path="/student-login" element={<StudentLogin />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin-sidebar" element={<Admin />} />
//         <Route path="/admin-user" element={<AdminUsersPage />} />
//         <Route path="/admin-blockuser" element={<AdminBlockUsersPage />} />
//         <Route path="/loginhistory" element={<LoginHistoryPage />} />
//         <Route path="/admin-attendance" element={<AdminAttendancePage />} />
//         <Route path="/admin-announcment" element={<AdminAnnouncementPage />} />
//         <Route path="/admin-complain" element={<ComplaintPage />} />
//         <Route path="/admin-result" element={<AdminResultPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "./components/ContextProvider/Context";
import StudentRegister from "./components/StudentRegister";
import Sidebar from "./components/SideBarUser";
import DashboardPage from "./components/UserDashboard";
import ComplaintForm from "./components/ComplaintForm";
import AttendancePage from "./components/Attendance";
import NotificationsPage from "./components/Notifications";
import ResultsPage from "./components/Result";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import Admin from "./components/AdminSidebar";
import AnnouncementsPage from "./components/Announcement";
import AdminUsersPage from "./components/AdminUserPage";
import AdminBlockUsersPage from "./components/AdminBlockUsersPage";
import LoginHistoryPage from "./components/StudentLoginHistory";
import AdminAttendancePage from "./components/AdminAttendancePage";
import AdminAnnouncementPage from "./components/AdminAnnouncementPage";
import ComplaintPage from "./components/AdminComplainPage";
import AdminResultPage from "./components/AdminResultPage";
import Blocked from "./components/Blocked";
import YourComplaints from "./components/YourComplaints";
import AdminManagementAnnouncementsPage from "./components/AdminManagementAnnouncement";
function App() {
  // const { setLoginData } = useContext(LoginContext);
  // const navigate = useNavigate();

  // // Validate token and fetch user details
  // useEffect(() => {
  //   const validateUser = async () => {
  //     const token = localStorage.getItem("usersdatatoken");

  //     if (token) {
  //       try {
  //         const res = await fetch("http://localhost:5000/api/validuser", {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: token,
  //           },
  //         });

  //         const data = await res.json();

  //         if (res.status === 200) {
  //           console.log("User verified:", data);
  //           setLoginData(data.validUser); // Store user data in context
  //         } else {
  //           console.log("Invalid user or session expired");
  //           localStorage.removeItem("usersdatatoken");
  //           navigate("/student-login");
  //         }
  //       } catch (error) {
  //         console.error("Error during user validation:", error);
  //         localStorage.removeItem("usersdatatoken");
  //         navigate("/student-login");
  //       }
  //     } else {
  //       console.log("No token found");
  //     }
  //   };

  //   validateUser();
  // }, [navigate, setLoginData]);

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<StudentRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Routes */}
        <Route path="/userdashboard" element={<DashboardPage />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/complain-form" element={<ComplaintForm />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/announcement" element={<AnnouncementsPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/admin-sidebar" element={<Admin />} />
        <Route path="/admin-user" element={<AdminUsersPage />} />
        <Route path="/admin-blockuser" element={<AdminBlockUsersPage />} />
        <Route path="/loginhistory" element={<LoginHistoryPage />} />
        <Route path="/admin-attendance" element={<AdminAttendancePage />} />
        <Route path="/admin-announcement" element={<AdminAnnouncementPage />} />
        <Route path="/admin-complain" element={<ComplaintPage />} />
        <Route path="/admin-result" element={<AdminResultPage />} />
        <Route path="/blocked" element={<Blocked />} />
        <Route path="/your-complaints" element={<YourComplaints />} />
        <Route
          path="/admin-announcment-management"
          element={<AdminManagementAnnouncementsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
