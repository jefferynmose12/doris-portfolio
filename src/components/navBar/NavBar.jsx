import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Projects", link: "/projects" },
];

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  //   const ToggleMenu = () => {
  //     setMenu(!menu);
  //   };

  return (
    <div className="flex items-center justify-between h-16 px-4 md:px-10 text-black-text font-sans">
      <Link to="/" className="font-medium text-lg">
        Doris Nmose
      </Link>

      <div className="flex items-center gap-7 font-normal text-md">
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `flex gap-0 items-center hover:text-dark-sec-color hover:text-dark-orange ${
                isActive ? "text-dark-orange" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
