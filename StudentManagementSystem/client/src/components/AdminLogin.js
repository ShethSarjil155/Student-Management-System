// import React, { useState } from "react";
// import admin from "../Images/admin-icon-7.jpg";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ username: "", password: "" });

//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const newErrors = {
//       username: username ? "" : "Username is required",
//       password: password ? "" : "Password is required",
//     };
//     setErrors(newErrors);

//     if (newErrors.username || newErrors.password) {
//       // Alert if there are errors

//       return; // Exit the function if there are errors
//     }

//     console.log("Admin Logged In:", { username, password });

//     alert("Login Successful");

//     // Uncomment this line to enable navigation after successful login
//     navigate("/admin-user");
//   };

//   const styles = {
//     adminloginContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundColor: "#000", // Black background
//     },
//     adminloginBox: {
//       display: "flex",
//       flexDirection: "row",
//       backgroundColor: "#1a1a1a", // Light black background for the form box
//       padding: "50px", // Increased padding for a larger form
//       borderRadius: "15px",
//       boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.7)",
//       maxWidth: "900px", // Maximum width for the form
//       width: "100%",
//     },
//     adminloginImageContainer: {
//       marginRight: "40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     adminloginImage: {
//       width: "300px", // Larger image
//       height: "300px",
//       borderRadius: "15px",
//     },
//     adminloginFormContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       width: "500px", // Larger form width
//     },
//     adminloginTitle: {
//       fontSize: "32px", // Bigger title
//       fontWeight: "bold",
//       color: "#fff",
//       marginBottom: "30px",
//       textAlign: "center",
//     },
//     adminloginFormGroup: {
//       marginBottom: "25px",
//     },
//     adminloginLabel: {
//       display: "block",
//       fontSize: "20px", // Larger label font size
//       fontWeight: "bold",
//       color: "#fff",
//       marginBottom: "10px",
//     },
//     adminloginInput: {
//       width: "93%",
//       padding: "15px", // Larger input padding
//       fontSize: "18px", // Bigger input text
//       border: "1px solid #333",
//       borderRadius: "8px",
//       backgroundColor: "#262626",
//       color: "#fff",
//     },
//     adminloginError: {
//       color: "red",
//       fontSize: "16px",
//       marginBottom: "15px",
//     },
//     adminloginButton: {
//       width: "100%",
//       padding: "15px", // Larger button padding
//       fontSize: "18px", // Bigger button text
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "8px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={styles.adminloginContainer}>
//         <div style={styles.adminloginBox}>
//           <div style={styles.adminloginImageContainer}>
//             <img src={admin} alt="Admin Login" style={styles.adminloginImage} />
//           </div>
//           <div style={styles.adminloginFormContainer}>
//             <h1 style={styles.adminloginTitle}>Admin Login</h1>
//             <form onSubmit={handleLogin}>
//               <div style={styles.adminloginFormGroup}>
//                 <label htmlFor="username" style={styles.adminloginLabel}>
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter username"
//                   style={styles.adminloginInput}
//                 />
//                 {errors.username && (
//                   <div style={styles.adminloginError}>{errors.username}</div>
//                 )}
//               </div>
//               <div style={styles.adminloginFormGroup}>
//                 <label htmlFor="password" style={styles.adminloginLabel}>
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter password"
//                   style={styles.adminloginInput}
//                 />
//                 {errors.password && (
//                   <div style={styles.adminloginError}>{errors.password}</div>
//                 )}
//               </div>
//               <button type="submit" style={styles.adminloginButton}>
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import React, { useState } from "react";
// import admin from "../Images/admin-icon-7.jpg";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const [errorMessage, setErrorMessage] = useState(""); // To display server-side error messages

//   const navigate = useNavigate();

//   // const handleLogin = async (e) => {
//   //   e.preventDefault();

//   //   // Validate input fields
//   //   const newErrors = {
//   //     email: email ? "" : "Email is required",
//   //     password: password ? "" : "Password is required",
//   //   };
//   //   setErrors(newErrors);

//   //   if (newErrors.email || newErrors.password) {
//   //     return; // Stop if there are validation errors
//   //   }

//   //   try {
//   //     // Make an API call to login
//   //     const response = await fetch("/admin-login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const data = await response.json();

