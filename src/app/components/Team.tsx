import React from "react";
import Image from "next/image"; 
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const teamMembers = [
  {
    name: "James Nduku",
    role: "Marketing Coordinator",
    image: "/james-nduku.png", 
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Joseph Munyambu",
    role: "Nursing Assistant",
    image: "/joseph-munyambu.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Joseph Ngumbau",
    role: "Medical Assistant",
    image: "/joseph-ngumbau.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Erick Kipkemboi",
    role: "Web Designer",
    image: "/erick-kipkemboi.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "Stephen Kerubo",
    role: "President of Sales",
    image: "/stephen-kerubo.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
  {
    name: "John Leboo",
    role: "Dog Trainer",
    image: "/john-leboo.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#",
    },
  },
];

function TeamSection() {
  return (
    <section className="py-16 bg-[#F7F7F7] text-[#000000]">
      <div className="container mx-auto text-center px-4 bg-[#F7F7F7]">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-[#000000]">Our Team</h2>
        <p className="text-[#000000] mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 shadow-md rounded-md"
            >
        
              <Image
                src={member.image}
                alt={member.name}
                width={96} 
                height={96} 
                className="object-cover rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-[#000000] mb-4">{member.role}</p>
              {/* Social Icons */}
              <div className="flex justify-center space-x-4">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {member.socials.website && (
                  <a
                    href={member.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
