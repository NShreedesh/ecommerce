import React, { useState } from "react";

import navLinks from "../../data/navbar/navbar.js";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function onMenuClick() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <nav
      className={`flex flex-col items-start justify-between px-4 py-4 text-white 
      bg-black ease gap-7 lg:items-center lg:flex-row lg:bg-white z-10 lg:text-black shadow-xl sticky top-0
      h-full lg:h-navbar`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="hover:cursor-pointer">
          <h1 className="text-3xl font-bold">Brothers Store.</h1>
        </div>
        <div className="cursor-pointer lg:hidden" onClick={onMenuClick}>
          <p className="font-bold tracking-wider text-gray-300">Menu</p>
        </div>
      </div>
      <div
        className={`justify-between gap-5 items-start lg:items-center lg:flex flex-col lg:flex-row
        ${isMenuClicked ? "flex" : "hidden"}`}
      >
        {navLinks.map(({ id, title, link }) => {
          return (
            <div
              key={id}
              className="relative after:[content:''] after:block 
              after:transition-all after:duration-300
              after:h-1 after:m-auto after:bg-red-50 after:w-0  hover:after:bg-green-400
              hover:after:w-full"
            >
              <Link to={link} className="font-medium">
                {title}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
