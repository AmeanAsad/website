import AboutPage from "../components/About/About";
import PageComponent from "../components/PageComponent";
import React from "react";
import type { NextPage } from "next";

const About: NextPage = () => {
    return (
        <PageComponent
            pageId="about"
            Component={<AboutPage />}
        />
    );
};
export default About;
