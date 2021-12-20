import React, { useState, useEffect, useRef } from "react";
import styles from "./Homepage.module.scss";
import { Box } from "@chakra-ui/react";
import Sidebar from "../Sidebar/Sidebar";
import PropTypes from "prop-types";

const HomePage = () => {
    return (
        <Box bg="brand.darkBlue" className={styles.pageContainer}>
            <div className={styles.leftNav}>
                <Sidebar />
            </div>
            <div className={styles.pageContent}>
                <p> test</p>
            </div>
            <div className={styles.animationContent}>
                <p> tesdst</p>
            </div>
        </Box>
    );
};

export default HomePage;
