import ecommerce from "./../assets/ecommerce project.png";
import crudReact from "./../assets/crudreactproject.png";
import { IProjectData } from "../interfaces";

export const dataProjects: IProjectData[] = [
    {
        title: 'E-commerce Project',
        name: 'E-commerce',
        imageURL: ecommerce,
        proLink: 'https://mij-do.github.io/E-Commerce-Project/',
        proGithub: 'https://github.com/Mij-Do/E-Commerce-Project',
    },
    {
        title: 'Crud React Project',
        name: 'Crud React',
        imageURL: crudReact,
        proLink: 'https://react-crud-project-vert.vercel.app/',
        proGithub: 'https://github.com/Mij-Do/React-CrudProject',
    }
]