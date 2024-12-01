import React from "react";

const AchievementsSection = () => {
  const achievements1 = [
    { value: "+200", label: "Courses" },
    { value: "50K", label: "Mentors" },
    { value: "370K", label: "Students" },
    { value: "100+", label: "Recognition" },
  ];

  const achievements2 = [
    { value: "+500", label: "Projects" },
    { value: "100K", label: "Happy Clients" },
    { value: "1M", label: "Downloads" },
    { value: "200+", label: "Awards" },
  ];

  return (
    <>
      {/* First Achievements Section */}
      <section className="bg-[#FFFFFF] py-16 text-[#000000]">
        <div className="container mx-auto text-center px-4">
          {/* Heading */}
          <h2 className="text-3xl font-Roboto mb-6 text-[#000000]">Our Achievements</h2>
          <p className="text-[#000000] mb-12 font-Roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {achievements1.map((achievement, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-2">{achievement.value}</p>
                <p className="text-[#000000]">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Achievements Section */}
      <section className="bg-[#FFFFFF] py-16 text-[#000000]">
        <div className="container mx-auto text-center px-4">
          {/* Heading */}
          <h2 className="text-[18px] leading-[27px] md:text-[24px] md:leading-[32px] font-Roboto mb-6 text-[#000000]">
            Our Achievements
          </h2>
          <p className="text-[#000000] mb-12 font-Roboto">
            Curabitur tincidunt, libero nec aliquet volutpat, ipsum felis scelerisque magna, ac pretium orci elit in magna. Nulla varius ex vitae libero luctus, non convallis arcu convallis.
          </p>

          {/* Achievements */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {achievements2.map((achievement, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold mb-2">{achievement.value}</p>
                <p className="text-[#000000]">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AchievementsSection;
