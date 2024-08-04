import React from "react";

const Experience = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div
            className="card m-2 shadow-lg compact bg-base-100 border-0"
            style={{ width: "100%" }}
          >
            <div className="card-body">
              <h6>Publicis Sapient</h6>
              <p>Associate Technology | Feb 2022 - Present</p>
              <ul>
                <li>
                  Developed Java microservices for clients like Verizon and
                  Suncorp.
                </li>
                <li>
                  Implemented technologies including Spring Reactive and
                  GraphQL.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver client
                  projects.
                </li>
                <li>Utilized Java expertise to drive innovative solutions.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="card m-2 shadow-lg compact bg-base-100 border-0"
            style={{ width: "100%" }}
          >
            <div className="card-body">
              <h6>Tata Consultancy Services</h6>
              <p>Systems Engineer | June 2019 - Feb 2022</p>
              <ul>
                <li>
                  Spearheaded Java microservices development for banking clients
                  such as Western Union.
                </li>
                <li>
                  Employed Spring Boot framework to streamline project
                  development.
                </li>
                <li>
                  Engineered solution-driven projects, optimizing client
                  objectives.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
