import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Index.css";
import Hero from "./pages/landingpage/heroPage";
import AmbientBackground from "./pages/landingpage/components/animations/BackgroundAmbientGradient";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <AmbientBackground>
      <Hero />
      </AmbientBackground>
    </>
  );
}

export default App;
