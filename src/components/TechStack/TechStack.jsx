import React from "react";

const TechStack = () => {
  return (
    <div className="card shadow-lg compact bg-base-100 mt-3 rounded-2 border-0 p-2">
      <div className="grid place-items-center ">
        <div className="avatar opacity-90"></div>
        <div className="text-center mx-auto">
          <h3>Tech Stack</h3>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            <span class="badge text-bg-secondary p-2 m-2">Java core</span>
            <span class="badge text-bg-secondary p-2 m-2">
              SpringBoot and SpringReactive
            </span>
            <span class="badge text-bg-secondary p-2 m-2">
              GraphQL and REST webservices
            </span>
            <span class="badge text-bg-secondary p-2 m-2">AWS Lambda</span>
            <span class="badge text-bg-secondary p-2 m-2">MYsql and Cassendra</span>
            <span class="badge text-bg-secondary p-2 m-2">
              Microsoft windows and Linux
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
