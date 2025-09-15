import React from "react";
import Navbar from "../fundamentalPageComponents/navbar";
import LandingSection from "../landingpage/components/landingSection";
import Footer from "../../../src/pages/fundamentalPageComponents/footer"
import "../../Index.css";
import Hero from "../../pages/landingpage/heroPage";
import AmbientBackground from "../../pages/landingpage/components/animations/BackgroundAmbientGradient";

const HeroPage = () => {
  return (
    <>
      {/* Remove bg-black wrapper here */}
      <AmbientBackground>
        <Navbar />
        <LandingSection />
      </AmbientBackground>

      <Footer />
    </>
  );
};
export default HeroPage;