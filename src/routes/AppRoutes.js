// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ContactPage from "../pages/Contact/Contact";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Departments from "../pages/Departments/Departments"; // Correct import for Departments

const Doctors = () => <div>Doctors Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const Blog = () => <div>Blog Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;
