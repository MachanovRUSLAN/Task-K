import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/users">User Profiles</Link>
        <Link to="activities">User Activities</Link>
      </ul>
    </div>
  );
}

export default Navbar;
