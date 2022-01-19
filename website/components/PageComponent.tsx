import styles from "./Homepage/Homepage.module.scss";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import themeExtension from "../styles/theme";
import { NextPage } from "next";
import React from "react";

interface Props {
    pageId: string,
    Component: React.ReactNode
    noSideBar?: boolean
}
const PageComponent: NextPage<Props> = ({ pageId, Component, noSideBar }) => { // eslint-disable-line
    const sideBar = (
        <div className={styles.leftNav}>
            <Sidebar pageId={pageId} />
        </div>
    );
    const classN = noSideBar ? styles.projectPage : styles.pageContainer;
    return (
        <ChakraProvider theme={themeExtension}>

            <Box position="relative" zIndex="10" className={classN}>
                {!noSideBar && sideBar}
                {Component}

            </Box>
        </ChakraProvider>

    );
};

export default PageComponent;