//   //     if (response.status === 200) {
//   //       // Successful login
//   //       localStorage.setItem("token", data.token); // Save the token in localStorage
//   //       localStorage.setItem("currentUser", JSON.stringify(data.admin)); // Save admin details
//   //       alert("Login Successful");
//   //       navigate("/admin-dashboard"); // Redirect to admin dashboard
//   //     } else {
//   //       // Handle login failure
//   //       setErrorMessage(data.message || "Invalid credentials");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error during login:", error);
//   //     setErrorMessage("Something went wrong. Please try again.");
//   //   }
//   // };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Validate input fields
//     const newErrors = {
//       email: email ? "" : "Email is required",
//       password: password ? "" : "Password is required",
//     };
//     setErrors(newErrors);

//     if (newErrors.email || newErrors.password) {
//       return; // Stop if there are validation errors
//     }

//     try {
//       // Make an API call to login with the updated base URL
//       const response = await fetch(
//         "http://localhost:5000/api/auth/admin-login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email, password }),
//         }
//       );

//       const data = await response.json();

//       if (response.status === 200) {
//         // Successful login
//         localStorage.setItem("token", data.token); // Save the token in localStorage
//         localStorage.setItem("currentUser", JSON.stringify(data.admin)); // Save admin details
//         alert("Login Successful");
//         navigate("/admin-dashboard"); // Redirect to admin dashboard
//       } else {
//         // Handle login failure
//         setErrorMessage(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setErrorMessage("Something went wrong. Please try again.");
//     }
//   };

//   const styles = {
//     adminloginContainer: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundColor: "#000",
//     },
//     adminloginBox: {
//       display: "flex",
//       flexDirection: "row",
//       backgroundColor: "#1a1a1a",
//       padding: "50px",
//       borderRadius: "15px",
//       boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.7)",
//       maxWidth: "900px",
//       width: "100%",
//     },
//     adminloginImageContainer: {
//       marginRight: "40px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//     adminloginImage: {
//       width: "300px",
//       height: "300px",
//       borderRadius: "15px",
//     },
//     adminloginFormContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       width: "500px",
//     },
//     adminloginTitle: {
//       fontSize: "32px",
//       fontWeight: "bold",
//       color: "#fff",
//       marginBottom: "30px",
//       textAlign: "center",
//     },
//     adminloginFormGroup: {
//       marginBottom: "25px",
//     },
//     adminloginLabel: {
//       display: "block",
//       fontSize: "20px",
//       fontWeight: "bold",
//       color: "#fff",
//       marginBottom: "10px",
//     },
//     adminloginInput: {
//       width: "93%",
//       padding: "15px",
//       fontSize: "18px",
//       border: "1px solid #333",
//       borderRadius: "8px",
//       backgroundColor: "#262626",
//       color: "#fff",
//     },
//     adminloginError: {
//       color: "red",
//       fontSize: "16px",
//       marginBottom: "15px",
//     },
//     adminloginButton: {
//       width: "100%",
//       padding: "15px",
//       fontSize: "18px",
//       fontWeight: "bold",
//       border: "none",
//       borderRadius: "8px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     adminloginErrorMessage: {
//       color: "red",
//       textAlign: "center",
//       marginBottom: "15px",
//     },
//   };

