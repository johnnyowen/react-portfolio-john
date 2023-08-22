import React from "react";
import { projects } from "../data";
import Project from "../components/Project";
// ^ importing react and project components

const Portfolio = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {/* maps all projects from the data.js array to display them on portfolio page */}
      {projects.map((project, i) => (
        <Project project={project} key={i} />
      ))}
    </div>
  );
};

export default Portfolio;
