import React from "react";
import cv from "../../assets/shubham.pdf";
import profileImg from "../../assets/profile.jpg"

const Profile = () => {
  return (
    <div
      className="card shadow-lg compact bg-base-100 mt-3 rounded-2 border-0"
      style={{ height: "20rem" }}
    >
      <div className="grid place-items-center py-8">
      <div className="avatar opacity-90">
    <div className="mb-8 rounded-full w-20 h-20 ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
      {/* <img
        src={profileImg}
        alt="shubham ruwasia"
        className="profile"
        style={{width: "100px" }}
      /> */}
    </div>
  </div>
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">
              SHUBHAM RUWASIA
            </span>
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            ⚡Senior Software Engineer | Java | Spring Boot | Microservices⚡
          </div>
        </div>
        {/* <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
          download=""
          rel="noreferrer"
        >
          Download Resume
        </a> */}
        <a href={cv} download="">
        <button> Download Resume
        </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
