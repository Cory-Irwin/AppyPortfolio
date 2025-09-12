import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Footer from "../src/pages/fundamentalPageComponents/footer"
import "./Index.css";
import Hero from "./pages/landingpage/heroPage";
import AmbientBackground from "./pages/landingpage/components/animations/BackgroundAmbientGradient";
import HeroPage from "./pages/landingpage/heroPage";
import CVPage from "./pages/cvPage/cvPage";
import AboutPage from "./pages/aboutMePage/aboutMePage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import ContactMe from "./pages/contactPage/contactPage";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
            <Route path="/" element={<HeroPage/>}/>
            <Route path="CvPage" element={<CVPage/>}/>
                 <Route path="aboutMePage" element={<AboutPage/>}/>
                 <Route path="projectsPage" element={<ProjectsPage/>}/>
                 <Route path="contactPage" element={<ContactMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;
