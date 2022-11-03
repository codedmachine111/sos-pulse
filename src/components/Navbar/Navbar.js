import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <>
      <div className="nav-item-container">
        <div className="nav-links">
          <ul>
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
