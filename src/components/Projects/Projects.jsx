import React from "react";

const Projects = () => {
  return (
    <>
      <div className="row ">
        <div className="col-md-12">
          <div className=" card shadow-lg compact bg-base-100 cursor-pointer border-0" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Verizon</h5>
              <ul>
                <li>Implemented GraphQL to provide a flexible and intuitive interface for querying
                  customer data across different domains.
                </li>
                <li>Implemented microservices architecture for scalability and performance
                  optimization.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <div className="card shadow-lg compact bg-base-100 cursor-pointer border-0" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Suncorp</h5>
              <ul>
                <li>Created an error tracking tool to trigger alarms when error goes beyond threshold.
                </li>
                <li>Made use of AWS lambda and S3 to build serverless application.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
