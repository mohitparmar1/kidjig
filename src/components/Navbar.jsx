import React from "react";

function Navbar() {
  return (
    <div className="w-full relative flex md:px-8 lg:px-44 items-center py-3 justify-around lg:justify-around bg-nav-bg bg-opacity-20 overflow-hidden lg:gap-20">
      <div className="flex items-center">
        <img src="/src/assets/Logo.png" alt="logo" className="h-10" />
      </div>
      <div className="flex-grow flex justify-center md:justify-center lg:justify-between items-center">
        <ul className="hidden md:flex lg:flex gap-7 md:gap-5 text-main-text font-light font-display md:text-xl lg:text-2xl">
          <li>About</li>
          <li>Services</li>
          <li>Process</li>
          <li>Work</li>
          <li>Pricing</li>
          <li>FAQ's</li>
        </ul>
      </div>
      <button className="hidden md:flex lg:flex border-2 border-[#6881FF] text-white rounded-xl py-3 px-10 z-30">
        Book a Call
      </button>
      <img
        className="absolute -top-16 right-1/2 transform translate-x-1/2 -z-10 md:-top-20 md:right-1/2 md:transform md:translate-x-1/2"
        src="/src/assets/Ellipse 1.png"
        alt="ellipse 1"
      />
      <img
        className="absolute -top-10 right-16 -z-10 md:-top-16 md:right-24"
        src="/src/assets/Ellipse 2.png"
        alt="ellipse 2"
      />
    </div>
  );
}

export default Navbar;
