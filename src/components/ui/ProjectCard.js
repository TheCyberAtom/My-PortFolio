import React from "react";
import "../../assets/css/ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project__card">
      <div className="project__conatiner">
        <div className="project__card-image">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="project__card-content">
          <div className="project__card-content-title">
          <h3>{project.name}</h3>
          </div>
          <div className="project__card-content-desc">
          <p>{project.description}</p>
          </div>
          <div className="project__card-links">
            <a
              href={project.liveWebLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
