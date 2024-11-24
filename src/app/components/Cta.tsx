function TrustedSection() {
  return (
    <section className="bg-[#F7F7F7] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Section */}
        <div className="text-left md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Trusted by the World's Best Companies
          </h2>
          <p className="text-[#000000]">
            Join thousands of companies who rely on us to achieve their goals.
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-8 items-center md:w-2/3">
          {[
            { src: "/logo1.png", alt: "Logo 1" },
            { src: "/logo2.png", alt: "Logo 2" },
            { src: "/logo3.png", alt: "Logo 3" },
            { src: "/logo4.png", alt: "Logo 4" },
            { src: "/logo5.png", alt: "Logo 5" },
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 grayscale hover:grayscale-0 transition duration-200 mx-4"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedSection;
