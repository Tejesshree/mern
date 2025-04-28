// src/pages/Home/Home.js
import logo from '../../assets/img/logo.webp';
import heroImage from '../../assets/img/hero.jpg';
import { Link } from "react-router-dom"; 

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import lobby from '../../assets/img/infs.jpg';
import Reception from '../../assets/img/inf2.jpg';
import waiting_area from '../../assets/img/inf3.jpg'; 
import "./Home.css"; // Your custom styles (create this file)

const Home = () => {
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
          <p>At TAU Hospital, we are dedicated to providing compassionate, world-class healthcare to every patient we serve. With a legacy of excellence and a commitment to innovation, our hospital combines cutting-edge medical technology with a team of highly skilled doctors, nurses, and healthcare professionals.</p>
          Since our founding, TAU Hospital has been a trusted center for comprehensive medical care — from preventive screenings and outpatient services to advanced surgeries and critical care. Our patient-centered approach ensures that every individual receives personalized treatment, attention, and respect throughout their healthcare journey.
          We proudly offer a wide range of specialties, including cardiology, oncology, orthopedics, pediatrics, maternity care, and more, all under one roof. Our mission is not just to treat illnesses, but to promote overall wellness and improve quality of life.
          At TAU Hospital, your health is our highest priority. We strive to create a welcoming, safe, and healing environment where patients and families feel supported and confident in their care.
          <p><i>Experience healthcare the way it should be — compassionate, innovative, and focused on you.</i></p>
          <div class="card w-100 mb-3 justify-content-center align-items-center">
      <div class="card-body">
       <h5 class="card-title">Mission</h5>
       <p class="card-text">To be a leading healthcare institution known for excellence in patient care, advanced medical innovation, and a commitment to improving the health and well-being of our community.</p>
    
      </div>
      </div>

        <div class="card w-100 justify-content-center mb-3">
   <div class="card-body">
    <h5 class="card-title">Vision</h5>
    <p class="card-text"><ul>To deliver compassionate, high-quality, and affordable healthcare services to every patient.</ul>
          <ul>To embrace cutting-edge technology and medical practices for accurate diagnosis and effective treatment.</ul>
          <ul>To foster a healing environment that respects the dignity, needs, and values of each individual.</ul>
          <ul>To engage in continuous quality improvement and patient safety initiatives.</ul>
          <ul>To continually educate, train, and empower our healthcare team for professional and personal growth.</ul>
          <ul>To actively promote health awareness, disease prevention, and community outreach.</ul>
          <ul>To collaborate with other healthcare providers and organizations to enhance the overall health of our community.</ul></p>
   
      </div>
      </div>
          </div>

      
{/* Gallery Carousel */}
<div id="galleryCarousel" className="carousel slide gallery-carousel" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#galleryCarousel"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#galleryCarousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#galleryCarousel"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={lobby} className="d-block w-100" alt="Lobby Area" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Collaborative Care</h5>
        <p>Our doctors work together in a modern, open hospital environment to deliver exceptional healthcare.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Reception} className="d-block w-100" alt="Reception Desk" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Swift Emergency Response</h5>
        <p>Our dedicated team ensures rapid and expert care when every second matters.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={waiting_area} className="d-block w-100" alt="Waiting Area" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Compassionate Patient Support</h5>
        <p>Medical professionals providing attentive and coordinated care in every moment.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#galleryCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#galleryCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
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
