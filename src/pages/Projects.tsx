import CardProjects from "../components/ui/CardProjects";
import { dataProjects } from "../data";
import Modal from "../components/ui/Modal";
import { useState } from "react";
import { Project } from "../interfaces"



const Projects = () => {

    // state
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState <Project | null> (null);
    
    
    // handlers
    const open = (project: Project) => {
        setSelectedProject(project); 
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
        setSelectedProject(null);
    }

    // render
    const renderProjects = dataProjects.map(project => 
        <div>
            <CardProjects key={project.id} project={project} openModal={() => open(project)}/>
        </div>
    )

    const renderHSkills = selectedProject?.HSkills.map(skills => 
        <span className="m-2 p-2 bg-indigo-900 text-white rounded-md">{skills}</span>
    )

    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:space-x-2">
                {renderProjects}
            </div>
            {selectedProject && (
                <Modal
                    key={selectedProject.id}
                    title={selectedProject.title}
                    isOpen={isOpen}
                    close={close}
                >
                    <div>
                        <div className="my-2">
                            <img className="rounded-md" src={selectedProject.imageURL} alt="" />
                        </div>
                        <div>
                            <p className="text-indigo-500 text-center">{selectedProject.description}</p>
                        </div>
                        <div className="my-5">
                            {renderHSkills}
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    )
}

export default Projects;