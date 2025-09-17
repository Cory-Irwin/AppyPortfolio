import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = darkMode
    ? isScrolled
      ? "bg-gray-900/60 backdrop-blur-md text-white"
      : "bg-gray-900 text-white"
    : isScrolled
    ? "bg-gray-100/60 backdrop-blur-md text-gray-900"
    : "bg-gray-100 text-gray-900";

  const mobileBg = darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  return (
    <header className="sticky top-8 z-50">
      <nav
        className={`relative flex items-center justify-between w-[90%] max-w-screen-xl mx-auto p-4 rounded-full shadow-lg transition-colors ${navBg}`}
      >
        {/* Logo */}
        <div className="flex font-bold text-4xl z-20">
          <Link
            to="/"
            className={`hover:underline hover:text-purple-500 transition-colors`}
          >
            CI.
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-12 text-2xl font-semibold z-10">
          {["About", "Projects", "CV"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="hover:underline hover:text-purple-500 transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link
            className="hidden md:inline-block text-2xl font-semibold hover:underline hover:text-purple-500 transition-colors"
            to="/contact"
          >
            Contact Me
          </Link>

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
            className={`md:hidden p-2 rounded-lg transition ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
            }`}
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`absolute top-full left-0 w-full shadow-lg rounded-b-lg md:hidden flex flex-col items-center py-4 space-y-4 transition-colors ${mobileBg}`}
          >
            {["About", "Projects", "CV", "Contact Me"].map((link) => (
              <Link
                key={link}
                to={`/${link.split(' ')[0].toLowerCase()}`}
                className="text-xl font-semibold hover:underline hover:text-purple-500 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
