import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
