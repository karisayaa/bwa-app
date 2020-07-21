import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="header">
      <div className="brand">
        <Link to="/">BWA</Link>
      </div>
      <div className="header-link">
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>
      </div>
    </nav>
  );
}
