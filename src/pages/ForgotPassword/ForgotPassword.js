// src/pages/ForgotPassword/ForgotPassword.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.resetEmail.value;

    if (email) {
      setMessage("A password reset link has been sent to your email.");
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-password-box">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address below and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="resetEmail" placeholder="Enter your email" required />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && (
          <p id="reset-message" style={{ color: message.includes("sent") ? "green" : "red" }}>
            {message}
          </p>
        )}
        <p className="back-to-signin">
        <Link to="/sign-in">Back to Sign In</Link>
        </p>
        
      </div>
    </div>
  );
};

export default ForgotPassword;
