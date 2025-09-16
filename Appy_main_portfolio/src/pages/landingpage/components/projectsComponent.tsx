import React from "react";
import Github from "../../../assets/Pages/landingPage/landingSection/gitter.svg";
import Link from "../../../assets/Pages/landingPage/landingSection/link.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
}

function ProjectCard({
  title,
  description,
  techStack,
  image,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm mx-auto bg-white text-gray-900 flex flex-col">
      {/* Image on top */}
      <div className="w-full h-48 md:h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Info below */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          <p className="text-gray-500 text-xs mb-4">Tech stack: {techStack}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex  items-center justify-center gap-2 py-2 px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              <img src={Link} alt="Live Preview" className="w-5 h-auto invert" />
              Live Preview
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex  items-center justify-center gap-2 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
            >
              <img src={Github} alt="GitHub" className="w-5 h-auto invert" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
