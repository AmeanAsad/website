type projectIcon = "code" | "document" | "hardware";
export interface Project {
    id: string;
    icon: projectIcon;
    topic: string;
    title: string;
    tags: Array<string>;
    date: string;
}

export type ProjectCards = Array<Project>;
