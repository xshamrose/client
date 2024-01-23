import React from "react";
import "./User.css";
import Navbar from "../Navbar/Navbar.js";

function User({ children }) {
  return (
    <>
      <div className="overall-content">
        <div className="usercontent">
          <Navbar />
        </div>
        <div className="main-content">{children}</div>
      </div>
    </>
  );
}

export default User;
