import React, { useEffect, useState } from "react";
import Cory from "../../../assets/Pages/landingPage/landingSection/coryIrwin.png";
import CoryIrwinGradient from "./animations/CoryIrwinGradient";
import FadeInSection from "./animations/FadeInSection";
import TechStackShowcase from "./animations/TechStackShowcase";
import ProjectsGrid from "../components/projectsGrid";
import AmbientBackground from "./animations/BackgroundAmbientGradient";
import Navbar from "../../fundamentalPageComponents/navbar";

const LandingSection = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Text color helpers
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <AmbientBackground darkMode={darkMode}>
      {/* Navbar with Dark Mode Toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="mx-auto max-w-screen-xl px-4 mt-24">
        {/* Intro Section */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10">
            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${textColor}`}
              >
                G'Day! 👋
              </h1>
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${textColor}`}
              >
                My name is
              </h1>
              <CoryIrwinGradient />
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 font-bold ${textColor}`}
              >
                I'm a Junior Front-End Web Developer
              </h1>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src={Cory}
                alt="Cory Irwin"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96
                           object-cover object-top border-8 border-blue-300 
                           rounded-full animate-float"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Tech Stack Section */}
        <div className="mt-128">
          <FadeInSection delay={300}>
            <div className="text-center mt-16 sm:mt-20 font-semibold">
              <h1
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl py-4 font-bold ${textColor}`}
              >
                My Tech Stack
              </h1>
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold py-4 ${subTextColor}`}
              >
                Technologies I work with and have experience in
              </p>
              <TechStackShowcase />
            </div>
          </FadeInSection>
        </div>
        {/* Projects Section */}
        <div className="mt-128 pb-64">
          <FadeInSection delay={300}>
            <div className="text-center mt-16 sm:mt-20 font-semibold py-16 sm:py-20">
              <a
                href="/ProjectsPage"
                className={`hover:underline text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2 ${textColor} hover:text-purple-500`}
              >
                Projects
              </a>
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-4xl py-6 ${subTextColor}`}
              >
                I've created or contributed to.
              </p>
              <div className="w-full mx-auto max-w-screen-xl my-6 sm:my-10 px-2 sm:px-4">
                <ProjectsGrid />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </AmbientBackground>
  );
};

export default LandingSection;
