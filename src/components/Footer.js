import React, { useState, useEffect } from "react";
import GithubIcon from "../assets/img/github.svg";
import LinkedinIcon from "../assets/img/linkedin.svg";
import "../assets/css/Footer.css";
import Contact from "./Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle hover over a span
  const handleHover = (idx) => {
    setActiveIndex(idx);
  };

  // Function to handle animation end
  const handleAnimationEnd = () => {
    setActiveIndex(null);
  };

  useEffect(() => {
    // Animation for the footer
    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top 75%", // Start the animation when the top of the footer is 80% in view
        end: "bottom bottom", // End the animation when the bottom of the footer is at the center of the viewport
        scrub: true, // Smoothly scrub through animation as you scroll
      },
    });

    footerTl.from(".word span", {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
    footerTl.from(
      ".social__link a",
      { y: 50, opacity: 0, duration: 0.5, stagger: 0.1 },
      "-=0.3"
    );
  }, []);

  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__info">
            <div className="word">
              {Array.from("RAHUL").map((letter, idx) => (
                <span
                  key={idx}
                  className={`${activeIndex === idx ? "active" : ""}`}
                  onMouseEnter={() => handleHover(idx)}
                  onAnimationEnd={handleAnimationEnd}
                >
                  {letter}
                </span>
              ))}
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
