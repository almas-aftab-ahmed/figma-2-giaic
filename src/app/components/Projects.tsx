import Card from './Card'
import React from 'react'
import Heading from './Heading'
const data = [
    {
        id:0,
        title: "dynamic resume builder",
        desc:"Create a personalized, professional resume in minutes with our dynamic and easy-to-use resume builder.",
        img:"/image_1.jpeg",
        tags:["html","css", "typescript", "javascript" ],
    },
    {
        id:1,
        title: "static interactive resume",
        desc:"A visually engaging, interactive resume that showcases your skills and experience in a static yet dynamic format.",
        img:"/image_2.jpeg",
        tags:["html", "css", "typescript","javascript"],
    },

    {
      id:2,
      title:"jewllery website",
      desc: "Elegant, timeless minimal jewelry designed to complement your unique style.",
      img:"/image_3.jpeg",
      tags:["html", "tailwind css", "next.js", "typescript"],

    },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32 justify-center items-center'>
      <Heading title='my projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        
        />))}
      </div>
      
    </div>
  )
};

export default Projects;
