import React from "react";
import Image from "next/image";

const testimonals = [
  {
    name: "James Nduku",
    role: "Software Developer",
    image: "/james-nduku.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Erick Kipkemboi",
    role: "Scrum Master",
    image: "/erick-kipkemboi.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
  {
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    image: "/stephen-kerubo.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000000]">Customer Testimonials</h2>
          <p className="text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonals.map((testimonal, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 border-[#000000] rounded-md"
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {Array(testimonal.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-[#000000] text-lg">★</span>
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#676767] italic mb-6">
                &ldquo;{testimonal.text}&rdquo;
              </p>

              <div className="flex items-center space-x-4">
                {/* Profile Image */}
                <Image
                  src={testimonal.image}
                  alt={testimonal.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-bold">{testimonal.name}</p>
                  <p className="text-xs text-[#676767]">{testimonal.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="px-6 py-3 bg-[#F7F7F7] rounded-full hover:bg-[#8D8D8D] border-[1px]">
            ←
          </button>
          <button className="px-6 py-3 bg-[#F7F7F7] rounded-full hover:bg-[#8D8D8D] border-[1px]">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
