import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start text-left w-full">
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <h1
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            Hi, I’m a <br />
            <span className="text-transparent [-webkit-text-stroke:1.5px_white]">
              Full Stack Developer
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm md:text-lg font-semibold mb-8 max-w-md"
          >
            I build fast, scalable and modern web applications using React,
            Node.js and Tailwind CSS.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <button className="px-5 py-2 md:px-7 md:py-3 text-sm md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-md">
              View My Work
            </button>

            <button className="px-5 py-2 md:px-7 md:py-3 text-sm md:text-base rounded-full bg-white/10 border border-white text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-24 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;