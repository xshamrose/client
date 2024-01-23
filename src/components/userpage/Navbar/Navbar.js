import React from "react";
import "./navbar.css";
import dashboard from "../../../assets/Img/dashboard.svg";
import viewform from "../../../assets/Img/viewform.svg";
import addform from "../../../assets/Img/add.svg";
import changepass from "../../../assets/Img/changepassword.svg";
import logout from "../../../assets/Img/logout.svg";
import avatar from "../../../assets/Img/avatar.svg";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  return (
    <div className="side-navbar">
      <div className="button-container">
        <Link to="myprofile">
          <button className="button">
            <div style={{ color: "white" }}>
              <Link
                to="/myprofile"
                id={location.pathname === "/myprofile" ? "active" : ""}
              >
                <img src={avatar} alt="avatar" className="icon-user" />
                <div className="name">My profile</div>
              </Link>
            </div>
          </button>
        </Link>
        <Link to="studentDashboard">
          <button className="button">
            <Link
              to="/studentDashboard"
              id={location.pathname === "/studentDashboard" ? "active" : ""}
            >
              <img src={dashboard} alt="dashboard" className="icon-user" />
              {/* <svg
            className="icon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
          </svg> */}
              <div className="name">Dashboard</div>
            </Link>
          </button>
        </Link>
        <Link to="addform">
          <button className="button">
            <Link
              to="/addForm"
              id={location.pathname === "/addForm" ? "active" : ""}
            >
              <img src={addform} alt="addform" className="icon-user" />

              <div className="name">Add forms</div>
            </Link>
          </button>
        </Link>
        <Link to="viewform">
          <button className="button">
            <Link
              to="/viewform"
              id={location.pathname === "/viewform" ? "active" : ""}
            >
              <img alt="viewforms" src={viewform} className="icon-user" />
              <div className="name">view form</div>
            </Link>
          </button>
        </Link>
        <button className="button">
          <img src={changepass} alt="changepassword" className="icon-user" />
          <div className="name">Change password</div>
        </button>
      </div>
      <div>
        <button className="button">
          <img src={logout} alt="logout" className="icon-user" />
          <div className="name">Log out</div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
