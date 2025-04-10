// src/pages/BookAppointment/BookAppointment.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";

const BookAppointment = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const contactNumber = e.target.contactNumber.value;
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
      alert(`Appointment booked with ${doctor} on ${appointmentDate} at ${timeSlot}`);
      navigate("/"); // Redirect to home or confirmation page
    }
  };

  return (
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
  );
};

export default BookAppointment;
