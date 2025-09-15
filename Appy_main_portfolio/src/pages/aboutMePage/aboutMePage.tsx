import React from "react";
import Footer from "../fundamentalPageComponents/footer";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import FadeInSection from "../landingpage/components/animations/FadeInSection";

function AboutPage() {
  return (
    <>
      {/* Gradient background wraps everything */}
      <AmbientBackground>
        {/* Sticky pill navbar */}
        <Navbar />

        {/* Page content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* About Me */}
          <FadeInSection delay={0}>
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
              <p className="text-lg leading-relaxed text-white">
               Born in Australia, I have always been fascinated by how the web works. Exploring how websites are built and 
               understanding best practices in web development has been a passion of mine. Over time, my curiosity has grown
                into a deeper appreciation for the complexities of web
                technologies and the creativity involved in crafting seamless digital experiences.
              </p>
            </section>
          </FadeInSection>

          {/* Skills */}
          <FadeInSection delay={300}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Skills
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
                <li className="bg-white p-3 shadow-sm rounded-lg">
                  HTML / CSS / TailwindCSS
                </li>
                <li className="bg-white p-3 shadow-sm rounded-lg">
                  JavaScript / TypeScript
                </li>
                <li className="bg-white p-3 shadow-sm rounded-lg">API Integration</li>
                <li className="bg-white p-3 shadow-sm rounded-lg">Figma & Adobe Suite</li>
                <li className="bg-white p-3 shadow-sm rounded-lg">Office 365</li>
                <li className="bg-white p-3 shadow-sm rounded-lg">Problem Solving</li>
              </ul>
            </section>
          </FadeInSection>

          {/* Work Experience */}
          <FadeInSection delay={600}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Work Experience</h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">Retail Associate</h3>
                  <p className="text-sm text-gray-500">
                    Hardware & General – Brookvale | Aug 2020 – Current
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-700">
                    <li>Enhanced interpersonal skills through stakeholder & customer engagement</li>
                    <li>Developed problem-solving and escalation practices</li>
                    <li>Gained experience with enterprise software frameworks & e-commerce tools</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Education */}
          <FadeInSection delay={900}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">
                  Diploma of Information Technology Advanced Programming
                </h3>
                <p className="text-sm text-gray-500">TAFE NSW | Dec 2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Front-end application architecture & scalable UI design</li>
                  <li>Back-end integration with MVC & C# data flow</li>
                  <li>Legal frameworks for handling user data</li>
                  <li>Team leadership in web & mobile app development</li>
                </ul>
              </div>
            </section>
          </FadeInSection>

          {/* Volunteering */}
          <FadeInSection delay={900}>
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Volunteering</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="bg-white p-3 shadow-sm rounded-lg">Lifeline (July 2023, 2024, 2025)</li>
                <li className="bg-white p-3 shadow-sm rounded-lg">Mona Vale Art Show</li>
                <li className="bg-white p-3 shadow-sm rounded-lg">Lifeline Knox Book Fair</li>
              </ul>
            </section>
          </FadeInSection>
        </div>
      </AmbientBackground>

      <Footer />
    </>
  );
}

export default AboutPage;
