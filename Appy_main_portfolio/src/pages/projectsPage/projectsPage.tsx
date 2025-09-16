import React, { useState, useEffect } from "react";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import Footer from "../fundamentalPageComponents/footer";
import FadeInSection from "../landingpage/components/animations/FadeInSection";
import ProjectsGrid from "../landingpage/components/projectsGrid";

function ProjectsPage() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <>
      <AmbientBackground darkMode={darkMode}>
        {/* Navbar with Dark Mode Toggle */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Projects Section */}
        <FadeInSection delay={300}>
          <div className={`text-center  mt-24 py-10 font-semibold max-w-screen-xl mx-auto px-4  `}>
            <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold py-2 ${textColor}`}>
              Projects
            </h1>
            <p className={`text-xl sm:text-3xl md:text-4xl py-4 ${subTextColor}`}>
              Projects I've created
            </p>
            <div className="w-full mx-auto mb-24 ">
              <ProjectsGrid />
            </div>
          </div>
        </FadeInSection>
      </AmbientBackground>

      <Footer />
    </>
  );
}

export default ProjectsPage;
