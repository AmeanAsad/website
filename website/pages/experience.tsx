import Experience from "../components/Experience/Experience";
import React from "react";
import type { NextPage } from "next";
import PageComponent from "../components/PageComponent";

const exp: NextPage = () => {
    return (
        <PageComponent
            pageId="experience"
            Component={<Experience />}
        />
    );
};
export default exp;
