"use client";

import React from "react";
import Image from "next/image"; // Import Image component from next/image

const CoursesSection = () => {
  const courses = [
    {
      category: "Design",
      title: "UX/UI Design 201",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course1.jpg",
    },
    {
      category: "Programming",
      title: "Introduction to Python",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course2.jpg",
    },
    {
      category: "Business",
      title: "Data Analysis for Beginners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course3.jpg",
    },
    {
      category: "Art",
      title: "Art Specialization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course4.jpg",
    },
    {
      category: "Law",
      title: "Rule of Law",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course5.jpg",
    },
    {
      category: "Tech",
      title: "Introduction to Webflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
      rating: 5.0,
      image: "/Course6.jpg",
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-16 text-[#000000]">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-Roboto mb-2 text-[#000000]">Courses</h2>
        <p className="text-[#000000] mb-8 font-Roboto">Your Ultimate Guide to Learning</p>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          {["Popular", "Recommended", "Best Price"].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm ${
                index === 0
                  ? "text-black border-b-2 border-[#000000]"
                  : "text-[#000000] hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border rounded-lg shadow hover:shadow-md transition"
            >
              {/* Use Image component instead of img */}
              <Image
                src={course.image}
                alt={course.title}
                width={500} // Adjust the width based on your design
                height={300} // Adjust the height based on your design
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <p className="text-sm text-[#000000] mb-2">{course.category}</p>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-[#000000] text-sm mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-[#000000] text-[#FFFFFF] text-sm rounded">
                    Enroll Now
                  </button>
                  <p className="text-lg font-bold">{course.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <button className="px-6 py-2 border border-gray-400 rounded text-black hover:bg-gray-100 font-Roboto">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
