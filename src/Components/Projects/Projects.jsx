import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projects</span>...
      </h3>
      <div className="container my-5">
        <div class="row">
          <div class="col-12 col-md-6 px-4 py-4">
            <img
              src="../src/assets/project 1.jpg"
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <img
              src="../src/assets/project 2.png"
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <img
              src="../src/assets/project 4.png"
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div class="col-12 col-md-6 px-4 py-4">
            <img
              src="../src/assets/project 3.png"
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
