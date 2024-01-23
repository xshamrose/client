import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./userReg.css";

function UserRegister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        console.log("Registration successful. User ID:", response.data.userId);
        window.alert(JSON.stringify(response.data));
        navigate("/userportal");
      } else {
        console.error("Registration failed");
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <>
      <div className="overall">
        <div className="second">
          <div className="userlogin">
            <form>
              <div className="form-outline mb-2">
                <label className="form-label tool" htmlFor="form2Example1">
                  {" "}
                  <h2>Student Registration</h2>
                  <p className="message">Enter your details </p>
                </label>
              </div>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  User Name
                </label>
                <input
                  required="username required"
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-outline mb-2">
                <label className="form-label" htmlFor="form2Example1">
                  Email
                </label>
                <input
                  required="email required"
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">
                  Password
                </label>
                <input
                  required="password required"
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              <center>
                {" "}
                <button
                  type="button"
                  className="submit-reg"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>
              </center>

              <div className="text-center">
                <p>
                  Already a Student <a href="/userportal">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
