// import React, { useEffect, useState } from "react";
// import Sidebar from "./SideBarUser";
// import "./student-yourComplaints.css";

// const YourComplaints = () => {
//   const [complaints, setComplaints] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Unauthorized! Redirecting to login...");
//         return;
//       }

//       try {
//         const response = await fetch(
//           "http://localhost:5000/api/my-complaints",
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setComplaints(data);
//         } else {
//           const errorData = await response.json();
//           setErrorMessage(errorData.message || "Failed to load complaints.");
//         }
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//         setErrorMessage("Something went wrong. Try again later.");
//       }
//     };

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="student-cm-div">
//       <div className="student-complaint-container">
//         <Sidebar />
//         <div className="student-form-content">
//           <div className="student-form-header">
//             <h2>Your Complaints</h2>
//           </div>
//           {errorMessage ? (
//             <p className="student-error-message">{errorMessage}</p>
//           ) : (
//             <div className="student-complaints-list">
//               {complaints.length === 0 ? (
//                 <p>No complaints found.</p>
//               ) : (
//                 <table className="student-complaints-table">
//                   <thead>
//                     <tr>
//                       <th>Subject</th>
//                       <th>Description</th>
//                       <th>Status</th>
//                       <th>Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {complaints.map((complaint) => (
//                       <tr key={complaint._id}>
//                         <td>{complaint.subject}</td>
//                         <td>{complaint.description}</td>
//                         <td>{complaint.status}</td>
//                         <td>
//                           {new Date(complaint.createdAt).toLocaleDateString()}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComplaints;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import "./student-yourComplaints.css";

const YourComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchComplaints = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized! Redirecting to login...");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:5000/api/my-complaints",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setComplaints(data);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Failed to load complaints.");
        }
      } catch (error) {
        console.error("Error fetching complaints:", error);
        setErrorMessage("Something went wrong. Try again later.");
      }
    };

    fetchComplaints();
  }, []);

  const handleDelete = async (complaintId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized! Please log in.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/delete-complaint/${complaintId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Remove deleted complaint from the list
        setComplaints(
          complaints.filter((complaint) => complaint._id !== complaintId)
        );
      } else {
        alert(data.message || "Failed to delete complaint");
      }
    } catch (error) {
      console.error("Error deleting complaint:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="student-cm-div">
      {/* Complaint Box */}
      <div className="student-complaint-box">
        {/* Back Button */}
        <div
          className="student-back-btn"
          onClick={() => navigate("/userdashboard")}
        >
          <FaArrowLeft /> &nbsp; Back to Dashboard
        </div>

        <div className="student-form-header">
          <h2>Your Complaints</h2>
        </div>

        {errorMessage ? (
          <p className="student-error-message">{errorMessage}</p>
        ) : (
          <div className="student-complaints-list">
            {complaints.length === 0 ? (
              <p>No complaints found.</p>
            ) : (
              <table className="student-complaints-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th> {/* Column for delete icon */}
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint) => (
                    <tr key={complaint._id}>
                      <td>{complaint.subject}</td>
                      <td>{complaint.description}</td>
                      <td>{complaint.status}</td>
                      <td>
                        {new Date(complaint.createdAt).toLocaleDateString()}
                      </td>
                      <td>
                        <FaTrashAlt
                          className="student-delete-icon"
                          onClick={() => handleDelete(complaint._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComplaints;
