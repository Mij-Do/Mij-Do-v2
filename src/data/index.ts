import ecommerce from "./../assets/ecommerce project.png";
import crudReact from "./../assets/crudreactproject.png";
import ToDoList from "./../assets/ToDoList2.png";
import Calculator from "./../assets/calculator.png";
import Leon from "./../assets/Leon-Templates-react.png";
import Example from "./../assets/example-templates.png";
import { Inputs, IProjectData, ISkills } from "../interfaces";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiSass, SiTypescript, SiRedux, SiAxios } from "react-icons/si";


export const dataProjects: IProjectData[] = [
    {
        id: '0',
        title: 'E-commerce Project',
        name: 'E-commerce',
        imageURL: ecommerce,
        description: 'E-Commerce Project is a simple and responsive online shopping website built with HTML, CSS, and JavaScript. It features a clean product display, user-friendly layout, and basic interactivity, showcasing the core structure of an e-commerce front-end.',
        proLink: 'https://mij-do.github.io/E-Commerce-Project/',
        proGithub: 'https://github.com/Mij-Do/E-Commerce-Project',
        HSkills: ['HTML', 'CSS', 'JS'],
    },
    {
        id: '1',
        title: 'Crud React Project',
        name: 'Crud React',
        imageURL: crudReact,
        description: 'React CRUD Project is a responsive web application built with React. It demonstrates core CRUD functionality (Create, Read, Update, Delete) using a clean and modern user interface. The project highlights practical use of React state management, form handling, and component structure.',
        proLink: 'https://react-crud-project-vert.vercel.app/',
        proGithub: 'https://github.com/Mij-Do/React-CrudProject',
        HSkills: ['ReactJS', 'TS', 'TailindCSS'],
    },
    {
        id: '2',
        title: 'To-Do List V2',
        name: 'To-Do List',
        imageURL: ToDoList,
        description: 'A basic To-Do List app using HTML, CSS, and JavaScript. Users can add, mark as done, and delete tasks. It features a dark-themed UI with a clean and modern design.',
        proLink: 'https://mij-do.github.io/TO_DO-List-V2/',
        proGithub: 'https://github.com/Mij-Do/TO_DO-List-V2',
        HSkills: ['HTML', 'CSS', 'JS'],
    },
    {
        id: '3',
        title: 'Calculator',
        name: 'Calculator',
        imageURL: Calculator,
        description: 'A basic calculator built with HTML, CSS, and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication, and division. The design is clean and responsive, making it easy to use on any device.',
        proLink: 'https://mij-do.github.io/Simple-Calcolator/',
        proGithub: 'https://github.com/Mij-Do/Simple-Calcolator',
        HSkills: ['HTML', 'CSS', 'JS'],
    },
    {
        id: '4',
        title: 'Leon Project',
        name: 'leon Project',
        imageURL: Leon,
        description: 'Leon Template is a simple project I built to practice the skills I recently learned, such as React, TypeScript, and using Sass for styling. The main goal was hands-on training and improving my understanding by building a complete design.',
        proLink: 'https://leon-project-v2.vercel.app/',
        proGithub: 'https://github.com/Mij-Do/Leon-Project-V2',
        HSkills: ['ReactJS', 'TS', 'Sass'],
    },
    {
        id: '5',
        title: 'Example Project',
        name: 'Example',
        imageURL: Example,
        description: 'Example Project is a simple website template for booking camping trips at different prices and locations in the USA. It was built using HTML, CSS, and JavaScript..',
        proLink: 'https://mij-do.github.io/Example-Project-/',
        proGithub: 'https://github.com/Mij-Do/Example-Project-',
        HSkills: ['HTML', 'CSS', 'JS'],
    },
];


export const dataInputs: Inputs[] = [
    {
        label: 'USER NAME',
        id: 'user',
        name: 'user',
        type: 'text',
    },
    {
        label: 'EMAIL',
        id: 'email',
        name: 'email',
        type: 'text',
    },
    {
        label: 'YOUR MESSEGE',
        id: 'msg',
        name: 'msg',
        type: 'text',
    },
];


export const dataSkills: ISkills[] = [
    {
        id: 1,
        title: 'Html5',
        children: SiHtml5,
        color: 'bg-orange-400',
    },
    {
        id: 2,
        title: 'Css3',
        children: SiCss3,
        color: 'bg-blue-400',
    },
    {
        id: 3,
        title: 'Java Script',
        children: SiJavascript,
        color: 'bg-yellow-400',
    },
    {
        id: 4,
        title: 'Type Script',
        children: SiTypescript,
        color: 'bg-indigo-400',
    },
    {
        id: 5,
        title: 'ReactJS',
        children: SiReact,
        color: 'bg-indigo-400',
    },
    {
        id: 6,
        title: 'BootStrap',
        children: SiBootstrap,
        color: 'bg-purple-400',
    },
    {
        id: 7,
        title: 'TailWind Css',
        children: SiTailwindcss,
        color: 'bg-blue-400',
    },
    {
        id: 8,
        title: 'Sass',
        children: SiSass,
        color: 'bg-pink-400',
    },
    {
        id: 9,
        title: 'Axios',
        children: SiAxios,
        color: 'bg-[#5a29e4]',
    },
    {
        id: 10,
        title: 'Redux-Toolkit',
        children: SiRedux,
        color: 'bg-[#593d88]',
    },
]