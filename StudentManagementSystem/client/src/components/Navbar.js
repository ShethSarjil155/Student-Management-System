import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation if routing is enabled
import "./navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Side: Logo */}
      <div className="navbar-logo">
        <h1>Portal</h1>
      </div>

      {/* Right Side: Links */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Register
        </Link>
        <Link to="/student-login" className="navbar-link">
          Student
        </Link>
        <Link to="/admin-login" className="navbar-link">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
