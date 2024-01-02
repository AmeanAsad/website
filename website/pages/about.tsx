import AboutPage from "../components/About/About";
import PageComponent from "../components/PageComponent";
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="Amean Asad about page" />
            </Head>
            <PageComponent pageId="about" Component={<AboutPage />} />
        </>
    );
};
export default About;
