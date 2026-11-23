export interface MenuItem {
    name: string;
    href: string;
}

const menu: Array<MenuItem> = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export default menu;
