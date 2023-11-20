import ExperienceBlock from "./ExperienceBlock";
import { Element } from 'react-scroll';

const Experience = ({experiences, text, link, anchor}) => {
    return (
        <Element className="experience" name={anchor}>
            {anchor && <div className='section-title'>{anchor}</div>}
            {
                experiences && experiences.map((exp, index) => (
                    <ExperienceBlock experience={exp} key={index}/>
                ))
            }
            { text &&
                <a
                    href={link}
                    target="_blank"
                    className="experience-resume"
                    rel="noopener noreferrer"
                >
                    <span>{text}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                </a>
            }
        </Element>
    )
}

export default Experience;