import React from "react";
import Cory from "../../../assets/Pages/landingPage/landingSection/coryIrwin.png";
import CoryIrwinGradient from "./animations/CoryIrwinGradient";
import FadeInSection from "./animations/FadeInSection";
import TechStackShowcase from "./animations/TechStackShowcase";
import ProjectsGrid from "../components/projectsGrid";



//const numberArray = [12, 58, 78, 1, 789, 78]


const LandingSection = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl my-10 px-4">

        {/* {
          numberArray.map((value) => {
            return <p>{value}</p>
          })
        } */}

        {/* Intro Section */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10">
            <div className="text-center md:text-left ">
              <h1 className="text-6xl font-bold mt-4 text-white">G'Day! 👋</h1>
              <h1 className="text-6xl font-bold mt-4 text-white">My name is</h1>
              <CoryIrwinGradient />
              <h1 className="text-6xl font-bold mt-4 text-white">I'm a Junior Front-End Web Developer</h1>
            </div>

            <div className="flex justify-center md:justify-end w-full md:w-1/2">
              <img
                src={Cory}
                alt="Cory Irwin"
                className="w-auto h-72 object-cover md:w-96 md:h-96 border-8 border-blue-300 rounded-full animate-float"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Tech Stack Section */}
        <FadeInSection delay={600}>
          <div className="text-center mt-100   font-semibold text-white">
            <h1 className="text-8xl font-bold  text-white py-4">My Tech Stack</h1>
            <p className="text-4xl font-semibold py-4">
              Technologies I work with and have experience in
            </p>
            <TechStackShowcase />
          </div>
        </FadeInSection>

        {/* Project Contributions Section */}
        <FadeInSection delay={600}>
          <div className="text-center mt-100  mb-40 font-semibold text-white">
          <a href="/ProjectsPage" className="hover:underline text-8xl font-bold text-white py-2 hover:text-purple-500">Projects</a>
            <p className="text-4xl py-8"> I've created or contributed to.</p>        
            <div className="w-full mx-auto max-w-screen-xl my-10 px-4">
              <ProjectsGrid />
            </div>
          </div>
        </FadeInSection>

      </div>

    
    </>
  );
};

export default LandingSection;
