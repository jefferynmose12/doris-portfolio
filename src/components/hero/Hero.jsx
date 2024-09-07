import React from "react";
import doris1 from "../../assets/doris1.png";
import doris2 from "../../assets/doris2.png";

const textArr = [
  "I'm a creative generalist who loves working with my hands to craft beautiful, problem-solving designs. My approach blends the precision of an architect and the innovation of a product designer into a unique multidisciplinary style.",
  "User experience is at the heart of my design philosophy. I strive to create immersive worlds that draw people in and leave a lasting imprint. Whether designing intricately or finely-tuned digital interfaces, my goal is to elevate design beyond pure function into something emotionally captivating that sparks delight.",
  "Design is a lifelong passion that extends far beyond the workday. You'll find me constantly tinkering on DIY projects, be it in industrial product design, digital interfaces, or any creative endeavour that allows me to merge my skills with a maker's mindset.",
  "I am committed to learning and continuous development. My background and experience helps shape the future of user-centric design. My process involves extensive user research, wire-framing, prototyping, usability testing, and iteration to refine experiences into their most engaging forms.",
  "For me, design transcends vocation - it is fuelled by passion and storytelling. Whether blueprinting architectural marvels or perfecting pixel-perfect digital experiences, my aim is to emotionally resonate with users through compelling narratives manifested in the experiences I craft.",
];

const Hero = () => {
  return (
    <div className="w-full px-4 md:px-10 mb-10">
      <div
        data-aos="fade-up"
        className="md:pl-20 lg:pl-32 mt-12 md:mt-24 lg:mt-48 text-2xl md:text-5xl font-normal md:leading-tight font-baskervville text-fade-grey"
      >
        <h2>Hi there,</h2>
        <h2>
          I’m <span className="text-black-text italic">Doris,</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-5 mt-10 mb-8 w-full">
        <div data-aos="fade-right" className="flex-1">
          <img src={doris2} alt="doris2" className="w-full" />
        </div>

        <div data-aos="fade-left" className="flex-1">
          <img src={doris1} alt="doris1" className="w-full" />
        </div>
      </div>

      <div data-aos="fade-out" className="flex flex-col gap-5 md:gap-7 mt-8 md:mt-14 md:px-20 lg:px-32 text-medium-grey text-lg md:text-xl font-normal leading-6 md:leading-7 font-sans">
        {textArr.map((text, i) => (
          <h6 key={i}>{text}</h6>
        ))}
      </div>
    </div>
  );
};

export default Hero;
