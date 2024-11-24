import React from "react";
import Image from "next/image"; 

function Footer() {
  return (
    <footer className="bg-[#FFFFFF] py-12 border-t">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-[#000000]">Subscribe to our newsletter</h3>
            <p className="text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center mt-4 md:mt-0 bg-[#505050] w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-[#000000] text-[#FFFFFF] rounded-md hover:bg-[#000000]"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section with "Ddgsr" */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/union.png" 
                alt="Ddsgr Logo"
                width={32} 
                height={32} 
              />
              {/* Second Logo with a tighter margin */}
              <Image
                src="/union-2.png" 
                alt="Ddsgr Logo 2"
                width={32} 
                height={32} 
                className="-ml-6"
              />
              <span className="text-xl font-bold text-[#000000]">Ddsgr</span>
            </div>
          </div>

          {/* Links: Courses */}
          <div className="space-y-2">
            <h4 className="font-bold">Courses</h4>
            <ul className="space-y-1 text-[#000000]">
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>

          {/* Links: Resources */}
          <div className="space-y-2">
            <h4 className="font-bold">Resources</h4>
            <ul className="space-y-1 text-[#000000]">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>

          {/* Links: About Us */}
          <div className="space-y-2">
            <h4 className="font-bold">About Us</h4>
            <ul className="space-y-1 text-[#000000]">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
          <p className="text-[#000000] text-sm mb-4 md:mb-0">
            © 2023 Dgdsr. All rights reserved.
          </p>
          <ul className="flex flex-wrap space-x-4 text-[#000000] justify-center md:justify-start">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookies Settings</a></li>
          </ul>
          {/* Social Links */}
          <ul className="flex flex-wrap space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