//   return (
//     <>
//       <Navbar />
//       <div style={styles.adminloginContainer}>
//         <div style={styles.adminloginBox}>
//           <div style={styles.adminloginImageContainer}>
//             <img src={admin} alt="Admin Login" style={styles.adminloginImage} />
//           </div>
//           <div style={styles.adminloginFormContainer}>
//             <h1 style={styles.adminloginTitle}>Admin Login</h1>
//             {errorMessage && (
//               <div style={styles.adminloginErrorMessage}>{errorMessage}</div>
//             )}
//             <form onSubmit={handleLogin}>
//               <div style={styles.adminloginFormGroup}>
//                 <label htmlFor="email" style={styles.adminloginLabel}>
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter email"
//                   style={styles.adminloginInput}
//                 />
//                 {errors.email && (
//                   <div style={styles.adminloginError}>{errors.email}</div>
//                 )}
//               </div>
//               <div style={styles.adminloginFormGroup}>
//                 <label htmlFor="password" style={styles.adminloginLabel}>
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter password"
//                   style={styles.adminloginInput}
//                 />
//                 {errors.password && (
//                   <div style={styles.adminloginError}>{errors.password}</div>
//                 )}
//               </div>
//               <button type="submit" style={styles.adminloginButton}>
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import admin from "../Images/admin-icon-7.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // To display server-side error messages

  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // Validate input fields
  //   const newErrors = {
  //     email: email ? "" : "Email is required",
  //     password: password ? "" : "Password is required",
  //   };
  //   setErrors(newErrors);

  //   if (newErrors.email || newErrors.password) {
  //     return; // Stop if there are validation errors
  //   }

  //   try {
  //     // Make an API call to login with the updated base URL
  //     const response = await fetch("http://localhost:5000/api/admin-login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.status === 200) {
  //       // Successful login
  //       localStorage.setItem("token", data.token); // Save the token in localStorage
  //       localStorage.setItem("token", JSON.stringify(data.admin)); // Save admin details
  //       alert("Login Successful");
  //       navigate("/admin-dashboard"); // Redirect to admin dashboard
  //     } else {
  //       // Handle login failure
  //       setErrorMessage(data.message || "Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     setErrorMessage("Something went wrong. Please try again.");
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate input fields
    const newErrors = {
      email: email ? "" : "Username is required",
      password: password ? "" : "Password is required",
    };
    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      return; // Stop if there are validation errors
    }

    try {
      // Make an API call to login
      const response = await fetch("http://localhost:5000/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }), // Send `username` here
      });

      const data = await response.json();

      if (response.status === 200) {
        // Save the token and admin details in localStorage
        localStorage.setItem("token", data.token); // Save the token
        localStorage.setItem("admin", JSON.stringify(data.admin)); // Save the admin info

        alert("Login Successful");
        navigate("/admin-user"); // Redirect to admin dashboard
      } else {
        // Handle login failure
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  const styles = {
    adminloginContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#000",
    },
    adminloginBox: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#1a1a1a",
      padding: "50px",
      borderRadius: "15px",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.7)",
      maxWidth: "900px",
      width: "100%",
    },
    adminloginImageContainer: {
      marginRight: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    adminloginImage: {
      width: "300px",
      height: "300px",
      borderRadius: "15px",
    },
    adminloginFormContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "500px",
    },
    adminloginTitle: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "30px",
      textAlign: "center",
    },
    adminloginFormGroup: {
      marginBottom: "25px",
    },
    adminloginLabel: {
      display: "block",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "10px",
    },
    adminloginInput: {
      width: "93%",
      padding: "15px",
      fontSize: "18px",
      border: "1px solid #333",
      borderRadius: "8px",
      backgroundColor: "#262626",
      color: "#fff",
    },
    adminloginError: {
      color: "red",
      fontSize: "16px",
      marginBottom: "15px",
    },
    adminloginButton: {
      width: "100%",
      padding: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    adminloginErrorMessage: {
      color: "red",
      textAlign: "center",
      marginBottom: "15px",
    },
  };

  return (
    <>
      <Navbar />
      <div style={styles.adminloginContainer}>
        <div style={styles.adminloginBox}>
          <div style={styles.adminloginImageContainer}>
            <img src={admin} alt="Admin Login" style={styles.adminloginImage} />
          </div>
          <div style={styles.adminloginFormContainer}>
            <h1 style={styles.adminloginTitle}>Admin Login</h1>
            {errorMessage && (
              <div style={styles.adminloginErrorMessage}>{errorMessage}</div>
            )}
            <form onSubmit={handleLogin}>
              <div style={styles.adminloginFormGroup}>
                <label htmlFor="email" style={styles.adminloginLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  style={styles.adminloginInput}
                />
                {errors.email && (
                  <div style={styles.adminloginError}>{errors.email}</div>
                )}
              </div>
              <div style={styles.adminloginFormGroup}>
                <label htmlFor="password" style={styles.adminloginLabel}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  style={styles.adminloginInput}
                />
                {errors.password && (
                  <div style={styles.adminloginError}>{errors.password}</div>
                )}
              </div>
              <button type="submit" style={styles.adminloginButton}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
