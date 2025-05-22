import CardProjects from "./ui/CardProjects";
import { dataProjects } from "../data";
import Modal from "./ui/Modal";
import { useState } from "react";
import { Project } from "../interfaces"



const Projects = () => {

    // state
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState <Project | null> (null);
    
    
    // handellers
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

    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-950 w-full md:w-lg rounded-md p-2 mb-5 mx-auto text-3xl">My Projects</h1>
            <div className="flex flex-col md:flex-row md:space-x-2">
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
                        <div>
                            <img src={selectedProject.imageURL} alt="" />
                        </div>
                        <p>{selectedProject.description}</p>
                    </div>
                </Modal>
            )}
        </section>
    )
}

export default Projects;