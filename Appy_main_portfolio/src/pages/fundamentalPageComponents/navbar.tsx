import React, { useState, useEffect } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-8 z-50">
      <nav
        className={`relative flex items-center justify-between w-[90%] max-w-screen-xl mx-auto p-4 rounded-full shadow-lg transition-colors
          ${
            darkMode
              ? isScrolled
                ? "bg-gray-900/60 text-white backdrop-blur-md"
                : "bg-gray-900 text-white"
              : isScrolled
              ? "bg-gray-100/60 text-gray-900 backdrop-blur-md"
              : "bg-gray-100 text-gray-900"
          }`}
      >
        {/* Left: Logo */}
        <div className="flex font-bold text-4xl z-20">
          <a
            href="/"
            className={`hover:underline hover:text-purple-500 transition-colors ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            CI.
          </a>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-12 text-2xl font-semibold z-10">
          <a
            href="/aboutMePage"
            className="hover:underline hover:text-purple-500 transition-colors"
          >
            About
          </a>
          <a
            href="/ProjectsPage"
            className="hover:underline hover:text-purple-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="/cvPage"
            className="hover:underline hover:text-purple-500 transition-colors"
          >
            CV
          </a>
        </div>

        {/* Right: Contact + Toggle + Hamburger */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <a
            className="hidden md:inline-block text-2xl font-semibold hover:underline hover:text-purple-500 transition-colors"
            href="/contactPage"
          >
            Contact Me
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-lg border shadow-md transition text-sm ${
              darkMode
                ? "bg-black/40 hover:bg-gray-700 text-gray-200"
                : "bg-white/70 hover:bg-gray-200 text-gray-800"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center space-y-1.5 p-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg rounded-b-lg md:hidden flex flex-col items-center py-4 space-y-4">
            <a
              href="/aboutMePage"
              className={`text-xl font-semibold hover:underline hover:text-purple-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About
            </a>
            <a
              href="/ProjectsPage"
              className={`text-xl font-semibold hover:underline hover:text-purple-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Projects
            </a>
            <a
              href="/cvPage"
              className={`text-xl font-semibold hover:underline hover:text-purple-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              CV
            </a>
            <a
              href="/contactPage"
              className={`text-xl font-semibold hover:underline hover:text-purple-500 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Me
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
