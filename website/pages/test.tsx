import Projects from "../components/Projects/Projects";
import PageComponent from "../components/PageComponent";
import React from "react";
import type { NextPage } from "next";

const Test: NextPage = () => {
    return (
        <PageComponent
            pageId="projects"
            Component={<Projects />}
        />
    );
};
export default Test;
