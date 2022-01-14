import styles from "./Homepage/Homepage.module.scss";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";
import themeExtension from "../styles/theme";
import { NextPage } from "next";
import React from "react";

interface Props {
    pageId: string,
    Component: React.ReactNode
}
const PageComponent: NextPage<Props> = ({ pageId, Component }) => { // eslint-disable-line
    return (
        <ChakraProvider theme={themeExtension}>

            <Box position="relative" zIndex="10" className={styles.pageContainer}>
                <div className={styles.leftNav}>
                    <Sidebar pageId={pageId} />
                </div>
                {Component}

            </Box>
        </ChakraProvider>

    );
};

export default PageComponent;
