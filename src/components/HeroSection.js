import React from "react";
import { Link } from "react-scroll";
import HelloImg from "../assets/img/hello.png";
import GithubIconBlack from "../assets/img/github_black.svg";
import LinkedinIconBlack from "../assets/img/linkedin_black.svg";
import GithubIcon from "../assets/img/github.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import { useTheme } from '../ThemeContext';
import "../assets/css/HeroSection.css";

const HeroSection = () => {

  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__sub">
          <img src={HelloImg} alt="Hello" />
          <h3>
            &nbsp; I'm <span>Rahul Kumar Mishra</span>.
          </h3>
        </div>
        <div className="hero__title">
          <h1>Front End Developer</h1>
        </div>
        <div className="hero__description">
          <p>
            A creative Computer Science Engineer skilled in React, dedicated to
            delivering polished front-end solutions that fuse functionality with
            aesthetics.
          </p>
        </div>
        <div className="hero__cta">
          <Link to="contact" smooth={true} type="button">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hero__social">
        <div className="socials__link">
          <a
            href="https://www.linkedin.com/in/thecyberatom/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <img src={theme === 'light' ? LinkedinIconBlack : LinkedinIcon} alt="Linkedin Icon" />
          </a>
          <a
            href="https://github.com/TheCyberAtom"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <img src={theme === 'light' ? GithubIconBlack : GithubIcon} alt="Github Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
