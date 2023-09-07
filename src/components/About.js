import React from "react";
import HeroImg from "../assets/img/hero_image.png";
import "../assets/css/About.css";

const About = () => {
  // const handleDownload = () => {
  //   // Generate the URL for your resume file
  //   const resumeUrl = process.env.PUBLIC_URL + "/resume.pdf";

  //   const link = document.createElement("a");
  //   link.href = resumeUrl;
  //   link.target = "_blank";
  //   link.download = "your-resume.pdf";
  //   link.click();
  // };

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
                <a href="/">Read More. . .</a>
              </div>
              <div className="about__cta cta-secondary">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
