// // src/pages/SignUp/SignUp.js
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./SignUp.css";


// const SignUp = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.newUsername.value;
//     const email = e.target.email.value;
//     const password = e.target.newPassword.value;
//     const confirmPassword = e.target.confirmPassword.value;

//     if (password !== confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (username && email && password) {
//       // Redirect after successful sign-up
      // navigate("/");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="sign-up-box">
//         <h2>Create Your Account</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="newUsername" placeholder="Username" required />
//           <input type="email" name="email" placeholder="Email" required />
//           <input type="password" name="newPassword" placeholder="Password" required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
//           <button type="submit">Sign Up</button>
//         </form>
//         {error && <p className="signup-error-message">{error}</p>}

//         <p className="signin-text">
//           Already have an account? <Link to="/sign-in">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
// src/pages/SignUp/SignUp.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      // Optional: redirect to home if user already signed up
      // navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.newUsername.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (username && email && password) {
      const userData = {
        username,
        email,
        password,
      };

      // Save user to local storage
      localStorage.setItem("user", JSON.stringify(userData));
      
      // Clear error if any and redirect
      setError("");
      navigate("/");
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="signup-container">
      <div className="sign-up-box">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="newUsername" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="newPassword" placeholder="Password" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="signup-error-message">{error}</p>}

        <p className="signin-text">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
