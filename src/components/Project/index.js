import React from "react";
import { formatProjectTitle } from "../../utils";
import "./style.css";
// ^ importing react, a formatting util, and styles

const Project = ({ project }) => {
  return (
    <div className="col">
      <div className="card h-100">
        {/* background images for the cards, this works when images have exact same name as project titles */}
        <img
          src={require(`../../assets/projects/${project.name}.png`)}
          className="card-img"
          alt={formatProjectTitle(project.name)}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h3 className="card-title">
            {/* link to deloyed project */}
            <a href={project.link} className="card-text me-3">
              {formatProjectTitle(project.name)}
            </a>
            {/* link to project's repo */}
            <a href={project.repo} className="card-text">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          {/* technologies used for projects */}
          <p className="card-text">Built with: {project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
