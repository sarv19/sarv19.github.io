import { useEffect, useState } from "react";
import About from "./components/About"
import Experience from "./components/Experience"
import Header from "./components/Header"
import SocialIcons from "./components/SocialIcons"
import experiences from "./data/experience.json";
import projects from "./data/project.json";
import education from "./data/education.json";
import certificates from "./data/certificates.json";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="main-body">
      <div className="aura" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        {/* <div ></div> */}
      </div>
      <div className="main-body-left">
        <Header />
        <SocialIcons />
      </div>
      <div className="main-body-right">
        <About />
        <Experience
          experiences={education}
          anchor="education"
        />
        <Experience
          experiences={experiences}
          text="View Full Resume"
          link="/SarahVo_Resume.pdf"
          anchor="experience"
        />
        <Experience
          experiences={certificates}
          anchor="certificates"
        />
        <Experience
          experiences={projects}
          text="View Full Project Archive"
          link="https://github.com/sarv19?tab=repositories"
          anchor="projects"
        />
      </div>
    </div>
  )
}

export default App
