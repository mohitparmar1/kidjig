import { useState } from "react";
import MobileNav from "./MobileNav";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full relative flex justify-between md:px-8 lg:px-44 items-center py-3 lg:justify-around bg-nav-bg bg-opacity-20 overflow-hidden lg:gap-36">
      <div className="flex items-center">
        <img src="/src/assets/Logo.png" alt="logo" className="h-10" />
      </div>

      <div className="flex-grow flex justify-center md:justify-center lg:justify-between items-center">
        <ul className="hidden md:flex lg:flex gap-7 md:gap-5 text-main-text font-light font-display md:text-xl lg:text-2xl z-30 cursor-pointer">
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
        className="absolute -top-0 z-10"
        src="/src/assets/Ellipse 1.png"
        alt="ellipse 1"
      />
      <img
        className="absolute top-0 right-6 -z-0"
        src="/src/assets/Ellipse 2.png"
        alt="ellipse 2"
      />

      {/*
         mobilenav state
      */}
      <div
        className="block lg:hidden md:hidden mx-10 z-30 transition transform ease-in delay-1000"
        onClick={handleToggle}
      >
        {toggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 cursor-pointer transition-transform ease-in duretion-1000 transform rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6 cursor-pointer transition-transform ease-in duration-200 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
        {/* {toggle && <MobileNav />} */}
      </div>
    </div>
  );
}

export default Navbar;
