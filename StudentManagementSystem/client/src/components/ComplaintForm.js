// import React from "react";
// import Sidebar from "./SideBarUser"; // Assuming Sidebar component is already created
// import "./complaintForm.css";

// const ComplaintForm = () => {
//   return (
//     <div className="cm-div">
//       <div className="complaint-container">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main Content */}
//         <div className="form-content">
//           {/* Header */}
//           <div className="form-header">
//             <h2>Submit Your Complaint</h2>
//             <p>
//               We value your feedback and concerns. Please fill out the form
//               below.
//             </p>
//           </div>

//           {/* Complaint Form */}
//           <form className="complaint-form">
//             <div className="form-group">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 placeholder="Enter the subject of your complaint"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="6"
//                 placeholder="Describe your complaint in detail"
//                 required
//               ></textarea>
//             </div>

//             <button type="submit" className="submit-btn">
//               Send Complaint
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./SideBarUser";
// import "./complaintForm.css";

// const ComplaintForm = () => {
//   const [subject, setSubject] = useState("");
//   const [description, setDescription] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("You are not authorized! Please log in.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ subject, description }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//         navigate("/your-complaints"); // Navigate to complaints page
//       } else {
//         alert(data.message || "Failed to submit complaint");
//       }
//     } catch (error) {
//       console.error("Error submitting complaint:", error);
//       alert("Something went wrong. Try again later.");
//     }
//   };

//   return (
//     <div className="cm-div">
//       <div className="complaint-container">
//         <Sidebar />
//         <div className="form-content">
//           <div className="form-header">
//             <h2>Submit Your Complaint</h2>
//             <p>We value your feedback. Please describe your issue below.</p>
//           </div>
//           <form className="complaint-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 type="text"
//                 id="subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 placeholder="Enter the subject of your complaint"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="description">Description</label>
//               <textarea
//                 id="description"
//                 rows="6"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Describe your complaint in detail"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="submit-btn">
//               Send Complaint
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComplaintForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./complaintForm.css";
import Sidebar from "./SideBarUser";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear errors on change
  };

  // Validating the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.description.trim())
      newErrors.description = "Description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not authorized! Please log in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        navigate("/your-complaints"); // Navigate to complaints page
      } else {
        alert(data.message || "Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="cm-div">
      <div className="complaint-container">
        <Sidebar />
        <div className="form-content">
          <div className="form-header">
            <h2>Submit Your Complaint</h2>
            <p>We value your feedback. Please describe your issue below.</p>
          </div>
          <form className="complaint-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter the subject of your complaint"
              />
              {errors.subject && (
                <p className="error-message">{errors.subject}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your complaint in detail"
              ></textarea>
              {errors.description && (
                <p className="error-message">{errors.description}</p>
              )}
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={!formData.subject || !formData.description}
            >
              Send Complaint
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;
