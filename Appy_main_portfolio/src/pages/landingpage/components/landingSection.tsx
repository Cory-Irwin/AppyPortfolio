import React from "react";
import Cory from "../../../assets/Pages/landingPage/landingSection/coryIrwin.png";
import CoryIrwinGradient from "./animations/CoryIrwinGradient";
import FadeInSection from "./animations/FadeInSection";
import TechStackShowcase from "./animations/TechStackShowcase";
import ProjectsGrid from "../components/projectsGrid";



const numberArray = [12, 58, 78, 1, 789, 78]


const LandingSection = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl my-10 px-4">

        {
          numberArray.map((value) => {
            return <p>{value}</p>
          })
        }

        {/* Intro Section */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10">
            <div className="text-center md:text-left w-full md:w-1/2">
              <h1 className="text-5xl font-bold">G'Day! 👋</h1>
              <h1 className="text-5xl font-bold">My name is</h1>
              <CoryIrwinGradient />
              <h1 className="text-5xl font-bold">I'm a Junior Front-End Web Developer</h1>
            </div>

            <div className="flex justify-center md:justify-end w-full md:w-1/2">
              <img
                src={Cory}
                alt="Cory Irwin"
                className="w-72 h-72 md:w-96 md:h-96 border-8 border-blue-300 rounded-full animate-float"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Tech Stack Section */}
        <FadeInSection delay={600}>
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold py-4">My Tech Stack</h1>
            <p className="text-2xl font-semibold py-4">
              Technologies I work with and have experience in
            </p>
            <TechStackShowcase />
          </div>
        </FadeInSection>

        {/* Project Contributions Section */}
        <FadeInSection delay={1200}>
          <div className="text-center mt-16">
            <h1 className="text-3xl font-bold py-2">Project Contributions</h1>
            <p className="text-xl py-2">Projects I've contributed to</p>
            <div className="w-full mx-auto max-w-screen-xl my-10 px-4">
              <ProjectsGrid />
            </div>
          </div>
        </FadeInSection>

      </div>

      <footer></footer>
    </>
  );
};

export default LandingSection;
