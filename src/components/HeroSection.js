import React from "react";
import { Link } from "react-scroll";
import "../assets/css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__container">
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
    </div>
  );
};

export default HeroSection;
