export interface Link {
    github?: string;
    web?: string;
}

export interface Project {
    id: string;
    icon: string;
    topic: string;
    title: string;
    tags: Array<string>;
    acknowledgements: Array<any>;
    links?: Link;
    date: string;
}

export type ProjectCards = Array<Project>;
