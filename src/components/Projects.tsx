import CardProjects from "./ui/CardProjects";
import { dataProjects } from "../data";



const Projects = () => {
    // render
    const renderProjects = dataProjects.map(project => 
        <CardProjects imageURL={project.imageURL} name={project.name} title={project.title} proLink={project.proLink} proGithub={project.proGithub}/>
    )
    
    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-800 rounded-md p-2 mb-5 text-3xl">My Projects</h1>
            <div className="flex flex-col md:flex-row space-x-2">
                {renderProjects}
            </div>
        </section>
    )
}

export default Projects;