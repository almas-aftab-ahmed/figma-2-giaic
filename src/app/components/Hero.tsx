import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div
     id='hero'
      className="min-h-screen bg-no-repeat bg-[url(/cartoon.jpg)]  bg-cover"
    style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}>
      <NavBar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[800px] sm:text-[100px] font-bold leading-tight flext-justify-center items-center'>
            
                <p data-aos="zoom-in-up">I&apos;m</p>
                <p data-aos="zoom-in-up">Almas</p>
                <p data-aos="zoom-in-up">Aftab</p>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
