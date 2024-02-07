import '../styles/projects.css'
// import { Link } from "react-router-dom";
const Projects = () => {
    return ( 
        <div className="projects">
            <div className="project-list">
            <h1>MY PROJECTS</h1>
                <div className="project-preview">
                    <a target="_blank" href={'https://github.com/KSwitch1303/Blog_Site'}>
                        <div className="project-content">
                            <div className='project-text'>
                                <h2>BLOG SITE</h2>
                                <p>MY BLOG WEBSITE</p>
                            </div>
                            <div className='project-img'>
                                <img width={500} src="/Blogsite.png" alt="blogsite pic"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;