// import React from "react";
// import {
//   FaHome,
//   FaUser,
//   FaCog,
//   FaChartBar,
//   FaChartLine,
//   FaCommentAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Admin = () => {
//   // Inline CSS styles
//   const styles = {
//     adminSidebarContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Inter', sans-serif",
//     },
//     adminSidebar: {
//       width: "250px",
//       backgroundColor: "#000000", // Pure black color
//       color: "white",
//       display: "flex",
//       flexDirection: "column",
//       padding: "20px 10px",
//     },
//     adminSidebarLogo: {
//       marginBottom: "30px",
//       fontSize: "22px",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       textAlign: "center",
//     },
//     adminSidebarMenu: {
//       display: "flex",
//       flexDirection: "column",
//       flexGrow: 1, // Ensures logout button stays at the bottom
//     },
//     adminSidebarMenuItem: {
//       display: "flex",
//       alignItems: "center",
//       padding: "12px 15px",
//       marginBottom: "15px",
//       fontSize: "16px",
//       cursor: "pointer",
//       color: "white",
//       transition: "background-color 0.3s ease",
//     },
//     adminSidebarMenuItemHover: {
//       backgroundColor: "#1a1a1a", // Slightly lighter black on hover
//     },
//     adminSidebarMenuIcon: {
//       fontSize: "20px",
//       marginRight: "10px",
//     },
//     adminSidebarLogout: {
//       display: "flex",
//       alignItems: "center",
//       padding: "12px 15px",
//       fontSize: "16px",
//       cursor: "pointer",
//       color: "white",
//       backgroundColor: "#000000", // Same as sidebar background
//       transition: "background-color 0.3s ease",
//     },
//     adminSidebarLogoutHover: {
//       backgroundColor: "#1a1a1a",
//     },
//   };

//   return (
//     <div style={styles.adminSidebarContainer}>
//       {/* Sidebar */}
//       <div style={styles.adminSidebar}>
//         {/* Logo */}
//         <div style={styles.adminSidebarLogo}>Admin Panel</div>

//         {/* Menu Options */}
//         <div style={styles.adminSidebarMenu}>
//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaHome style={styles.adminSidebarMenuIcon} />
//             Home
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaUser style={styles.adminSidebarMenuIcon} />
//             Users
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaCog style={styles.adminSidebarMenuIcon} />
//             Settings
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaChartBar style={styles.adminSidebarMenuIcon} />
//             Reports
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaChartLine style={styles.adminSidebarMenuIcon} />
//             Analytics
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaCommentAlt style={styles.adminSidebarMenuIcon} />
//             Messages
//           </div>
//         </div>

//         {/* Logout Button */}
//         <div
//           style={styles.adminSidebarLogout}
//           onMouseEnter={(e) =>
//             (e.target.style.backgroundColor =
//               styles.adminSidebarLogoutHover.backgroundColor)
//           }
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//           onClick={() => alert("Logged out!")}
//         >
//           <FaSignOutAlt style={styles.adminSidebarMenuIcon} />
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;

// import React from "react";
// import {
//   FaHome,
//   FaUser,
//   FaCog,
//   FaChartBar,
//   FaChartLine,
//   FaCommentAlt,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Admin = () => {
//   const styles = {
//     adminSidebarContainer: {
//       display: "flex",
//       height: "100vh",
//       fontFamily: "'Inter', sans-serif",
//     },
//     adminSidebar: {
//       width: "250px",
//       background: "linear-gradient(180deg,rgb(37, 43, 46),rgb(8, 9, 9))", // Aqua gradient
//       color: "white",
//       display: "flex",
//       flexDirection: "column",
//       padding: "20px 10px",
//       boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)", // Add shadow for depth
//     },
//     adminSidebarLogo: {
//       marginBottom: "30px",
//       fontSize: "24px",
//       fontWeight: "bold",
//       textTransform: "uppercase",
//       textAlign: "center",
//       color: "#ffffff",
//     },
//     adminSidebarMenu: {
//       display: "flex",
//       flexDirection: "column",
//       flexGrow: 1,
//     },
//     adminSidebarMenuItem: {
//       display: "flex",
//       alignItems: "center",
//       padding: "12px 15px",
//       marginBottom: "15px",
//       fontSize: "16px",
//       cursor: "pointer",
//       color: "#ffffff",
//       transition: "all 0.3s ease",
//       borderRadius: "8px", // Rounded corners for items
//     },
//     adminSidebarMenuItemHover: {
//       backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
//     },
//     adminSidebarMenuIcon: {
//       fontSize: "20px",
//       marginRight: "10px",
//     },
//     adminSidebarLogout: {
//       display: "flex",
//       alignItems: "center",
//       padding: "12px 15px",
//       fontSize: "16px",
//       cursor: "pointer",
//       color: "white",
//       transition: "background-color 0.3s ease",
//       borderRadius: "8px",
//       background: "rgba(255, 255, 255, 0.1)", // Subtle background for logout
//     },
//     adminSidebarLogoutHover: {
//       backgroundColor: "rgba(255, 255, 255, 0.2)",
//     },
//     adminSidebarMenuActive: {
//       backgroundColor: "rgba(255, 255, 255, 0.4)", // Highlight active item
//     },
//   };

