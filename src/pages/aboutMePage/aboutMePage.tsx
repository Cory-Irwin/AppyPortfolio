import React, { useState, useEffect } from "react";
import Footer from "../fundamentalPageComponents/footer";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import FadeInSection from "../landingpage/components/animations/FadeInSection";
import CoryVolenteer from "../../assets/Pages/aboutMe/IMG_20251012_075937513.jpg"

function AboutPage() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900";
  const cardSubText = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <>
      <AmbientBackground darkMode={darkMode}>
        {/* Navbar controls dark mode now */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-4xl mx-auto mt-15 px-6 py-8 sm:py-12">
          {/* About Me */}
          <FadeInSection delay={0}>
            <section className="mb-12 flex lg:flex-row flex-col gap-6">
              <div>
                <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${textColor}`}>About Me</h2>
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${subTextColor}`}>
                  Born in Australia, I have always been fascinated by how the web works. Exploring how websites are built and
                  understanding best practices in web development has been a passion of mine. Over time, my curiosity has grown
                  into a deeper appreciation for the complexities of web
                  technologies and the creativity involved in crafting seamless digital experiences.
                </p>
              </div>
              <div>
                <img src={CoryVolenteer} alt="image of Cory Irwin volunteering at Lifeline Cycle Marathon 2025 " className="w-600 h-auto" />
              <h1>Me volunteering as checkpoint assistant at Lifeline Cycle Marathon 2025 (It was banana's!).</h1>
              </div>
            </section>
          </FadeInSection>

          {/* Skills */}
          <FadeInSection delay={300}>
            <section className="mb-12">
              <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 ${textColor}`}>Skills</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {["HTML / CSS / TailwindCSS", "JavaScript / TypeScript", "API Integration", "Figma & Adobe Suite", "Office 365", "Problem Solving"].map(skill => (
                  <li key={skill} className={`p-3 rounded-lg shadow-sm ${cardBg}`}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </FadeInSection>

          {/* Work Experience */}
          <FadeInSection delay={600}>
            <section className="mb-12">
              <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 ${textColor}`}>Work Experience</h2>
              <div className="space-y-4">
                <div className={`p-5 rounded-lg shadow-sm ${cardBg}`}>
                  <h3 className="text-lg font-semibold">{`Retail Associate`}</h3>
                  <p className={`text-sm ${cardSubText}`}>Hardware & General Brookvale | Aug 2020 – Current</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Enhanced interpersonal skills through stakeholder & customer engagement</li>
                    <li>Developed problem-solving and escalation practices</li>
                    <li>Gained experience with enterprise software frameworks & e-commerce tools</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mb-12">

              <div className="space-y-4">
                <div className={`p-5 rounded-lg shadow-sm ${cardBg}`}>
                  <h3 className="text-lg font-semibold">{`Audio Assistant`}</h3>
                  <p className={`text-sm ${cardSubText}`}>Gravity Media  | Mar 2023 - Jun 2023 (4 months)</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Operated and monitored live audio systems during high-profile horse
                      racing events, ensuring clear, uninterrupted broadcast for both on-site
                      spectators and remote audiences</li>
                    <li>Coordinated with event staff and announcers to manage cues,
                      announcements, and audio transitions seamlessly throughout the race
                      schedule.</li>
                    <li>Contributed to a high-pressure, fast-paced environment, developing
                      quick problem-solving skills and adaptability to last-minute changes.</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mb-12">

              <div className="space-y-4">
                <div className={`p-5 rounded-lg shadow-sm ${cardBg}`}>
                  <h3 className="text-lg font-semibold">{`Founder & Head of Client Relations`}</h3>
                  <p className={`text-sm ${cardSubText}`}>IntraDesign Software  | December 2023-Ongoing</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Served as primary client liaison and negotiator, ensuring clear
                      communication, gathering requirements and delivering solutions
                      aligned with client goals.</li>
                    <li>Collaborated with the lead developer on software projects,
                      contributing to front-end development tasks including CSS styling and
                      navigation linking in React.</li>
                    <li>Produced thought-leadership content for the company blog,
                      highlighting industry insights and company expertise.</li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeInSection>

          {/* Education */}
          <FadeInSection delay={900}>
            <section className="mb-12">
              <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 ${textColor}`}>Education</h2>
              <div className={`p-5 rounded-lg shadow-sm ${cardBg}`}>
                <h3 className="text-lg font-semibold">
                  Diploma of Information Technology Advanced Programming
                </h3>
                <p className={`text-sm ${cardSubText}`}>TAFE NSW | Dec 2024</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Front-end application architecture & scalable UI design</li>
                  <li>Back-end integration with MVC & C# data flow</li>
                  <li>Legal frameworks for handling user data</li>
                  <li>Team leadership in web & mobile app development</li>
                </ul>
              </div>
            </section>

          </FadeInSection>

          {/* Volunteering */}
          <FadeInSection delay={1200}>
            <section>
              <h2 className={`text-2xl sm:text-3xl font-semibold mb-4 ${textColor}`}>Volunteering</h2>
              <ul className="space-y-3">
                {["Lifeline (July 2023, 2024, 2025)", "Mona Vale Art Show", "Lifeline Knox Book Fair", "Lifeline Cycle Marathon"].map(vol => (
                  <li key={vol} className={`p-3 rounded-lg shadow-sm ${cardBg}`}>
                    {vol}
                  </li>
                ))}
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
