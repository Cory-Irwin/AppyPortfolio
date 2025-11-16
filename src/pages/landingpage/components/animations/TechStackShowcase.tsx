import React, { useEffect, useRef, useState } from "react";

import Html from "../../../../assets/Pages/landingPage/landingSection/html.svg";
import Css from "../../../../assets/Pages/landingPage/landingSection/css.svg";
import Javascript from "../../../../assets/Pages/landingPage/landingSection/js.svg";
import ReactIcon from "../../../../assets/Pages/landingPage/landingSection/trsvy.svg";
import TailwindCSS from "../../../../assets/Pages/landingPage/landingSection/tailwindcss.svg";
import Git from "../../../../assets/Pages/landingPage/landingSection/git.svg";
import DotNet from "../../../../assets/Pages/landingPage/landingSection/dotnetter.svg";
import ReactNative from "../../../../assets/Pages/landingPage/landingSection/native.svg";
import TypeScript from "../../../../assets/Pages/landingPage/landingSection/typescript.svg";
import NodeJs from "../../../../assets/Pages/landingPage/landingSection/nodjs.svg";
import NextJs from "../../../../assets/Pages/landingPage/landingSection/nextjs.svg";
import PostGress from "../../../../assets/Pages/landingPage/landingSection/postgres.svg";
import useTheme from "../../../../hooks/useTheme";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
}

interface Tech {
  icon: string;
  name: string;
  url: string;
  description: string;
}

const techStack: Tech[] = [
  { icon: Html, name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", description: "Markup language I use to structure web pages." },
  { icon: Css, name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", description: "Styling language I use to design layouts and visual aesthetics." },
  { icon: Javascript, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", description: "Programming language I use to make web pages interactive." },
  { icon: ReactIcon, name: "React", url: "https://reactjs.org/", description: "JavaScript library I use to build interactive UIs." },
  { icon: TailwindCSS, name: "TailwindCSS", url: "https://tailwindcss.com/", description: "Utility-first CSS framework I use for fast styling." },
  { icon: Git, name: "Git", url: "https://git-scm.com/", description: "Version control system I use to manage code changes." },
  { icon: DotNet, name: ".NET", url: "https://dotnet.microsoft.com/", description: "Framework I use for building backend services and APIs." },
  { icon: ReactNative, name: "React Native", url: "https://reactnative.dev/", description: "Framework I use to build mobile applications." },
  { icon: NodeJs, name: "Node.js", url: "https://nodejs.org/", description: "JavaScript runtime I use for server-side applications." },
  { icon: TypeScript, name: "TypeScript", url: "https://www.typescriptlang.org/", description: "Superset of JavaScript I use for type safety and better code maintainability." },
  { icon: NextJs, name: "Next.js", url: "https://nextjs.org/", description: "React framework I use for server-side rendering and routing." },
  { icon: PostGress, name: "PostgreSQL", url: "https://www.postgresql.org/", description: "Database system I use to store and manage data." },
];

function TechStackShowcase() {
  const { activeTheme } = useTheme()

  return (
    <>
      <div className="flex flex-col gap-y-12 mt-20">
        <FadeInSection>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 justify-items-center">
            {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
                >
                  <a href={tech.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="animate-float icon-hover w-24 h-24 md:w-32 md:h-32"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  </a>
                  <p className="mt-2 text-sm md:text-base" style={{
                    color: activeTheme === 'Dark' ? 'white' : 'black'
                  }}>
                    <strong>{tech.name}:</strong> {tech.description}
                  </p>
                </div>
              ))}
          </div>
        </FadeInSection>
      </div>
    </>
  );
}

export default TechStackShowcase;
