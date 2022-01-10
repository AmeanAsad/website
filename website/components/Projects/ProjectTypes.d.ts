export interface Project {
    id: string;
    icon: string;
    topic: string;
    title: string;
    tags: Array<string>;
    date: string;
}

export type ProjectCards = Array<Project>;
