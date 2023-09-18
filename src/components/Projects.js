import React from "react";
// import { Link } from "react-scroll";
import ProjectCard from "./ui/ProjectCard";
import MarkdownProjectImg from "../assets/webp_img/markdown_editor.webp";
import PasswordProjectImg from "../assets/webp_img/password_generate.webp";
// import HeroProjectIng from "../assets/webp_img/hero_bg.jpeg";
import "../assets/css/Projects.css";

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      name: "MarkDown Previewer",
      description:
        "A website that offers a user-friendly interface for creating and editing Markdown.",
      image: MarkdownProjectImg,
      liveWebLink: "https://livemarkdowneditor.netlify.app",
      sourceCodeLink: "https://github.com/TheCyberAtom/Markdown-Editor",
      tags: [],
    },
    {
      id: 2,
      name: "Password Generator",
      description:
        "A website that offers a user-friendly interface for generating passwords according to user's preference.",
      image: PasswordProjectImg,
      liveWebLink: "https://easy-generate-password.netlify.app/",
      sourceCodeLink: "https://github.com/TheCyberAtom/Password-Generator",
      tags: [],
    },
    // {
    //   id: 3,
    //   name: "MarkDown Previewer",
    //   description: "A website that offers a user-friendly interface for creating and editing Markdown.",
    //   image: HeroProjectIng,
    //   liveWebLink: "https://livemarkdowneditor.netlify.app",
    //   sourceCodeLink: "https://github.com/TheCyberAtom/Markdown-Editor",
    //   tags: [],
    // },
  ];

  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__title">
          <span>PROJECTS</span>
          <h2>Code-Powered Designs in Action</h2>
        </div>
        <div className="projects__lists">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {/* <div className="projects__cta">
          <Link to="contact" smooth={true} type="button">
            View All Projects
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
