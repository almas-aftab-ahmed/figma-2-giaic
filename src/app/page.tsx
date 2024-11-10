"use client";
import React from 'react'
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import About from './components/About';



const Home = () => {
  useEffect (() =>{

    AOS.init({
      easing:'ease-out-back',
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    
    });
    AOS.refresh();
  },[]);
  return (
    <main>
        <Hero/>
        <Projects/>
        <Skills/>
        <Contact/>
        <About/>
    </main>
  )
};

export default Home;
