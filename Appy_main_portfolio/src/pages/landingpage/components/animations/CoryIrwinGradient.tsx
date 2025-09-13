import React from "react";

function CoryIrwinGradient() {
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
  className="text-9xl md:text-9xl font-extrabold  font-cory tracking-tight 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-sky-400 via-fuchsia-5g00 to-emerald-400 
             animate-gradient
             leading-[1.3] overflow-visible "
>
  Cory Irwin
</h1>

    </>
  );
}

export default CoryIrwinGradient;
