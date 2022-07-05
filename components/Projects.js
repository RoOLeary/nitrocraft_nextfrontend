import Project from './Project';

const Projects = ({ content }) => { 
    
    const { projectsHeading, projectsLeadText, projects } = content;
    let introText = 'Holding text';
    return(
        <section className="b-faq c-section speakers">
            <div className="o-wrapper">
                <h1>{projectsHeading ? projectsHeading : 'Projects' }</h1>
                <br />
                {projectsLeadText ? projectsLeadText : introText.replace(/<\/?p[^>]*>/g, '')}
                <br />
                <div>
                <br />
                <ul className={'b-speakers__list o-grid o-grid--gap-m'}>
                    {projects.length >= 0 && projects.map((project, i) => {
                        return <Project key={i} project={project} />
                    })}
                </ul>
                </div>
            </div>
            
        </section>
    )
}

export default Projects;