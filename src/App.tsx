import "./Index.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroPage from "./pages/landingpage/heroPage"
import CVPage from "./pages/cvPage/cvPage";
import AboutPage from "./pages/aboutMePage/aboutMePage";
import ProjectsPage from "./pages/projectsPage/projectsPage";
import ContactMe from "./pages/contactPage/contactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="cv" element={<CVPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
