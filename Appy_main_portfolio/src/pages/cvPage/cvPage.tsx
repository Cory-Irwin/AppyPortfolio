import React, { JSX } from "react";
import data from "../../assets/reactive_resume-cmdy3i5k94y8nrxdf68h68vkt.json";
import AmbientBackground from "../landingpage/components/animations/BackgroundAmbientGradient";
import Navbar from "../fundamentalPageComponents/navbar";
import Footer from "../fundamentalPageComponents/footer";


function CVPage() {
  const { basics, sections } = data;

  return (
    <>
      <AmbientBackground>
        <Navbar />
        <div className="mb-10 py-12">
          {/* Download Button */}
          <div className="flex justify-end max-w-5xl mx-auto mt-6 px-4">
            <a
              href="/cory_irwin_resume_2025.pdf"
              download="cory_irwin_resume_2025.pdf"
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Download CV
            </a>
          </div>

          {/* CV Content */}
          <div className="bg-white  text-black mt-6 font-serif max-w-5xl mx-auto p-8 grid grid-cols-3 gap-6 shadow-md">
            {/* Left Column */}
            <div className="col-span-1 space-y-6">
              {/* Picture */}
              <img
                src={basics.picture.url}
                alt={basics.name}
                className="w-full rounded-lg shadow-md"
              />

              {/* Name + Contact */}
              <div>
                <h1 className="text-xl font-bold text-red-600">{basics.name}</h1>
                <p className="text-sm">{basics.phone}</p>
                <p className="text-sm text-blue-600 underline">{basics.email}</p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
                  Skills
                </h2>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {sections.skills.items.map((skill) => (
                    <li key={skill.id}>
                      {skill.name}
                      {skill.keywords.length > 0 && (
                        <span className="block text-xs text-gray-600">
                          {skill.keywords.join(", ")}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Volunteering */}
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
                  Volunteering
                </h2>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {sections.volunteer.items.map((vol) => (
                    <li key={vol.id}>
                      {vol.organization} {vol.date}
                      <p className="text-xs text-gray-600">
                        {vol.summary.replace(/<[^>]+>/g, "")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* References */}
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
                  References
                </h2>
                <ul className="text-sm list-disc list-inside space-y-1">
                  {sections.references.items.map((ref) => (
                    <li key={ref.id}>
                      {ref.name}{" "}
                      <span className="text-xs text-gray-600">
                        {ref.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 space-y-6">
              {/* Summary */}
              <div>
                <p
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sections.summary.content }}
                />
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
                  Experience
                </h2>
                {sections.experience.items.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <p className="font-semibold">{exp.company}</p>
                    <p className="text-xs italic">{exp.date}</p>
                    <p className="text-sm font-medium">{exp.position}</p>
                    <div
                      className="text-sm text-gray-700 mt-1"
                      dangerouslySetInnerHTML={{ __html: exp.summary }}
                    />
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="mb-10">
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">
                  Education
                </h2>
                {sections.education.items.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold">{edu.institution}</p>
                    <p className="text-xs italic">{edu.date}</p>
                    <div
                      className="text-sm text-gray-700 mt-1"
                      dangerouslySetInnerHTML={{ __html: edu.summary }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>    
      </AmbientBackground>
  <Footer/>
    </>
  );
}

export default CVPage;
