import React from "react";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import SocialLinks from "../SocialLinks/SocialLinks";
import Experience from "../Experience/Experience";
import TechStack from "../TechStack/TechStack";
import Education from "../Education/Education";

const Home = () => {
  return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column align-items-center m-2 rounded-5 w-full">
        <div className="row w-100">
          <div className="col-md-4 d-flex flex-column ">
            <div className="container flex-grow-1 p-3 mb-3">
              <Profile />
              <SocialLinks />
              <TechStack />
              <Education />
            </div>
          </div>
          <div className="col-md-8 d-flex flex-column mt-4">
            <div
              className="container flex-grow-1 p-3 mb-3"
              style={{
                borderColor: "#e5e7eb",
                backgroundColor: "#F6F5F2",
              }}
            >
              <h3 className="mb-4"> Projects</h3>
              <Projects />
            </div>
            <div
              className="container flex-grow-1 p-3 mb-3"
              style={{
                borderColor: "#e5e7eb",
                backgroundColor: "#F6F5F2",
              }}
            >
              <h3 className="mb-4"> Experience</h3>
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
