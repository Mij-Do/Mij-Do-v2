import ecommerce from "./../assets/ecommerce project.png";
import crudReact from "./../assets/crudreactproject.png";
import { IProjectData, ISkills } from "../interfaces";

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
];


export const dataSkills: ISkills[] = [
    {
        title: 'Html',
        name: 'html',
        precntage:'98',
    },
    {
        title: 'Css',
        name: 'css',
        precntage:'96',
    },
    {
        title: 'Java Script',
        name: 'js',
        precntage:'88',
    },
    {
        title: 'Type Script',
        name: 'ts',
        precntage:'86',
    },
    {
        title: 'ReactJS',
        name: 'reactjs',
        precntage:'76',
    },
    {
        title: 'BootStrab',
        name: 'bootstrab',
        precntage:'97',
    },
    {
        title: 'Tailind Css',
        name: 'tailwindcss',
        precntage:'84',
    },
    {
        title: 'Sass',
        name: 'sass',
        precntage:'78',
    },
]