//   return (
//     <div style={styles.adminSidebarContainer}>
//       {/* Sidebar */}
//       <div style={styles.adminSidebar}>
//         {/* Logo */}
//         <div style={styles.adminSidebarLogo}>Admin Panel</div>

//         {/* Menu Options */}
//         <div style={styles.adminSidebarMenu}>
//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaHome style={styles.adminSidebarMenuIcon} />
//             Home
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaUser style={styles.adminSidebarMenuIcon} />
//             Users
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaCog style={styles.adminSidebarMenuIcon} />
//             Settings
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaChartBar style={styles.adminSidebarMenuIcon} />
//             Reports
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaChartLine style={styles.adminSidebarMenuIcon} />
//             Analytics
//           </div>

//           <div
//             style={styles.adminSidebarMenuItem}
//             onMouseEnter={(e) =>
//               (e.target.style.backgroundColor =
//                 styles.adminSidebarMenuItemHover.backgroundColor)
//             }
//             onMouseLeave={(e) =>
//               (e.target.style.backgroundColor = "transparent")
//             }
//           >
//             <FaCommentAlt style={styles.adminSidebarMenuIcon} />
//             Messages
//           </div>
//         </div>

//         {/* Logout Button */}
//         <div
//           style={styles.adminSidebarLogout}
//           onMouseEnter={(e) =>
//             (e.target.style.backgroundColor =
//               styles.adminSidebarLogoutHover.backgroundColor)
//           }
//           onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
//           onClick={() => alert("Logged out!")}
//         >
//           <FaSignOutAlt style={styles.adminSidebarMenuIcon} />
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React from "react";
import {
  FaHome,
  FaTasks,
  FaUser,
  FaCog,
  FaChartBar,
  FaChartLine,
  FaCommentAlt,
  FaSignOutAlt,
  FaHistory,
  FaUserCheck,
  FaBullhorn,
  FaExclamationCircle,
  FaClipboardList,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdPostAdd, MdManageSearch, MdOutlineCampaign } from "react-icons/md";

