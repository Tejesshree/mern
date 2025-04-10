// // src/pages/SignIn/SignIn.js
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./SignIn.css";

// const SignIn = () => {
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const username = e.target.username.value;
//     const password = e.target.password.value;

//     // Example login logic
//     if (username && password) {
//       navigate("/"); // Redirect to homepage
//     } else {
//       setError("Invalid username or password. Please try again.");
//     }
//   };

//   return (
//     <div className="signin-container">
//       <div className="sign-in-box">
//         <h2>Sign In to TAU Hospital</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="username" placeholder="Username" required />
//           <input type="password" name="password" placeholder="Password" required />
//           <button type="submit">Sign In</button>
//         </form>
//         {error && <p className="error-message">{error}</p>}
//         <p className="forgot-password">
//            <Link to="/forgot-password">Forgot Password?</Link>
//         </p>
//         <p className="signup-text">
//           New user? <Link to="/sign-up">Sign Up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
// src/pages/SignIn/SignIn.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState("");
  const [storedUser, setStoredUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load user from local storage on component mount
    const userData = localStorage.getItem("user");
    if (userData) {
      setStoredUser(JSON.parse(userData));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value;

    if (storedUser) {
      if (
        username === storedUser.username &&
        password === storedUser.password
      ) {
        setError("");
        navigate("/"); // Successful login
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } else {
      setError("No user found. Please sign up first.");
    }
  };

  return (
    <div className="signin-container">
      <div className="sign-in-box">
        <h2>Sign In to TAU Hospital</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
        <p className="signup-text">
          New user? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
