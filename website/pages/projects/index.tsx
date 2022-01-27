import Projects from "../../components/Projects/Projects";
import React from "react";
import type { NextPage } from "next";
import PageComponent from "../../components/PageComponent";
import Head from "next/head";

const Proj: NextPage = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="Amean Asad notable projects that he has worked on"
                />
            </Head>
            <PageComponent
                pageId="projects"
                Component={<Projects />}
            />
        </>
    );
};
export default Proj;
