import React from "react";
import AboutImage from "../assets/img/about.jpg";
import ArrowIcon from "../assets/img/right_arrow.png";
import DownloadIcon from "../assets/img/download.png";
import "../assets/css/About.css";

const About = () => {
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
              <div className="about__cta">
                <a href="/">
                  Read More{" "}
                  <img
                    className="white_arrow"
                    src={ArrowIcon}
                    alt="arrow icon"
                  />{" "}
                </a>
              </div>
              <div className="about__cta cta-secondary">
                <a href="/">
                  My Resume <img src={DownloadIcon} alt="download icon" />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="about__description-right">
            <div className="about__image">
              <img src={AboutImage} alt="About Me svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
