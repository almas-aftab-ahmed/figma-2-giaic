import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";


const NavBar = () => {
  return (
    <div className='container pt-8 flex items-center justify-center'>
      <div className='text-xl font-bold'>portfolio webo</div>
      <ul className=' gap-10 lg:gap-16  ml-auto hidden md:flex'>
        <li className='menuLink'><a href='#hero'>Home</a></li>
        <li  className='menuLink'><a href='#about'>About</a></li>
        <li  className='menuLink'><a href='#projects'>Projects</a></li>
        <li className='menuLink'><a href='#skills'>Skills</a></li>
        <li  className='menuLink'><a href='#contact'>Contact</a></li>
      </ul>
      <AiOutlineMenu className='md:hidden ' size={30}/>
      
    </div>
  )
};

export default NavBar;
