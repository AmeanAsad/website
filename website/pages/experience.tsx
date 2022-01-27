import Experience from "../components/Experience/Experience";
import React from "react";
import type { NextPage } from "next";
import PageComponent from "../components/PageComponent";
import Head from "next/head";

const exp: NextPage = () => {
    return (

        <>
            <Head>
                <title>Experience</title>
                <meta
                    name="description"
                    content="Amean Asad personal website experience page"
                />
            </Head>
            <PageComponent
                pageId="experience"
                Component={<Experience />}
            />
        </>
    );
};
export default exp;
