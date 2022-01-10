import React from "react";
import styles from "./Homepage.module.scss";
import { Box } from "@chakra-ui/react";
import Animation from "./Animation.jsx";

const HomePage = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            bg="brand.darkBlue"
            className={styles.pageContainer}
        >
            <Animation />
        </Box>
    );
};

export default HomePage;
