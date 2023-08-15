import React from 'react';
import GithubIcon from "../assets/img/github.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__container">
        <div className="footer__main">
        <div className="footer__left">
          <h2>Rahul Kumar Mishra</h2>
          <p>A creative Computer Science Engineer skilled in React, dedicated to
            delivering polished front-end solutions that fuse functionality with
            aesthetics.
          </p>
        </div>
        <div className="footer__right">
          <h2>Social</h2>
          <div className="footer_right-link">
            <a href="https://www.linkedin.com/in/thecyberatom/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="Linkedin Icon" />
              </a>
              <a href="https://github.com/TheCyberAtom" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} alt="Github Icon" />
              </a>
          </div>
        </div>
        </div>
        <div className="footer_copyright">
            <span>&#169;Copyright 2023. Made by <a href="/">Rahul Kumar Mishra</a></span>
        </div>
      </div>
    </div>
  )
}

export default Footer;