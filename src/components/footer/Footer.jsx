import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-4 md:px-10 mt-0 lg:mt-14 pb-20 text-black-text font-normal font-sans md:text-md lg:text-lg 2xl:text-xl">
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-10 lg:gap-0">
        <div className="flex flex-col gap-2 md:gap-5">
          <h6 className="text-fade-grey">Get in touch</h6>
          <h6 className="text-black-text">nmosedoris@gmail.com</h6>
        </div>

        <div className="flex flex-col md:flex-row gap-1 md:gap-5 lg:gap-10 items-center">
          <Link to="/" className="text-black-text hover:text-dark-orange">
            Linkedin
          </Link>
          <Link to="/" className="text-black-text hover:text-dark-orange">
            Dribbble
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;