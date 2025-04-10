// src/pages/Home/Home.js
import logo from '../../assets/img/logo.webp';
import heroImage from '../../assets/img/hero.jpg';
import { Link } from "react-router-dom"; 

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "./Home.css"; // Your custom styles (create this file)

const Home = () => {
  return (
    <div>
      <nav className="navbar">
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
            <li><a href="#">Pages</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li className="signs">
              <div className="auth-links">
              <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
              </div>
              <div className="appointment-link">
              <Link to="/book-appointment">Book Appointment</Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>

      <section className="index">
        <div id="hero">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="carousel-container d-flex align-items-center justify-content-center">
                  <div className="container-index text-center">
                    <h2 className="animate__animated animate__fadeInDown" style={{ color: "whitesmoke" }}>
                      <span className="welcome-msg">Welcome to</span><br />
                      <span className="iot-centre">TAU Hospital</span><br />
                      <span className="iot-centre">Dedicated to Care, Driven by Compassion</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-two">
          <h3 className="heading">About</h3>
          <p>Welcome to TAU Hospital, where excellence in healthcare meets compassion and innovation...</p>
          <h3 className="heading">Mission</h3>
          <p><i>To provide exceptional healthcare with compassion...</i></p>
          <h3 className="heading">Vision</h3>
          <p><i>To be a leading healthcare institution, recognized globally...</i></p>
        </div>
      </section>

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

export default Home;
