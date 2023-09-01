import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
// import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection to="home" />
    <About to="about" />
    <Projects to="projects" />
    <Footer to="contact" />
    {/* <Skills /> */}
    </>
  )
}

export default Home;