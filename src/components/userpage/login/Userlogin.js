import { useState } from "react";
import React from "react";
import "./userlogin.css";
import axios from "axios";
// import login from "../../assets/Img/login.jpg";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        username,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        console.log("Login successful. User ID:", response.data.userId);
        navigate("/userDashboard");
      } else if (response.status === 401) {
        console.error("Login failed. Invalid credentials.");
        setError("Invalid username or password");
      } else {
        console.error("Unexpected error during login.");
        setError("An error occurred during login");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid username or password");
    }
  };
  return (
    <div className="overall">
      <form className="form">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="loader"></div>
          <h1 style={{ color: "white" }}>Logo Here</h1>
        </div>
        <p className="title">Login </p>
        <p className="message">Enter your credentials</p>
        <label>
          <input
            required="username required"
            placeholder="username"
            type="text"
            className="input"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          <input
            required="password required"
            placeholder="password"
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p className="signin">
          Are you new here? <a href="/register">Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Userlogin;
