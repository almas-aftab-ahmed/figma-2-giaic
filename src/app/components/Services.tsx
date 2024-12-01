import React from "react";
import { FaPaintBrush, FaBullhorn, FaCogs, FaComments, FaGlobe, FaChartLine, FaBusinessTime, FaMoneyBillWave, FaRegHandshake } from 'react-icons/fa';  // Import icons from react-icons

const Services = () => {
  const categories = [
    { title: "Design & Development", courses: "50+ Courses Available", icon: <FaPaintBrush className="text-4xl mb-4" /> },
    { title: "Marketing", courses: "50+ Courses Available", icon: <FaBullhorn className="text-4xl mb-4" /> },
    { title: "Development", courses: "50+ Courses Available", icon: <FaCogs className="text-4xl mb-4" /> },
    { title: "Communication", courses: "50+ Courses Available", icon: <FaComments className="text-4xl mb-4" /> },
    { title: "Digital Marketing", courses: "50+ Courses Available", icon: <FaGlobe className="text-4xl mb-4" /> },
    { title: "Self Development", courses: "50+ Courses Available", icon: <FaChartLine className="text-4xl mb-4" /> },
    { title: "Business", courses: "50+ Courses Available", icon: <FaBusinessTime className="text-4xl mb-4" /> },
    { title: "Finance", courses: "50+ Courses Available", icon: <FaMoneyBillWave className="text-4xl mb-4" /> },
    { title: "Consulting", courses: "50+ Courses Available", icon: <FaRegHandshake className="text-4xl mb-4" /> },
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 text-[#000000]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl font-Roboto mb-4 text-[#000000] ">Explore Courses By Category</h2>
        <p className="text-[#000000] mb-12 font-Roboto">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#F7F7F7] rounded-lg shadow hover:shadow-md transition"
            >
              {/* Icon */}
              <div>{category.icon}</div>
              {/* Title */}
              <h3 className="text-lg font-semibold mt-4">{category.title}</h3>
              {/* Course Count */}
              <p className="text-[#000000]">{category.courses}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-6 py-3 border border-[#000000] font-Roboto rounded hover:bg-[#676767] hover:text-[#FFFFFF] transition text-black">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
