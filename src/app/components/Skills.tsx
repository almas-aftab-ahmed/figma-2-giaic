import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>My tech Arsenal</h2>
                <p className='text-gray-700'>
                

Web3.0 & Metaverse Development: Actively studying and exploring Web3 technologies, decentralized applications (dApps), and the Metaverse ecosystem.
AI Knowledge Familiar with AI concepts, tools, and integration into web applications.
Web Development: Strong foundation in front-end web technologies including:
  HTML & CSS: Proficient in structuring and styling modern, responsive web pages.
  JavaScript & TypeScript: Solid experience in dynamic, client-side scripting and type-safe code.
  Next.js: Skilled in building server-side rendered (SSR) applications, API routes, and optimizing React-based projects.
Tailwind CSS: Expertise in using Tailwind for creating efficient, responsive, and customizable UI designs.
Continuous Learning: Passionate about staying up-to-date with new web development tools and technologies.   </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-indigo-600 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2  data-aos="zoom-in-up">JavaScript</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>

                    </div>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Tailwind css</h2>
                        <h2 data-aos="zoom-in-up">Css</h2>
                        <h2 data-aos="zoom-in-up">Html</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
};

export default Skills;
