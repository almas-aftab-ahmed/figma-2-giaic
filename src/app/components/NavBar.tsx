"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#F7F7F7] shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="relative flex items-center">
          <img
            src="/union.png"
            alt="Ddsgnr Logo1"
            className="h-8 w-auto"
          />
          <img
            src="/union-2.png"
            alt="Ddsgnr Logo2"
            className="h-8 w-auto -ml-6"
          />
          <span className="ml-2 text-lg font-bold text-[#000000] font-inter">
            Ddsgnr
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#000000] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <ul className="flex space-x-6 text-[#000000]">
            <li>
              <Link href="/about" className="hover:text-[#676767]">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#676767]">Services</Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-[#676767]">Achievements</Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-[#676767]">Testimonials</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#676767]">Courses</Link>
            </li>
          </ul>
          {/* Buttons */}
          <div className="space-x-4">
            <button className="px-6 py-2 bg-[#000000] text-[#FFFFFF] rounded hover:bg-[#676767]">
              Login
            </button>
            <button className="px-6 py-2 border border-[#000000] text-[#000000] rounded hover:bg-[#676767]">
              Sign Up
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-t">
          <ul className="space-y-4 py-4">
            <li>
              <Link href="/about" className="block px-4 text-[#000000] hover:text-[#676767]">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="block px-4 text-[#000000] hover:text-[#676767]">Services</Link>
            </li>
            <li>
              <Link href="/achievements" className="block px-4 text-[#000000] hover:text-[#676767]">Achievements</Link>
            </li>
            <li>
              <Link href="/testimonials" className="block px-4 text-[#000000] hover:text-[#676767]">Testimonials</Link>
            </li>
            <li>
              <Link href="/courses" className="block px-4 text-[#000000] hover:text-[#676767]">Courses</Link>
            </li>
          </ul>

          {/* Mobile Buttons */}
          <div className="space-y-4 px-4 py-2">
            <button className="w-full px-4 py-2 bg-[#000000] text-white rounded hover:bg-[#676767]">
              Login
            </button>
            <button className="w-full px-4 py-2 border border-[#000000] text-[#000000] rounded hover:bg-[#676767]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
