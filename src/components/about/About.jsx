import React from "react";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import { Link } from "react-router-dom";
import { LuMoveRight } from "react-icons/lu";
import Check from "../check/Check";

const skills = [
  "Interactive Design",
  "Visual Design",
  "User Research",
  "Prototyping",
  "Wireframing",
  "Design Thinking",
  "User Empathy",
  "Project Management",
];

const About = () => {
  return (
    <div className="px-4 md:px-10 mt-10 mb-10 font-['Baskervville'] text-black-text font-normal">
      <div className="md:px-0 flex flex-col md:flex-row md:items-center gap-2 lg:gap-5 md:mt-16 mb-8">
        <div className="flex-1">
          <img src={about1} alt="doris2" className="w-full" />
        </div>
        <div className="flex-1">
          <img src={about2} alt="doris1" className="w-full" />
        </div>
        <div className="flex-1">
          <img src={about3} alt="doris1" className="w-full" />
        </div>
      </div>

      <div className="mt-5 md:px-20">
        <h6 className="text-lg md:text-xl pb-3 font-baskervville">
          For me, design isn't just a profession; it's the heartbeat of every
          idea, every project, and every adventure.
        </h6>

        <div className="border-t border-light-grey-border pt-7 lg:pt-10 flex flex-col md:flex-row gap-5 md:gap-0 text-medium-grey font-['inter'] lg:text-xl font-normal font-sans">
          <div className="flex-1 font-semibold">
            <h6>Skill set</h6>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-2 lg:gap-3">
              {skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        </div>

      
      </div>

      <Check />
    </div>
  );
};

export default About;
