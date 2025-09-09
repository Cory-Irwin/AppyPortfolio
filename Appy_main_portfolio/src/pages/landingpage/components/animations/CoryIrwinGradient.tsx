import React from "react";

const CoryIrwinGradient: React.FC = () => {
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
      `}</style>

      <h1
        className="text-5xl md:text-7xl font-extrabold tracking-tight 
                   text-transparent bg-clip-text 
                   bg-gradient-to-r from-sky-400 via-fuchsia-500 to-emerald-400 
                   animate-gradient"
      >
        Cory Irwin
      </h1>
    </>
  );
};

export default CoryIrwinGradient;
