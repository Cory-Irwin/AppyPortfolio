import React from "react";
import Logo from "../assets/Full Light.png";
import Intra from "../../assets/Pages/landingPage/landingSection/Full Light.png";
import HomePage from "../landingpage/heroPage";

const Navbar = () => {
  return (
    // Sticky wrapper → keeps the pill nav centered and sticky
    <header className="sticky top-4 z-50 flex justify-center">
      <nav className="bg-gray-800 text-white p-4 flex items-center justify-between w-[90%] max-w-screen-xl px-8 rounded-full shadow-lg">
        <div className="flex-1">
          <div className="font-bold text-4xl">
              <a href="/" className="hover:underline hover:text-purple-500">
            CI.
          </a><span className="text-blue-300"></span>
          </div>
        </div>

        <div className="flex-1 text-center space-x-12 text-3xl font-semibold">
          
          <a href="/aboutMePage" className="hover:underline hover:text-purple-500">
            About
          </a>
          <a href="/ProjectsPage" className="hover:underline hover:text-purple-500">
            Projects
          </a>
          <a href="/cvPage" className="hover:underline hover:text-purple-500">
            CV
          </a>
        </div>

        <div className="flex-1 text-right text-3xl font-semibold">
          <a href="/contactPage" className="hover:underline hover:text-purple-500">
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
