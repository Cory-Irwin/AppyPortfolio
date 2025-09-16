import React, { ReactNode } from "react";
import "./AmbientBackground.css"; // import the CSS we’ll create

interface AmbientBackgroundProps {
  children?: ReactNode;
  darkMode: boolean;
}

function AmbientBackground({ children, darkMode }: AmbientBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full ">
      {/* Animated gradient background */}
      <div className={`absolute inset-0 -z-10 ${darkMode ? "bg-dark" : "bg-light"}`}></div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AmbientBackground;
