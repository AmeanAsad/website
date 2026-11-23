import React from "react";
import Head from "next/head";
import Link from "next/link";
import menu from "./menu";

interface Props {
    title: string;
    description?: string;
    // href of the menu item to mark as the current page
    current?: string;
    children: React.ReactNode;
}

const Layout = ({ title, description, current, children }: Props) => {
    return (
        <div className="page">
            <Head>
                <title>{title}</title>
                {description && (
                    <meta name="description" content={description} />
                )}
            </Head>
            <nav className="nav">
                {menu.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <a
                            aria-current={
                                item.href === current ? "page" : undefined
                            }
                        >
                            {item.name}
                        </a>
                    </Link>
                ))}
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
