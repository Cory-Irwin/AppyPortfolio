import React from "react";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import Footer from "../fundamentalPageComponents/footer";
import FadeInSection from "../landingpage/components/animations/FadeInSection";
import ProjectsGrid from "../landingpage/components/projectsGrid";

function ProjectsPage() {
  return (
    <>
      {/* Gradient background wraps everything */}
      <AmbientBackground>
        {/* Sticky navbar inside gradient */}
        <Navbar />

        {/* Projects section */}
        <FadeInSection delay={1200}>
          <div className="text-center mt-20 font-semibold text-white max-w-screen-xl mx-auto px-4 ">
            <h1 className="text-8xl font-bold py-2">Projects</h1>
            <p className="text-4xl py-4">Projects I've created</p>
            <div className="w-full mx-auto my-10 ">
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
