import React, { lazy, Suspense } from "react";
import { Element } from "react-scroll";
const Navbar = lazy(() => import("../components/Navbar"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Element name="home">
          <HeroSection />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Footer />
        </Element>
      </Suspense>
    </>
  );
};

export default Home;
