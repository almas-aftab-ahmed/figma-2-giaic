import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/cartoon.jpg)] bg-cover"
      style={{ backgroundSize: "35%", backgroundPosition: "left 100px top 100px" }}
    >
      <NavBar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center">
        <div className="hidden lg:block"></div>
        <div className="flex flex-col text-center lg:text-left justify-center items-center lg:items-start">
          <p className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight" data-aos="zoom-in-up">I'm</p>
          <p className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight" data-aos="zoom-in-up">Almas</p>
          <p className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight" data-aos="zoom-in-up">Aftab</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
