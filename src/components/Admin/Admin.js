import React, { useState } from "react";
import "../Admin/Admin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [Errors, setErrors] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!username) {
      newErrors.username = "*username is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:8000/admin/login", {
          username,
          password,
        });
        console.log(response.data);
        navigate("/adminDashboard");
      } catch (error) {
        console.error("Login failed:", error.response.data);
      }
    }
  };
  return (
    <div className="adminpage">
      <form className="form-container">
        <h1>
          <center>Admin Login</center>
        </h1>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span style={{ color: "red" }}>{Errors.username}</span>
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span style={{ color: "red" }}>{Errors.password}</span>
        <button className="login-button" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;
