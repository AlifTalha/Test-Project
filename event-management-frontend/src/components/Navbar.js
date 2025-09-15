import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🎉 Event Management</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/manage">Manage Events</Link>
      </div>
    </nav>
  );
};

export default Navbar;
