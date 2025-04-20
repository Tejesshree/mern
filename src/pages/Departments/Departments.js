import React, { useState, useEffect } from "react";
import "./Departments.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const deptData = [
      {
        name: "Cardiology",
        img: "https://via.placeholder.com/300x200?text=Cardiology",
        desc: "Specializes in diagnosing and treating heart conditions."
      },
      {
        name: "Neurology",
        img: "https://via.placeholder.com/300x200?text=Neurology",
        desc: "Deals with disorders of the nervous system and brain."
      },
      {
        name: "Orthopedics",
        img: "https://via.placeholder.com/300x200?text=Orthopedics",
        desc: "Focuses on bones, joints, and muscular disorders."
      },
      {
        name: "Pediatrics",
        img: "https://via.placeholder.com/300x200?text=Pediatrics",
        desc: "Provides medical care for infants, children, and adolescents."
      },
      {
        name: "Dermatology",
        img: "https://via.placeholder.com/300x200?text=Dermatology",
        desc: "Specializes in skin, hair, and nail disorders."
      },
      {
        name: "Gynecology",
        img: "https://via.placeholder.com/300x200?text=Gynecology",
        desc: "Focused on women's health and reproductive systems."
      },
      {
        name: "ENT",
        img: "https://via.placeholder.com/300x200?text=ENT",
        desc: "Treats ear, nose, and throat issues and related areas."
      },
      {
        name: "Oncology",
        img: "https://via.placeholder.com/300x200?text=Oncology",
        desc: "Dedicated to the diagnosis and treatment of cancer."
      },
      {
        name: "Radiology",
        img: "https://via.placeholder.com/300x200?text=Radiology",
        desc: "Uses imaging technology for diagnosis and treatment planning."
      },
      {
        name: "Urology",
        img: "https://via.placeholder.com/300x200?text=Urology",
        desc: "Focuses on urinary tract and male reproductive organs."
      }
    ];
    setDepartments(deptData);
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-primary mb-4">Our Departments</h2>
      <div className="row">
        {departments.map((dept, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card department-card h-100 shadow-sm">
              <img src={dept.img} className="card-img-top dept-img" alt={dept.name} />
              <div className="card-body">
                <h5 className="card-title text-info">{dept.name}</h5>
                <p className="card-text">{dept.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
