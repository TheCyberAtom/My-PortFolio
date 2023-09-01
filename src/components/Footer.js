import React from "react";
import GithubIcon from "../assets/img/github.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import "../assets/css/Footer.css";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__info">
            <div className="wrapper">
              <span>R</span>
              <span>A</span>
              <span>H</span>
              <span>U</span>
              <span>L</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>K</span>
              <span>U</span>
              <span>M</span>
              <span>A</span>
              <span>R</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>I</span>
              <span>S</span>
              <span>H</span>
              <span>R</span>
              <span>A</span>
            </div>
            <div className="social__link">
              <a
                href="https://www.linkedin.com/in/thecyberatom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinIcon} alt="Linkedin Icon" />
              </a>
              <a
                href="https://github.com/TheCyberAtom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GithubIcon} alt="Github Icon" />
              </a>
            </div>
          </div>
          <div className="footer__contact">
            <Contact />
          </div>
        </div>
        <div className="footer_copyright">
          <span>
            &#169;Copyright 2023. Made by <a href="/">Rahul Kumar Mishra</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
