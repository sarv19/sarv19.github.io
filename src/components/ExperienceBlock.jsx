const ExperienceBlock = ({experience}) => {
    const {time, image, title, subTitle, link, company, summary, tags, projects} = experience;
    
    return (
        <a className="experience-block" href={link} target="_blank">
            <div className="experience-block-left">
                {time ??
                    <img src={image} alt="Project Preview"/>
                }
            </div>
            <div className="experience-block-right">
                <div className="experience-block-right-title" >
                    {title} {`${company ? '· ' + company : ''}`}
                    {link &&
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                            </path>
                        </svg>
                    }
                </div>
                <div className="experience-block-right-subTitle">
                    {subTitle}
                </div>
                <div className="experience-block-right-summary">
                    {summary}
                </div>
                {projects &&
                    <div className="experience-block-right-links">
                        {projects.map((item, index) => (
                            <a href={item.link} aria-label={`link to ${item.name}`} key={index + item.name} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z">
                                    </path>
                                </svg>
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                }
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

export default ExperienceBlock;