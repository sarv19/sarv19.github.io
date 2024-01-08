const ProjectBlock = ({project}) => {
    const {time, image, title, summary, subTitle, link, tags} = project;
    
    return (
        <a className="project-block" href={link} target="_blank">
            <div className="project-block-left">
                {time ??
                    <img src={image} alt="Project Preview"/>
                }
            </div>
            <div className="project-block-right">
                <div className="project-block-right-title" >
                    {title}
                    {link &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                        </svg>
                    }
                </div>
                <div className="project-block-right-subTitle">
                    {summary}
                </div>
                {tags &&
                    <div
                        className="experience-block-right-technologies"
                        aria-label="technologies-used"
                    >
                        {
                            tags.map((tag, index) => (
                                <div className="experience-block-right-technologies-tag" key={index}>{tag}</div>
                            ))
                        }
                    </div>
                }
            </div>
        </a>
    )
}

export default ProjectBlock;