import { useEffect, useState } from "react";
import Cory from "../../../assets/Pages/landingPage/landingSection/coryIrwin.png";
import CoryIrwinGradient from "./animations/CoryIrwinGradient";
import FadeInSection from "./animations/FadeInSection";
import TechStackShowcase from "./animations/TechStackShowcase";
import ProjectsGrid from "./projectsGrid";
import AmbientBackground from "./animations/BackgroundAmbientGradient";
import Navbar from "../../fundamentalPageComponents/navbar";
import useTheme from "../../../hooks/useTheme";

const LandingSection = () => {
  const { activeTheme, updateTheme } = useTheme()

  const darkMode = activeTheme === 'Dark'
  const setDarkMode = (dark: boolean) => updateTheme(dark ? 'Dark' : 'Light')

  // Text color helpers
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <AmbientBackground darkMode={darkMode}>
      {/* Navbar with Dark Mode Toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="mx-auto max-w-screen-xl px-4 mt-24">
        {/* Intro Section */}
        <FadeInSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-10">
            {/* Text */}
            <div className="text-center md:text-left flex-1">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4`}
                style={{
                  color: !darkMode ? '#101828' : 'white'
                }}
              >
                G'Day! 👋
              </h1>
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4`}
                style={{
                  color: !darkMode ? '#101828' : 'white'
                }}
              >
                My name is
              </h1>
              <CoryIrwinGradient />
              <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 font-bold`}
                style={{
                  color: !darkMode ? '#101828' : 'white'
                }}
              >
                I'm a Junior Front-End Web Developer
              </h1>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0">
              <img
                src={Cory}
                alt="Cory Irwin"
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96
                           object-cover object-top border-8 border-blue-300 
                           rounded-full animate-float"
              />
            </div>
          </div>
        </FadeInSection>

        {/* Tech Stack Section */}
        <div className="mt-128">
          <FadeInSection delay={300}>
            <div className="text-center mt-16 sm:mt-20 font-semibold">
              <h1
                className={`text-3xl sm:text-5xl md:text-6xl lg:text-8xl py-4 font-bold`}
                style={{
                  color: !darkMode ? '#101828' : 'white'
                }}
              >
                My Tech Stack
              </h1>
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold py-4 ${subTextColor}`}
              >
                Technologies I work with and have experience in
              </p>
              <TechStackShowcase />
            </div>
          </FadeInSection>
        </div>
        {/* Projects Section */}
        <div className="mt-128 pb-64">
          <FadeInSection delay={300}>
            <div className="text-center mt-16 sm:mt-20 font-semibold py-16 sm:py-20">
              <a
                href="/ProjectsPage"
                className={`hover:underline text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2 hover:text-purple-500`}
                style={{
                  color: !darkMode ? '#101828' : 'white'
                }}
              >
                Projects
              </a>
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-4xl py-6 ${subTextColor}`}
              >
                I've created or contributed to.
              </p>
              <div className="w-full mx-auto max-w-screen-xl my-6 sm:my-10 px-2 sm:px-4">
                <ProjectsGrid />
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      <section aria-label="About Me" className="py-20 mt-128 bg-transparent">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2

              className={`sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2`}
              style={{
                color: !darkMode ? '#101828' : 'white'
              }}
            >
              About Me
            </h2>
            <p
              className={`mt-4 text-lg sm:text-xl md:text-2xl ${subTextColor}`}
            >
              Born in Australia, I have always been fascinated by how the web
              works. Exploring how websites are built and understanding best
              practices in web development has been a passion of mine. Over
              time, my curiosity has grown into a deeper appreciation for the
              complexities of web technologies and the creativity involved in
              crafting seamless digital experiencee
            </p>
          </div>
        </FadeInSection>
      </section>
      <section aria-label="Experience" className="mt-128  py-20 bg-transparent">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2

              className={`sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2`}
              style={{
                color: !darkMode ? '#101828' : 'white'
              }}
            >
              My experience
            </h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { number: "12+", label: "Projects Completed" },
                { number: "8+", label: "Technologies" },
                { number: "2", label: "Years Learning" },
                { number: "100%", label: "Passion for Coding" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 dark:bg-gray-800/30 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105"
                >
                  <p className={`text-5xl font-bold`}
                    style={{
                      color: !darkMode ? '#101828' : 'white'
                    }}>
                    {item.number}
                  </p>
                  <p className={`mt-2 ${subTextColor}`}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section aria-label="Fun Facts" className="mt-128 py-20 bg-transparent">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2

              className={`sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2`}
              style={{
                color: !darkMode ? '#101828' : 'white'
              }}
            >
              Fun Facts
            </h2>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              {[
                { title: "🎮 Gaming Enthusiast", text: "I love strategy games and retro consoles." },
                { title: "📚 Lifelong Learner", text: "Always exploring new frameworks and libraries." },
                { title: "🌏 Traveler", text: "I enjoy exploring cultures and taking inspiration from design worldwide." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/20 dark:bg-gray-800/30 rounded-lg p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:scale-105">
                  <p className={`text-2xl font-bold`}

                    style={{
                      color: !darkMode ? '#101828' : 'white'
                    }}>{item.title}</p>
                  <p className={`${subTextColor}`}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <section aria-label="Blog" className="mt-128 pb-24 bg-transparent">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2

              className={`sm:text-5xl md:text-6xl lg:text-8xl font-bold py-2`}
              style={{
                color: !darkMode ? '#101828' : 'white'
              }}
            >
              Latest Articles
            </h2>
            <p className={`mt-4 ${subTextColor}`}>Sharing what I’ve learned and projects I’m working on.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/20 dark:bg-gray-800/30 rounded-lg p-6 shadow-lg">
                  <h3 className={`text-xl font-bold`}
                    style={{
                      color: !darkMode ? '#101828' : 'white'
                    }}>Article {i}</h3>
                  <p className={`mt-2 ${subTextColor}`}>Brief description of the article content.</p>
                  <a href={`/blog/article${i}`} className="mt-4 inline-block text-blue-500 hover:text-purple-500 font-semibold">Read More →</a>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

    </AmbientBackground>
  );
};

export default LandingSection;
