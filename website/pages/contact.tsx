import ContactPage from "../components/Contact/Contact";
import PageComponent from "../components/PageComponent";
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <PageComponent
                pageId="contact"
                Component={<ContactPage />}
            />
        </>
    );
};
export default Contact;
