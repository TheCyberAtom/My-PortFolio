import React, { useEffect } from "react";
import HeroImg from "../assets/img/hero_image.png";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/About.css";

const About = () => {
  gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

  useEffect(() => {
    // Animation for the About section
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about__container",
        start: "top bottom", // Start the animation when the top of the container hits the center of the viewport
        end: "bottom bottom", // End the animation when the bottom of the container hits the center of the viewport
        scrub: true, // Smoothly scrub through animation as you scroll
      },
    });

    // Initially, make the image larger
    aboutTl
      .from(".about__title", { x: -50, scale: 1.25, opacity: 0, duration: 1 })
      .from(
        ".about__image img",
        { scale: 1.75, opacity: 0, duration: 2.0 },
        "-=0.75"
      )
      .from(
        ".about__description-left",
        {
          x: -50,
          opacity: 0,
          duration: 2,
        },
        "-=1.5"
      )
      .from(".about__cta", { y: 50, opacity: 0, duration: 0.5 }, "-=1");

    // Fade out the About section when scrolling out
    gsap.to(".about__container", {
      scrollTrigger: {
        trigger: ".about__container",
        start: "bottom 20%", // Start fading when the bottom of the container hits the center of the viewport
        end: "bottom top", // End fading when the bottom of the container moves out of the viewport
        scrub: true, // Smoothly scrub through fading as you scroll
      },
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">
          <span>ABOUT</span>
          <h2>Making Designs Clickable and Beautiful..</h2>
        </div>
        <div className="about__desc-container">
          <div className="about__description-left">
            <div className="about__description">
              <p>
                As a Computer Science Engineer and design enthusiast, I am
                passionate about creating engaging and intuitive websites
                through front end development. With over 2 years of experience
                working with React and Angular, I have developed a deep
                understanding of these technologies and their best practices. I
                take pride in delivering high-quality code and collaborating
                with cross-functional teams to achieve project success. Always
                looking for new opportunities to apply my expertise and
                contribute to innovative projects in the field of front end
                development.
              </p>
              <br></br>
              <p>
                In my journey, I love pushing creativity and functionality in
                each project. With a strong tech background and design
                knowledge, I bring both worlds together to make websites that
                look awesome and work smoothly.
              </p>
            </div>
            <div className="cta">
              <div className="about__cta primary">
                <Link to="/about">Read More. . .</Link>
              </div>
              <div className="about__cta cta-secondary">
                <a href="/resume.pdf" target="_blank" aria-label="Resume" rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
            </div>
          </div>
          <div className="about__description-right">
            <div className="about__image">
              <img src={HeroImg} alt="My Profile Pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
