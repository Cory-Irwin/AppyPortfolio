import React from "react";
import Navbar from "../fundamentalPageComponents/navbar";
import LandingSection from "../landingpage/components/landingSection";
import Footer from "../../../src/pages/fundamentalPageComponents/footer"
import "../../Index.css";
import Hero from "../../pages/landingpage/heroPage";
import AmbientBackground from "../../pages/landingpage/components/animations/BackgroundAmbientGradient";
const heroPage = () => {
  return (
    <>
      <div className="">
           <AmbientBackground>
        <Navbar />
        <LandingSection/>
        </AmbientBackground>
       {" "}      <Footer/>
      </div>
    </>
  );
};

export default heroPage;
// mx-auto max-w-screen-xl px-4 bg-black

     
 