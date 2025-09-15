import React, { ReactNode } from "react";

interface AmbientBackgroundProps {
  children?: ReactNode;
}

function AmbientBackground({ children }: AmbientBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full">
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .ambient-gradient {
          background: linear-gradient(-45deg, #bba5, #8becf6, #10b9, #ffff);
          background-size: 400% 400%;
          animation: gradient-move 20s ease infinite;
        }
      `}</style>

      {/* Gradient background layer */}
      <div className="absolute inset-0 ambient-gradient -z-10"></div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default AmbientBackground;
