import React from "react";
import { Link } from "react-router-dom";

export default function SidebarBox({ sidebarOpen, toggleSidebar }) {
  if (!sidebarOpen) return null; // Prevent rendering when closed

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={toggleSidebar}>
              News
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="overlay" onClick={toggleSidebar}></div>
    </>
  );
}