const Admin = () => {
  // const styles = {
  //   adminSidebarContainer: {
  //     display: "flex",
  //     height: "100vh",
  //     fontFamily: "'Poppins', sans-serif", // Modern font
  //   },
  //   adminSidebar: {
  //     width: "260px",
  //     background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)", // Dark teal gradient
  //     color: "white",
  //     display: "flex",
  //     flexDirection: "column",
  //     padding: "20px 15px",
  //     boxShadow: "3px 0 15px rgba(0, 0, 0, 0.5)", // Depth effect
  //   },
  //   adminSidebarLogo: {
  //     marginBottom: "40px",
  //     fontSize: "26px",
  //     fontWeight: "bold",
  //     textTransform: "uppercase",
  //     textAlign: "center",
  //     color: "#FFB400", // Amber logo color
  //     letterSpacing: "2px",
  //   },
  //   adminSidebarMenu: {
  //     display: "flex",
  //     flexDirection: "column",
  //     flexGrow: 1,
  //   },
  //   adminSidebarMenuItem: {
  //     display: "flex",
  //     alignItems: "center",
  //     padding: "15px 20px",
  //     marginBottom: "15px",
  //     fontSize: "17px",
  //     cursor: "pointer",
  //     color: "white",
  //     transition: "all 0.3s ease",
  //     borderRadius: "10px", // Smooth corners
  //     backgroundColor: "transparent", // Default transparent
  //   },
  //   adminSidebarMenuItemHover: {
  //     backgroundColor: "rgba(255, 180, 0, 0.2)", // Amber hover effect
  //     color: "#FFB400", // Change text color on hover
  //   },
  //   adminSidebarMenuIcon: {
  //     fontSize: "22px",
  //     marginRight: "12px",
  //     color: "#64DFDF", // Teal icon color
  //   },
  //   adminSidebarLogout: {
  //     display: "flex",
  //     alignItems: "center",
  //     padding: "15px 20px",
  //     fontSize: "17px",
  //     cursor: "pointer",
  //     color: "white",
  //     transition: "all 0.3s ease",
  //     borderRadius: "10px",
  //     backgroundColor: "rgba(255, 180, 0, 0.1)", // Subtle amber background
  //   },
  //   adminSidebarLogoutHover: {
  //     backgroundColor: "rgba(255, 180, 0, 0.3)", // Stronger amber hover
  //     color: "#FFB400", // Amber text on hover
  //   },
  //   adminSidebarMenuActive: {
  //     backgroundColor: "rgba(100, 223, 223, 0.2)", // Teal highlight for active
  //     color: "#64DFDF", // Teal active text
  //   },
  // };

  const styles = {
    adminSidebarContainer: {
      display: "flex",
      height: "100vh",
      fontFamily: "'Poppins', sans-serif", // Modern font
    },
    adminSidebar: {
      width: "260px",
      background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)", // Dark teal gradient
      color: "white",
      display: "flex",
      flexDirection: "column",
      padding: "20px 15px",
      boxShadow: "3px 0 15px rgba(0, 0, 0, 0.5)", // Depth effect
      position: "sticky", // Sticky positioning
      top: 0, // Stick to the top of the page
      height: "100vh", // Full height of the viewport
      zIndex: 1000, // Ensure it's above other content when scrolling
    },
    adminSidebarLogo: {
      marginBottom: "40px",
      fontSize: "26px",
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      color: "#FFB400", // Amber logo color
      letterSpacing: "2px",
    },
    adminSidebarMenu: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    adminSidebarMenuItem: {
      display: "flex",
      alignItems: "center",
      padding: "15px 20px",
      marginBottom: "15px",
      fontSize: "17px",
      cursor: "pointer",
      color: "white",
      transition: "all 0.3s ease",
      borderRadius: "10px", // Smooth corners
      backgroundColor: "transparent", // Default transparent
    },
    adminSidebarMenuItemHover: {
      backgroundColor: "rgba(255, 180, 0, 0.2)", // Amber hover effect
      color: "#FFB400", // Change text color on hover
    },
    adminSidebarMenuIcon: {
      fontSize: "22px",
      marginRight: "12px",
      color: "#64DFDF", // Teal icon color
    },
    adminSidebarLogout: {
      display: "flex",
      alignItems: "center",
      padding: "15px 20px",
      fontSize: "17px",
      cursor: "pointer",
      color: "white",
      transition: "all 0.3s ease",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 180, 0, 0.1)", // Subtle amber background
    },
    adminSidebarLogoutHover: {
      backgroundColor: "rgba(255, 180, 0, 0.3)", // Stronger amber hover
      color: "#FFB400", // Amber text on hover
    },
    adminSidebarMenuActive: {
      backgroundColor: "rgba(100, 223, 223, 0.2)", // Teal highlight for active
      color: "#64DFDF", // Teal active text
    },
  };

  const navigate = useNavigate();
  const users = () => {
    navigate("/admin-user");
  };
  const blockusers = () => {
    navigate("/admin-blockuser");
  };
  const loginhistory = () => {
    navigate("/loginhistory");
  };
  const attendance = () => {
    navigate("/admin-attendance");
  };
  const announcment = () => {
    navigate("/admin-announcement");
  };
  const complain = () => {
    navigate("/admin-complain");
  };
  const results = () => {
    navigate("/admin-result");
  };

  const mangement = () => {
    navigate("/admin-announcment-management");
  };
  // const logout = () => {
  //   navigate("/admin-login");
  // };

  const logout = () => {
    // Clear session or authentication data (e.g., JWT token, user info)
    localStorage.removeItem("token");
    localStorage.removeItem("admin");

    // Redirect to the login page
    navigate("/admin-login");
  };

  return (
    <div style={styles.adminSidebarContainer}>
      {/* Sidebar */}
      <div style={styles.adminSidebar}>
        {/* Logo */}
        <div style={styles.adminSidebarLogo}>Admin Panel</div>

        {/* Menu Options */}
        <div style={styles.adminSidebarMenu}>
          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={users}
          >
            <FaHome style={styles.adminSidebarMenuIcon} />
            Home
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={blockusers}
          >
            <FaUser style={styles.adminSidebarMenuIcon} />
            Block Users
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={loginhistory}
          >
            <FaHistory style={styles.adminSidebarMenuIcon} />
            Login History
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={attendance}
          >
            <FaUserCheck style={styles.adminSidebarMenuIcon} />
            Attendance
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={announcment}
          >
            <FaBullhorn style={styles.adminSidebarMenuIcon} />
            Announcement
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={complain}
          >
            <FaExclamationCircle style={styles.adminSidebarMenuIcon} />
            Complaints
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={results}
          >
            <FaClipboardList style={styles.adminSidebarMenuIcon} />
            Results
          </div>

          <div
            style={styles.adminSidebarMenuItem}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                styles.adminSidebarMenuItemHover.backgroundColor) ||
              (e.target.style.color = styles.adminSidebarMenuItemHover.color)
            }
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "white";
            }}
            onClick={mangement}
          >
            <FaTasks style={styles.adminSidebarMenuIcon} />
            Ann.Management
          </div>
        </div>

        {/* Logout Button */}
        <div
          style={styles.adminSidebarLogout}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor =
              styles.adminSidebarLogoutHover.backgroundColor) ||
            (e.target.style.color = styles.adminSidebarLogoutHover.color)
          }
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "rgba(255, 180, 0, 0.1)";
            e.target.style.color = "white";
          }}
          onClick={logout}
        >
          <FaSignOutAlt style={styles.adminSidebarMenuIcon} />
          Logout
        </div>
      </div>
    </div>
  );
};

export default Admin;
