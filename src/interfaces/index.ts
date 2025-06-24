export interface IProjectData {
    id: string | undefined;
    title: string;
    name: string;
    imageURL: string;
    description: string;
    proLink: string;
    proGithub: string;
    HSkills: string[];
}

export interface Project {
    id: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    HSkills: string[];
}

export interface Inputs {
    label: string;
    id: string;
    name: keyof IValue;
    type: string;
}

export interface IValue {
    user: string,
    email: string,
    msg: string,
}