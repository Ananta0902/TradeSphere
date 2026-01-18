import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./Auth.css";

const Signup = () => {

  const navigate = useNavigate();

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
        "https://tradesphere-backend.onrender.com/signup",
        form
      );

      if (res.data.success) {
        toast.success("Account created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1200);

      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      toast.error("Server error");
      console.log(err);
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

        <h2>Create Zerodha Account</h2>

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
            Signup
          </button>

        </form>

        <div className="links">
          <Link to="/login">Already have an account? Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Signup;

