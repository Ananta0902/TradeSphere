import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Auth.css";   

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "https://tradesphere-09j7.onrender.com/login",
      form,
      { withCredentials: true }
    );

    if (res.data.success) {

      toast.success("Welcome to Zerodha!");
      window.location.href ="https://tradesphere-dashboard.onrender.com";

    } else {
      toast.error(res.data.message || "Invalid credentials");
    }

  } catch (err) {
    toast.error("Server not reachable");
    console.log("LOGIN ERROR:", err);
  }
};

  return (
    <div className="auth-wrapper">

      <Toaster position="top-right" />

      <div className="auth-card">

        <img
          className="logo"
          src="https://zerodha.com/static/images/logo.svg"
          alt="logo"
        />

        <h2>Login to Kite</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="links">
          <Link to="/signup">New to Zerodha? Signup</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;






