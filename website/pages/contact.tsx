import ContactPage from "../components/Contact/Contact";
import PageComponent from "../components/PageComponent";
import React from "react";
import type { NextPage } from "next";

const Contact: NextPage = () => {
    return (
        <PageComponent
            pageId="contact"
            Component={<ContactPage />}
        />
    );
};
export default Contact;
