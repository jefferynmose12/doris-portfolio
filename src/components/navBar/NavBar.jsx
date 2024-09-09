import React from "react";
import { Link, NavLink } from "react-router-dom";
import doris from "../../assets/doris.png";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between pt-5 md:pt-2 min-h-16 px-4 md:px-10 text-black-text font-sans">
      <Link
        to="/about"
        className="items-center gap-2 font-medium text-lg hidden md:flex"
      >
        <img src={doris} alt="doris" className="h-8 w-8" />
        <span>Doris Nmose</span>
      </Link>

      <Link to="/about" className="md:hidden">
        <img src={doris} alt="doris" className="" />
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-7 font-normal text-sm md:text-md lg:text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-dark-sec-color hover:text-dark-orange ${
              isActive ? "text-dark-orange line-through" : ""
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-dark-sec-color hover:text-dark-orange ${
              isActive ? "text-dark-orange line-through" : ""
            }`
          }
        >
          About Me
        </NavLink>
        <a
          href="#contact"
          className="transition duration-500 ease-in hover:text-yellow-600"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
