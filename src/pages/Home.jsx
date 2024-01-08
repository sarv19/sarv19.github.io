import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import SocialIcons from "../components/SocialIcons";
import experiences from "../data/experience.json";
import projects from "../data/project.json";
import education from "../data/education.json";
import certificates from "../data/certificates.json";

const Home = () => {

  return (
    <>
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
    </>
  )
}

export default Home
