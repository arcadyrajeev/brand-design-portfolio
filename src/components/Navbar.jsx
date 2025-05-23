import React from "react";
import "../styles/components.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-options">
        <img src="/home.svg" />
        <span>Home</span>
      </div>

      <div className="nav-options">
        <img src="/home.svg" />
        <span>Process</span>
      </div>

      <div className="nav-options">
        <img src="/about.svg" />
        <span>About</span>
      </div>

      <div className="nav-options">
        <img src="/mail.svg" />
        <span>Contact</span>
      </div>
    </div>
  );
}
