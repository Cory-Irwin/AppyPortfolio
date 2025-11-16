import React, { useEffect, useState } from "react";
import data from "../../assets/reactive_resume-cmdy3i5k94y8nrxdf68h68vkt.json";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import Footer from "../fundamentalPageComponents/footer";

function CVPage() {
  const { basics, sections } = data;

  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Text and background helpers
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const cardText = darkMode ? "text-gray-100" : "text-gray-900";
  const borderColor = darkMode ? "border-gray-600" : "border-gray-300";

  return (
    <>
      <AmbientBackground darkMode={darkMode}>
        {/* Navbar with Dark Mode Toggle */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Download Button */}
          <div className="flex justify-end mb-6">
            <a
              href="/cory_irwin_resume_2025.pdf"
              download="cory_irwin_resume_2025.pdf"
              className={`px-4 py-2 rounded-lg shadow-md transition ${
                darkMode
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white"
              }`}
            >
              Download CV
            </a>
          </div>

          {/* CV Content */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${cardBg} p-6 md:p-8 rounded-lg shadow-md`}
          >
            {/* Left Column */}
            <div className="space-y-6">
              <img
                src={basics.picture.url}
                alt={basics.name}
                className="w-full rounded-lg shadow-md"
              />
              <div>
                <h1 className={`text-xl font-bold ${cardText}`}>{basics.name}</h1>
                <p className={`text-sm ${subTextColor}`}>{basics.phone}</p>
                <p className={`text-sm underline ${textColor}`}>{basics.email}</p>
              </div>

              {/* Skills */}
              <div>
                <h2
                  className={`text-lg font-semibold border-b pb-1 mb-2 ${borderColor}`}
                >
                  Skills
                </h2>
                <ul className={`text-sm list-disc list-inside space-y-1 ${cardText}`}>
                  {sections.skills.items.map((skill) => (
                    <li key={skill.id}>
                      {skill.name}
                      {skill.keywords.length > 0 && (
                        <span className="block text-xs text-gray-400">
                          {skill.keywords.join(", ")}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Volunteering */}
              <div>
                <h2
                  className={`text-lg font-semibold border-b pb-1 mb-2 ${borderColor}`}
                >
                  Volunteering
                </h2>
                <ul className={`text-sm list-disc list-inside space-y-1 ${cardText}`}>
                  {sections.volunteer.items.map((vol) => (
                    <li key={vol.id}>
                      {vol.organization} {vol.date}
                      <p className="text-xs text-gray-400">
                        {vol.summary.replace(/<[^>]+>/g, "")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* References */}
              <div>
                <h2
                  className={`text-lg font-semibold border-b pb-1 mb-2 ${borderColor}`}
                >
                  References
                </h2>
                <ul className={`text-sm list-disc list-inside space-y-1 ${cardText}`}>
                  {sections.references.items.map((ref) => (
                    <li key={ref.id}>
                      {ref.name}{" "}
                      <span className="text-xs text-gray-400">{ref.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 space-y-6">
              {/* Summary */}
              <div
                className={cardText}
                dangerouslySetInnerHTML={{ __html: sections.summary.content }}
              />

              {/* Experience */}
              <div>
                <h2
                  className={`text-lg font-semibold border-b pb-1 mb-2 ${borderColor} ${cardText}`}
                >
                  Experience
                </h2>
                {sections.experience.items.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <p className={`font-semibold ${cardText}`}>{exp.company}</p>
                    <p className="text-xs italic text-gray-400">{exp.date}</p>
                    <p className={`text-sm font-medium ${cardText}`}>{exp.position}</p>
                    <div
                      className="text-sm text-gray-300 mt-1"
                      dangerouslySetInnerHTML={{ __html: exp.summary }}
                    />
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-10">
                <h2
                  className={`text-lg font-semibold border-b pb-1 mb-2 ${borderColor} ${cardText}`}
                >
                  Education
                </h2>
                {sections.education.items.map((edu) => (
                  <div key={edu.id} className={`${cardText}`}>
                    <p className={`font-semibold ${cardText}`}>{edu.institution}</p>
                    <p className="text-xs italic text-gray-400">{edu.date}</p>
                    <div
                      className="text-sm mt-1"
                      dangerouslySetInnerHTML={{ __html: edu.summary }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AmbientBackground>

      <Footer />
    </>
  );
}

export default CVPage;
