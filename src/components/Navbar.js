import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../ThemeContext";
import sun from "../assets/img/sun.png";
import MenuOpen from "../assets/img/menu.png";
import moon from "../assets/img/half-moon.png";
import MenuClose from "../assets/img/close.png";
import WhiteLogo from "../assets/img/logo_white.svg";
import BlackLogo from "../assets/img/logo_black.svg";
import GithubIcon from "../assets/img/github.svg";
import MenuOpenWhite from "../assets/img/white_menu.png";
import MenuCloseWhite from "../assets/img/close_white.png";
import LinkedinIcon from "../assets/img/linkedin.svg";
import LinkedinIconBlack from "../assets/img/linkedin_black.svg";
import GithubIconBlack from "../assets/img/github_black.svg";

import { gsap } from "gsap";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  if (isMenuOpen) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }

  const navListRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 });
    const navItems = navListRef.current.querySelectorAll(
      ".header__link-wrapper"
    );
    navItems.forEach((item, index) => {
      tl.from(item, { opacity: 0, duration: 0.25 }, `+=${index * 0.1}`);
    });

    tl.play();
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src={theme === "light" ? BlackLogo : WhiteLogo}
              alt="Rahul Mishra Logo"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-title">Rahul Mishra</span>
        </div>
        <div className="header__main">
          <ul className="header__links" ref={navListRef}>
            <li className="header__link-wrapper">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                className="header__link"
              >
                Home
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                className="header__link"
              >
                About
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                className="header__link"
              >
                Projects
              </Link>
            </li>
            <li className="header__link-wrapper">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                className="header__link"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="header__main-ham-menu-cont" onClick={toggleMenu}>
            <img
              src={theme === "dark" ? MenuOpenWhite : MenuOpen}
              alt="hamburger menu"
              className={`header__main-ham-menu ${isMenuOpen ? "hide" : ""}`}
            />
            <img
              src={theme === "dark" ? MenuCloseWhite : MenuClose}
              alt="hamburger menu close"
              className={`header__main-ham-menu-close ${
                isMenuOpen ? "" : "hide"
              }`}
            />
          </div>
          <div className="theme__toggle">
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              aria-label="theme toggle button"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
            <label for="checkbox" className="checkbox-label">
              <img src={sun} className="sun" alt="sun" />
              <img src={moon} className="moon" alt="moon" />
              <span class="ball"></span>
            </label>
          </div>
        </div>
      </div>
      <div className={`header__sm-menu ${isMenuOpen ? "show" : "hide"}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                onClick={toggleMenu}
                className="header__link"
              >
                Home
              </Link>
            </li>
            <li className="header__sm-menu-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={100}
                onClick={toggleMenu}
                className="header__link"
              >
                About
              </Link>
            </li>
            <li className="header__sm-menu-link">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
                onClick={toggleMenu}
                className="header__link"
              >
                Projects
              </Link>
            </li>
            <li className="header__sm-menu-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                onClick={toggleMenu}
                className="header__link"
              >
                Contact
              </Link>
            </li>
            <li className="header__sm-menu-link menu__icons">
              <a
                href="https://www.linkedin.com/in/thecyberatom/"
                aria-label="linkedin profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={theme === "light" ? LinkedinIconBlack : LinkedinIcon}
                  alt="Linkedin Icon"
                />
              </a>
              <a
                href="https://github.com/TheCyberAtom"
                aria-label="github profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={theme === "light" ? GithubIconBlack : GithubIcon}
                  alt="Github Icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
