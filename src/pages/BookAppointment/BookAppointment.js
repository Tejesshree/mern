// // src/pages/BookAppointment/BookAppointment.js

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookAppointment.css";

// const BookAppointment = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const fullName = e.target.fullName.value;
//     const age = e.target.age.value;
//     const gender = e.target.gender.value;
//     const contactNumber = e.target.contactNumber.value;
//     const department = e.target.department.value;
//     const doctor = e.target.doctor.value;
//     const appointmentDate = e.target.appointmentDate.value;
//     const timeSlot = e.target.timeSlot.value;

//     if (
//       fullName &&
//       age &&
//       gender &&
//       contactNumber &&
//       department &&
//       doctor &&
//       appointmentDate &&
//       timeSlot
//     ) {
//       alert(`Appointment booked with ${doctor} on ${appointmentDate} at ${timeSlot}`);
//       navigate("/"); // Redirect to home or confirmation page
//     }
//   };

//   return (
//     <div className="container">
//       <div className="appointment-box">
//         <h2>Book an Appointment</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="fullName" placeholder="Full Name" required />
//           <input type="number" name="age" placeholder="Age" min="0" required />
//           <select name="gender" required defaultValue="">
//             <option value="" disabled>Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>
//           <input type="tel" name="contactNumber" placeholder="Contact Number" required />
//           <select name="department" required defaultValue="">
//             <option value="" disabled>Select Department</option>
//             <option>Cardiology</option>
//             <option>Neurology</option>
//             <option>Pediatrics</option>
//             <option>Orthopedics</option>
//             <option>Gynecology</option>
//           </select>
//           <select name="doctor" required defaultValue="">
//             <option value="" disabled>Select Doctor</option>
//             <option>Dr. John Doe (Cardiology)</option>
//             <option>Dr. Jane Smith (Neurology)</option>
//             <option>Dr. Emily Johnson (Pediatrics)</option>
//             <option>Dr. Michael Brown (Orthopedics)</option>
//             <option>Dr. Sarah Davis (Gynecology)</option>
//           </select>
//           <input type="date" name="appointmentDate" required />
//           <select name="timeSlot" required defaultValue="">
//             <option value="" disabled>Select Time Slot</option>
//             <option>09:00 AM - 10:00 AM</option>
//             <option>10:00 AM - 11:00 AM</option>
//             <option>11:00 AM - 12:00 PM</option>
//             <option>02:00 PM - 03:00 PM</option>
//             <option>03:00 PM - 04:00 PM</option>
//           </select>
//           <button type="submit">Book Appointment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookAppointment;
// src/pages/BookAppointment/BookAppointment.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";
import logo from '../../assets/img/logo.webp';
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  // Load existing appointments from localStorage
  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value.trim();
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const contactNumber = e.target.contactNumber.value.trim();
    const department = e.target.department.value;
    const doctor = e.target.doctor.value;
    const appointmentDate = e.target.appointmentDate.value;
    const timeSlot = e.target.timeSlot.value;

    if (
      fullName &&
      age &&
      gender &&
      contactNumber &&
      department &&
      doctor &&
      appointmentDate &&
      timeSlot
    ) {
      const newAppointment = {
        fullName,
        age,
        gender,
        contactNumber,
        department,
        doctor,
        appointmentDate,
        timeSlot,
      };

      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

      alert(`Appointment booked with ${doctor} on ${appointmentDate} at ${timeSlot}`);
      navigate("/"); // Redirect to home or confirmation page
    }
  };

  return (
    <div>
       <nav className="navbar" style={{backgroundColor:"#194767"}}>
        <img
          src={logo}
          alt="Hospital Logo"
          style={{
            opacity: 0.9,
            width: "100px",
            height: "70px",
            paddingLeft: "20px",
            borderRadius: "50px",
          }}
        />
        <h1 className="logo" style={{ color: "#3dbbd4", fontSize: "15px", marginTop: 0 }}>
          <span className="title">TAU HOSPITAL</span>
          <span className="sub-title">CARE, COMPASSION and CURE</span>
        </h1>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">
            <li><a href="/">Home</a></li>
        
            <li><a href="/departments">Departments</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/gallery">Gallery</a></li>
           
            <li><a href="/contact">Contact</a></li>
            <li className="signs">
              <div className="auth-links">
              <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
              </div>
              <div className="appointment-link">
              <Link to="/book-appointment" style={{color:"#3dbbd4"}}>Book Appointment</Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    
    
    <div className="container">
      <div className="appointment-box">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="number" name="age" placeholder="Age" min="0" required />
          <select name="gender" required defaultValue="">
            <option value="" disabled>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input type="tel" name="contactNumber" placeholder="Contact Number" required />
          <select name="department" required defaultValue="">
            <option value="" disabled>Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
            <option>Gynecology</option>
          </select>
          <select name="doctor" required defaultValue="">
            <option value="" disabled>Select Doctor</option>
            <option>Dr. John Doe (Cardiology)</option>
            <option>Dr. Jane Smith (Neurology)</option>
            <option>Dr. Emily Johnson (Pediatrics)</option>
            <option>Dr. Michael Brown (Orthopedics)</option>
            <option>Dr. Sarah Davis (Gynecology)</option>
          </select>
          <input type="date" name="appointmentDate" required />
          <select name="timeSlot" required defaultValue="">
            <option value="" disabled>Select Time Slot</option>
            <option>09:00 AM - 10:00 AM</option>
            <option>10:00 AM - 11:00 AM</option>
            <option>11:00 AM - 12:00 PM</option>
            <option>02:00 PM - 03:00 PM</option>
            <option>03:00 PM - 04:00 PM</option>
          </select>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
    <footer id="footer">
        <div className="contact-wrap">
          <div className="contact-in">
            <h1>Contact Info</h1>
            <h2><i className="fa fa-phone" aria-hidden="true"></i> Phone</h2>
            <p>044 22516097</p>
            <h2><i className="fa fa-envelope" aria-hidden="true"></i> Email</h2>
            <p>planetpulse@democompany.com</p>
            <h2><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
            <p>Chennai</p>
          </div>
          <div className="contact-in">
            <h1>Send a Message</h1>
            <form>
              <input type="text" placeholder="Email" className="contact-in-input" />
              <textarea placeholder="Message" className="contact-in-textarea"></textarea>
              <input type="submit" value="SUBMIT" className="contact-in-btn" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookAppointment;
