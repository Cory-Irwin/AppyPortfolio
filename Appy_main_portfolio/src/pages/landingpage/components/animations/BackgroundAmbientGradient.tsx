import React from "react";

const AmbientBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 ambient-gradient"></div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AmbientBackground;
