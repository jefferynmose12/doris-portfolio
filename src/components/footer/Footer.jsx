import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      id="contact"
      className="px-4 md:px-10 mt-0 lg:mt-14 pb-20 text-black-text font-normal font-sans md:text-md lg:text-lg 2xl:text-xl"
    >
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-14 md:gap-0">
        <div className="flex flex-col gap-1 md:gap-5">
          <h6 className="text-fade-grey">Get in touch</h6>
          <a href="mailto:nmosedoris@gmail.com?subject=Reach out&body=Message">
            <h6 className="text-black-text">nmosedoris@gmail.com</h6>
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-16 items-center">
          <Link
            to="http://linkedin.com/in/doris-nmose-7053891aa"
            className="text-black-text hover:text-dark-orange"
          >
            Linkedin
          </Link>
          <Link
            to="https://dribbble.com/Dorispaul_01"
            className="text-black-text hover:text-dark-orange"
          >
            Dribbble
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
