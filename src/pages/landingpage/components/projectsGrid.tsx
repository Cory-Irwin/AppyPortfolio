import ProjectCard from "../components/projectsComponent";
import Intra from "../../../assets/Pages/landingPage/Projects/IntraBlog.png";
import Admin from "../../../assets/Pages/landingPage/Projects/admin.png";
import TechEcommerce from "../../../assets/Pages/landingPage/Projects/techEcommerce.png";
import MVC from "../../../assets/Pages/landingPage/landingSection/mvc.jpg";

import Bulletin from "../../../assets/sss.jpg"
import Native from "../../../assets/native.png"
const projects = [
  {
    title: "Tech Ecommerce Admin BackEnd",
    description: "Admin panel for managing products, orders, and users in an ecommerce platform.",
    image: Admin,
    techStack: "React, Node.js, TailwindCSS",
    githubLink: "https://github.com/Cory-Irwin/Appy_Ecommerce_Admin",
  
  }
  ,
  {
    title: "Tech Ecommerce Website",
    description: "Ecommerce website designed with Cilicon Ecommerce Figma Design inspriation. ",
    image: TechEcommerce,
    techStack: "TypeScript, Vite, TailwindCSS",
    githubLink: "https://github.com/Cory-Irwin/Cilicon_Ecommerce",
    
  },
  {
    title: "IntraDesign Software",
    description: "Contributer to the blog posting and maintenence of Intra-Design Software's main Website. Director of CSS designing and feedback provider.",
    image: Intra,
    techStack: "TypeScript, Vite, TailwindCSS",
    liveLink: "https://www.intradesign.com.au/",
  },
 
  {
    title: "Tafe Project: SeniorLearnMVC",
    description: "ASP.NET Project",
    image: MVC,
    techStack: "C#, DOTNET",
    githubLink: "https://github.com/Cory-Irwin/SeniorLearnMvc",
   
  },
   {
    title: "Tafe Project: BulletinBoardAPI",
    description: "Bulletin board",
    image: Bulletin,
    techStack: "TypeScript, Vite, TailwindCSS",
    githubLink: "https://github.com/Cory-Irwin/BulletinBoard.Api",
  },
   {
    title: "Tafe Project: mobile-App",
    description: "React Native Project",
    image: Native,
    techStack: "TypeScript, Vite, TailwindCSS",
    githubLink: "https://github.com/Cory-Irwin/mobile-app",
  }

];

function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4 ">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          image={project.image}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
