import React, { useEffect, useState } from "react";
import Navbar from "../fundamentalPageComponents/navbar";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Footer from "../fundamentalPageComponents/footer";

function ContactMe() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const inputBg = darkMode
    ? "bg-gray-700 text-white placeholder-gray-300 border-gray-600"
    : "bg-white text-gray-900 placeholder-gray-500 border-gray-300";
  const formBg = darkMode ? "bg-gray-800" : "bg-white";

  return (
    <>
      <AmbientBackground darkMode={darkMode}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
          <h1 className={`text-5xl font-bold mb-8 ${textColor} text-center`}>
            Contact Me
          </h1>

          <form className={`w-full max-w-lg ${formBg} p-8 rounded-xl shadow-lg space-y-6 bg-gray-200 border-2`}>
            <div>
              <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-gray-200 border-2 focus:ring-sky-400 ${inputBg}`}
              />
            </div>

            <div>
              <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-gray-200 border-2 focus:ring-sky-400 ${inputBg}`}
              />
            </div>

            <div>
              <label className={`block font-semibold mb-2 ${textColor}`} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 bg-gray-200 border-2 focus:ring-purple-400 ${inputBg}`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </AmbientBackground>

      <Footer />
    </>
  );
}

export default ContactMe;
