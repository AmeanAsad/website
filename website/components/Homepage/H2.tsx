import React from "react";
import styles from "./Homepage.module.scss";
import { Box } from "@chakra-ui/react";
import AnimationComponent from "./Animation";

const HomePage = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            bg="brand.darkBlue"
            className={styles.pageContainer}
        >
            <AnimationComponent
                background="black"
                name="pts-tester"
                style={{ opacity: 0.95, height: "100vh", width: "100vw" }}
            />
        </Box>
    );
};

export default HomePage;
