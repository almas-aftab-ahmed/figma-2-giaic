import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 min-h-screen w-full p-8 md:p-16">
      {/* Left Side Content */}
      <div className="flex-1 flex flex-col justify-center gap-6 px-8 md:px-16 bg-white">
        <h1 className="text-xxl md:text-4xl  leading-tight text-[#000000] font-Roboto text-[56px]">
          Learn new skills online with ease
        </h1>
        <p className="text-[#000000] mb-6 text-lg md:text-xl font-Roboto">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
          <button className="px-8 py-3 bg-[#000000] text-[#FFFFFF] font-Roboto rounded-md text-lg md:text-xl hover:bg-gray-700 transition duration-300">
            Start learning now
          </button>
          <button className="px-8 py-3 border font-Roboto border-[#000000] rounded-md text-[#000000] text-lg md:text-xl hover:bg-gray-100 transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="flex-1 relative">
        <Image
          src="/hero-image.jpg"  
          alt="Hero"
          width={640}  
          height={900} 
         objectFit='contain'
        />
      </div>
    </section>
  );
};

export default HeroSection;
