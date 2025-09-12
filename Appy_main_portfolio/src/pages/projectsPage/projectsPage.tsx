import React from "react";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import Footer from "../fundamentalPageComponents/footer";
import FadeInSection from "../landingpage/components/animations/FadeInSection";
import ProjectsGrid from "../landingpage/components/projectsGrid";

const projectsPage = () => {
  return (
    <>
      <Navbar />
      <AmbientBackground>
          <FadeInSection delay={1200}>
          <div className="text-center mt-16  font-semibold text-white">
            <h1 className="text-8xl font-bold text-white py-2">Projects</h1>
            <p className="text-4xl py-4">Projects I've created</p>
            <div className="w-full mx-auto max-w-screen-xl my-10 px-4">
              <ProjectsGrid />
            </div>
          </div>
        </FadeInSection>
      </AmbientBackground>
      <Footer />
    </>
  );
};

export default projectsPage;
