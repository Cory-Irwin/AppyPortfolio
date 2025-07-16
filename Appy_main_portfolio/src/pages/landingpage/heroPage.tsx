import React from "react";
import Navbar from "./components/navbar";
import LandingSection from "../landingpage/components/landingSection";

const heroPage = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <LandingSection/>
       {" "}
      </div>
    </>
  );
};

export default heroPage;
// mx-auto max-w-screen-xl px-4 bg-black
