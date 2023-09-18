import React, { useEffect } from "react";
import { Link } from "react-scroll";
import HelloImg from "../assets/webp_img/hello.webp";
import GithubIconBlack from "../assets/webp_img/github_black.svg";
import LinkedinIconBlack from "../assets/webp_img/linkedin_black.svg";
import GithubIcon from "../assets/webp_img/github.svg";
import LinkedinIcon from "../assets/webp_img/linkedin.svg";
import { useTheme } from "../ThemeContext";
import "../assets/css/HeroSection.css";
import gsap from "gsap";

const HeroSection = () => {
  const { theme } = useTheme();

  const animateHeroSection = () => {
    const timeline = gsap.timeline();
    timeline
      .from(".hero__sub img", { opacity: 0, x: -30, duration: 0.6 })
      .from(".hero__sub h3", { opacity: 0, x: -30, duration: 0.6 }, "-=0.3")
      .from(".hero__title h1", { opacity: 0, y: -30, duration: 0.6 }, "-=0.3")
      .from(
        ".hero__description p",
        { opacity: 0, y: 30, duration: 0.6 },
        "-=0.3"
      )
      .from(".hero__cta a", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
      .from(".socials__link a", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3");
  };

  useEffect(() => {
    animateHeroSection();
    gsap.to(".hero__container", {
      scrollTrigger: {
        trigger: ".hero__container",
        start: "bottom bottom", // Start fading when the bottom of the container hits the center of the viewport
        end: "bottom top", // End fading when the bottom of the container moves out of the viewport
        scrub: true, // Smoothly scrub through fading as you scroll
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

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
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={100}
            type="button"
          >
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
            <img
              src={theme === "light" ? LinkedinIconBlack : LinkedinIcon}
              alt="Linkedin Icon"
            />
          </a>
          <a
            href="https://github.com/TheCyberAtom"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <img
              src={theme === "light" ? GithubIconBlack : GithubIcon}
              alt="Github Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
