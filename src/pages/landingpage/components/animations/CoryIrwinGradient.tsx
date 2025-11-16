import React from "react";

interface CoryIrwinGradientProps {
  darkMode?: boolean;
}

function CoryIrwinGradient({ darkMode = false }: CoryIrwinGradientProps) {
  return (
    <>
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-x 6s ease-in-out infinite;
        }

        /* Light gradient colors */
        .gradient-light {
          background-image: linear-gradient(270deg, #38bdf8, #f472b6, #10b981);
        }

        /* Dark gradient colors */
        .gradient-dark {
          background-image: linear-gradient(270deg, #2563eb, #9333ea, #059669);
        }
      `}</style>

      <h1
        className={`
          text-9xl md:text-9xl font-extrabold font-cory tracking-tight 
          text-transparent bg-clip-text animate-gradient leading-[1.3] overflow-visible
          ${darkMode ? "gradient-dark" : "gradient-light"}
        `}
      >
        Cory Irwin
      </h1>
    </>
  );
}

export default CoryIrwinGradient;
