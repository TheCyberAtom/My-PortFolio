import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Project from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Skills from '../components/Skills';

const Home = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <Project />
    <Contact />
    <Footer />
    {/* <Skills /> */}
    </>
  )
}

export default Home;