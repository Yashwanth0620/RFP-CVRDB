import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("name", response.data.name);
      navigate("/");
    } catch (error) {
      alert("Invalid credentials \n Contact Management for issues");
    }
  };

  return (
    <div className="login-container">
      <div className="image">
        <img src="..\Media\Cvrh.ibp.png" alt="" />

        <div className="text">
          <h1>CVR COLLEGE OF ENGINEERING</h1>
          <h2>In Persuit Of Excellence</h2>
        </div>
      </div>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="usernmae" required />
          <br />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <br />
        </div>
        <br />

        <input type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember">Remember Me</label>

        <input type="submit" className="submit" />
        <br />
        <br />

        <Link to="/register">Forgot Password?</Link>
      </form>
    </div>
  );
}
