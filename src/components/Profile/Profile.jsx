import React from "react";
import cv from "../../assets/shubham.pdf";
import profileImg from "../../assets/profile.jpg";
import "../Profile/profile.css";

const Profile = () => {
  return (
    <div
      className="card shadow-lg compact bg-base-100 mt-3 rounded-2 border-0 d-flex align-items-center justify-content-center"
      style={{ height: "20rem" }}
    >
      <div className="text-center py-8">
        <div className="avatar opacity-90 mb-4">
          {/* <div className="rounded-circle overflow-hidden" style={{ width: "100px", height: "100px" ,objectFit: "cover"}}>
          <img
            src={profileImg}
            alt="Shubham Ruwasia"
            className="img-fluid"
          />
        </div> */}

          <div className="avatar mb-4">
            <img
              src={profileImg}
              alt="Shubham Ruwasia"
              className="rounded-circle"
              style={{ width: "100px", height: "100px"}}
            />
          </div>
        </div>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">
              Shubham Ruwasia
            </span>
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            ⚡ Senior Software Engineer | Java | Spring Boot | Microservices ⚡
          </div>
        </div>
        <a href={cv} download="">
          <button className="download-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
