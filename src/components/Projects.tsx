import CardProjects from "./ui/CardProjects";
import ecommerce from "./../assets/ecommerce project.png";
import crudReact from "./../assets/crudreactproject.png";



const Projects = () => {
    return (
        <section className="my-15">
            <h1 className="text-white text-center bg-indigo-800 rounded-md p-2 mb-5 text-3xl">My Projects</h1>
            <div className="flex flex-col md:flex-row space-x-2">
                <CardProjects imageURL={ecommerce} name="Ecommerce" title="E-commerce Project" proLink="https://mij-do.github.io/E-Commerce-Project/" proGithub="https://github.com/Mij-Do/E-Commerce-Project"/>
                <CardProjects imageURL={crudReact} name="crudReact" title="Crud React Project" proLink="https://react-crud-project-vert.vercel.app/" proGithub="https://github.com/Mij-Do/React-CrudProject"/>
            </div>
        </section>
    )
}

export default Projects;