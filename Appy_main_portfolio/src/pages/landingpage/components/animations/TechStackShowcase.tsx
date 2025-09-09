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

// CSS for floating animation
const floatStyle = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number; // in milliseconds
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
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
};

const TechStackShowcase: React.FC = () => {
  const firstRow = [Html, Css, Javascript, ReactIcon, TailwindCSS, Git];
  const secondRow = [DotNet, ReactNative, NodeJs, TypeScript, NextJs, PostGress];

  return (
    <>
      <style>{floatStyle}</style>

      <div className="flex flex-col gap-y-12 mt-20">
        <FadeInSection>
          <div className="flex justify-between gap-4">
            {firstRow.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt=""
                className="animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </FadeInSection>

      <FadeInSection>
  <div className="flex flex-wrap justify-between gap-4">
    {secondRow.map((icon, i) => (
      <img
        key={i}
        src={icon}
        alt=""
        className="animate-float"
        style={{
          width: "131px",
          height: "131px",
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
  </div>
</FadeInSection>

      </div>
    </>
  );
};

export default TechStackShowcase;
