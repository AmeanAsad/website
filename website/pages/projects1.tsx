import Projects from "../components/Projects/Projects";
import React from "react";
import type { NextPage } from "next";
import PageComponent from "../components/PageComponent";

const Proj: NextPage = () => {
    return (
        <PageComponent
            pageId="projects"
            Component={<Projects />}
        />
    );
};
export default Proj;
