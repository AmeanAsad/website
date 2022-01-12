import styles from "./Homepage/Homepage.module.scss";
import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import { NextPage } from "next";
import React from "react";

interface Props {
    pageId: string,
    Component: React.ReactNode
}
const PageComponent: NextPage<Props> = ({ pageId, Component }) => { // eslint-disable-line
    return (
        <Box position="relative" zIndex="10" className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <Sidebar />
            </div>
            {Component}

        </Box>
    );
};

export default PageComponent;
